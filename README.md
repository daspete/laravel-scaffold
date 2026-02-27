# laravel scaffold

Just a laravel docker scaffolding project. It uses inertia with vue 3.

## TODO

- Clone this repository
- if you want to create another instance, start `./create-app myapp` -> when you do so, also update the app folder in your compose.yml file
- copy the `/myapp/.env.example` file to `/myapp/.env` and adapt it to your needs
- copy the `/dev/database/.env.example` file to `/dev/database/.env` and adapt it to your needs
- start instance with `docker compose up -d`
- run `./shell composer install`
- run `./shell npm install`
- run `./artisan migrate:install` 
- run `./artisan migrate:fresh`
- run `./artisan key:generate`
- create en entry in your local hosts file `127.0.0.1 myproject.test`
- go to http://myproject.test

## CLI usage

There are a few helper scripts to use the in container tools easily.

- ./artisan links to the php artisan command in the laravel container
- ./php links to the php cli in the laravel container
- ./shell links to the shell in the laravel container

## dev mode

To run the dev mode, just start `./shell npm run dev`

if you need SSR enabled, also run `./artisan inertia:start-ssr`