# Kesko Assignment

## Tech stack

The app is written using the following technologies:

- React.js
- Typescript
- Node.js
- Express.js
- SQLite3 
- Northwind database
- esLint
- Docker/docker-compose
- Yarn
- Jest

## Backend commands

The following commands are to be executed from the root directory of the backend part of the app.

### Install required packages
```bash
yarn
```

### Run development server
```bash
yarn run dev
```

### Run production server
```bash
yarn start
```

### Tests
```bash
yarn run test
```

### Lint
```bash
yarn run lint
```

### Prettier
```bash
yarn run prettier
```

## Frontend commands

The following commands are to be executed from the root directory of the frontend part of the app.

### Install required packages
```bash
yarn
```

### Run development server
```bash
yarn start
```

### Build
```bash
yarn run build
```

### Tests
```bash
yarn run test
```

### Lint
```bash
yarn run lint
```

### Prettier
```bash
yarn run prettier
```

### Eject

```bash
yarn run eject
```

## Docker commands

The following commands are to be executed from the root directory of the app.

### Bring up services

```bash
docker-compose up -d
```

### Bring up and build services

```bash
docker-compose up -d --build
```


## Functionality

- ✅ The application should have a good-looking UI with a responsive layout.
- ✅ The backend should have some RESTful API.
- ✅ The code should be maintainable, testable and scalable.
- ✅ There should be documentation on how to run the code and the test.
- ✅ The application should work on mobile as well.
- ✅ It should be possible to view all orders.
- ✅ Typing in the input should cause the orders to filter as user types. Filtering is done by the product name in the order.
- ✅ When the checkbox is checked then only shipped orders are shown.
- ✅ For products show all of them if 4 or fewer. Otherwise, show 3 and the text indicating there are more orders as shown in the design.
- ✅ The “View details” button is a link to the URL “order/{orderIdHere}” but you don’t need to implement the order details page itself.
- ❌ (Optional) The application should be deployed to a cloud hosting service.


## Known issues

- When trying to bring up the backend service via Docker it throws the following error:

```
Error: Cannot find module '/usr/src/app/node_modules/sqlite3/lib/binding/napi-v6-linux-glibc-x64/node_sqlite3.node'
```
The reinstallation of `sqlite3` package did not help. I believe it relates to [this issue](https://github.com/TryGhost/node-sqlite3/issues/1513).


## Potential improvements

- Deploy the app to a cloud hosting service.
- Solve the issue with sqlite3 package installation in Docker and run the app properly within the Docker environment.
- Introduce end-to-end tests (e.g. with cypress) to the frontend part of the app.
- Add data pagination.
- Set up CI/CD pipelines.