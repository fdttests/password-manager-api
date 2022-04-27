
<h1 align="center">Password Manager API</h1>

![Workflow Actions Node CI](https://github.com/fdttests/password-manager-api/actions/workflows/ci.yml/badge.svg)

App to manage passwords based on LastPass. Adittional information about the test can be seen [here](https://github.com/fdttests/password-manager/blob/main/challenge.md).

The project consists of two repositories:

- [Front end](https://github.com/fdttests/password-manager);
- [Back end](https://github.com/fdttests/password-manager-api);

## Demo

A demo of the application can be seen on:  [`https://fdt-password-manager.herokuapp.com/home`](https://fdt-password-manager.herokuapp.com/home)

## Running the application

Run `npm run build && npm run start` to run the production server. Navigate to `http://localhost:3000/` to see the app running.

## Algorithm & Approach

The application was developed using a simple express/typescript base project. The source consist of the following folders:

- `controllers`: Application http controllers;
- `form-requests`: Http request validations; 
- `models`: Model/types for typescript;
- `repositories`: Datasource classes;
- `use-cases`: Use cases classes;

To follow clean architecture, the src folder should be splited into core/infrastructure, domain and application layers. For the sake of simplicity, I decided to put everything on src, but on a production app, the layers concerns should be better defined.

Some simple use cases classes were implemented to isolate the communication between the application controller and the data souce (repositories).

The data is persisted using a node local-storage adapter. The repository is full async, so if in case of using a real database for storage in the future, it would only need to change the PasswordCardRepository implementation, without needing any change to the other parts of the application. 

No additional task runners were included, such as gulp, grunt or webpack. Only the native npm scripts were used. On a production application, a task runner should be used to organize the build process.

A simple Github Action was added to guarantee that the install/build/eslint process is working as expected.

## Bonus Points

Due to lack of time, tests were not implemented on api. In a production application, the functionality and behavior of each endpoint should be tested. The use case classes should have tests too.

## Technical Dependencies and Libraries

The app was developed using VS Code. The frameworks/dependencies used are listed bellow:

- `typescript & ts-node` - Used for building;
- `express` - Express framework for the NodeJs api. Version `~4.18.0` was used;
- `cors` - Express middleware to help dealing with cors;
- `express-validation` - Express middleware to http request validation;
- `node-localstorage` - NodeJs implementation of the localStorage api, used to persist the api data;
- `uuid` - Dependency used to generate unique ids and simulate a primary key;