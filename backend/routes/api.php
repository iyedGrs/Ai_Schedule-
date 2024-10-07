<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// Login route
Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required']
    ]);

    // Use the web guard explicitly for login
    if (Auth::guard('web')->attempt($credentials)) {
        // Regenerate session after successful login
        $request->session()->regenerate();

        // Generate a Sanctum token
        $token = $request->user()->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
        ], 200);
    }

    // If authentication fails
    return response()->json(['message' => 'Invalid credentials'], 401);
});


// Register route
Route::post('/register', function (Request $request) {
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8',
    ]);

    // Create user with bcrypt hashing
    $user = \App\Models\User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
    ]);

    // Create Sanctum token
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'User registered successfully',
        'token' => $token,
    ], 201);
});

// Sanctum protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Get current user info
    Route::get('/user', function (Request $request) {
        return response()->json($request->user());
    });

    // Logout route
    Route::post('/logout', function (Request $request) {
        // Revoke the user's token
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    });
});
