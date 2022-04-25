<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JwtAuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        if (!empty(auth()->user())) {
            return $this->respondWithToken(
                str_replace('Bearer ', '', request()->header('Authorization')),
                auth()->user()
            );
        }

        $credentials = request(['email', 'password']);

        $guards = ['admin', 'roditelj', 'ucesnik'];


        foreach ($guards as $guard) {
            if ($token = auth($guard)->attempt($credentials)) {
                return $this->respondWithToken($token, auth($guard)->user());
            }
        }
        // return response()->json(auth()->guard());
        return response()->json(['error' => 'Unauthorized', 'message' => 'Login failed'], 401);
        // return auth()->attempt($credentials);
        // if (! $token = auth()->guard('roditelj')->attempt($credentials)) {
        // if (! $token = auth()->guard('admin')->attempt($credentials)) {
        //     // return response()->json(['error' => 'Unauthorized','message' => 'Login failed'], 401);
        // }



    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        // return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            // 'user' => auth($guard)->user()->toArray() + ['user_type' => $guard]
            'user' => $user->toArray() + $user->getJWTCustomClaims()
            // 'user' => \JWTAuth::toUser($token)
        ]);
    }
    public function profile()
    {
        // sleep(30);
        return $this->respondWithToken(request()->header('Authorization'), auth()->user());
        return response()->json(auth()->user());
    }
}
