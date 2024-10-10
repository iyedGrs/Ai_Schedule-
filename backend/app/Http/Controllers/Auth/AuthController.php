<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User; // Import the User model
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash; // For password hashing
use Illuminate\Validation\ValidationException;
use Exception;

class AuthController extends Controller
{
    // Register method
    public function register(Request $request)
    {
        try {
            // Validate the input request
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:8|confirmed', // 'confirmed' means a password_confirmation field is required
            ]);

            // Create the user
            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']), // Hash the password
            ]);

            // Generate Sanctum token for the newly registered user
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Registration successful',
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
                'access_token' => $token,
            ], 201); // 201 status code for successful resource creation

        } catch (ValidationException $e) {
            // Return validation errors
            return response()->json([
                'errors' => $e->errors(),
            ], 422); // HTTP status code for validation errors
        } catch (Exception $e) {
            // Handle any other exceptions
            return response()->json([
                'error' => 'Something went wrong during registration, please try again.',
                'message' => $e->getMessage(),
            ], 500); // Internal server error
        }
    }

    // Login method
    public function login(Request $request)
    {
        try {
            // Validate the input request
            $validatedData = $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);

            // Attempt to authenticate the user
            if (Auth::attempt($validatedData)) {
                $user = Auth::user();
                
                // Create the token using Sanctum
                $token = $user->createToken('auth_token')->plainTextToken;

                return response()->json([
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,
                    ],
                    'access_token' => $token,
                    'two_factor' => false, 
                ], 200);
            }

            // If authentication fails (no record matches)
            return response()->json(['message' => 'Invalid credentials'], 401);

        } catch (ValidationException $e) {
            // Return validation error with messages
            return response()->json([
                'errors' => $e->errors(),
            ], 422); // HTTP status code for validation errors
        } catch (Exception $e) {
            // Handle any other exceptions
            return response()->json([
                'error' => 'Something went wrong, please try again.',
                'message' => $e->getMessage(),
            ], 500); // Internal server error
        }
    }

    // Logout method
    public function logout(Request $request)
    {
        try {
            // Check if the user is authenticated
            if ($request->user()) {
                // Revoke the user's current token
                $request->user()->currentAccessToken()->delete();

                return response()->json(['message' => 'Logged out successfully'], 200);
            } else {
                return response()->json(['error' => 'User is not authenticated.'], 401);
            }
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Something went wrong while logging out.',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
