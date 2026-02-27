<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('test/hello', [
//         'user' => (object) [
//             'name' => 'John Die',
//         ],
//     ]);
// });

Route::inertia('/', 'test/hello', [
    'user' => (object) [
        'name' => 'John Die',
    ],
]);
