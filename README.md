# superappbase

> **Warning**
> This is super not ready for production, it's just a base for you to start building your demo web app.
> it is just made to make your life easier, and it is riddled with security holes, and bad practices.

## How to Use

### Clone the repository

```bash
git clone https://github.com/GarethCGI/SuperAppBase superappbase
```

```bash
cd superappbase
```

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run start
```

## Development

The project already has a dev script that runs the server with nodemon and vite

```bash
npm run dev
```

### The most important folders for you to customize are

- [`src/database/models`](./src/database/models)
 Here you may define your database models, so anything you want to store permanently in the database goes here.
- [`src/routes`](./src/routes)
 Here you may define your routes, so anything you want to be accessible via API goes here, every file in this folder is a route, and supports named parameters using the syntax `$name`.
 And every file defines its HTTP methods using the `get`, `post`, `put`, `patch`, `delete` functions.
 Look at the [example route](./src/routes/example.ts) for more information.
- [`src/web`](./src/web)
 Here you may define your web pages, so anything going to the browser goes here, use it like a standard web project, but with the advantage of getting some extra stuff to make your life easier.

### Some important functions

- `getDatabase()` returns a [TypeORM](https://typeorm.io/) datasource, so you can use it to query the database.

### That's it

Now you can start building your app, have fun!

### Running with bun

> **Warning**
> bun does not install sqlite3, so you must use npm install if you want to use sqlite.

The only needed things is:

- uncomment the specified things in the .tsconfig file
- set the type in package.json to module instead of commonjs
- run the server with `bun run start:bun`
