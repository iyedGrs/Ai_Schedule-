<?php

// Login route
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Routing\Route;

Route::post('auth/login', [AuthController::class, 'login']);
Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/logout', [AuthController::class, 'logout']);