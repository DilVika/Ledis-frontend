# Ledis - A Simple Redis-cli clone

This project was deployed on firebase: [Ledis](https://ledis-frontend.web.app/).

## Overview

This simple project creates a simplified, light-weight version using Reactjs, follow [Redis-CLI](https://try.redis.io/) websites and has been deployed on firebase.

To run, using ### `npm start`

## Design

### UseCases
Using to handle main logic business, structuring, modify, get and defined the way how commands were handled.
###  Handlers
Using to get and do basic verify commands, then control, decide what use case is needed, as well as process data after executing the commands and return to UI.
### Utils
Includes Handle pre-processing, converting, standardize,... data functions, which is used by UseCases or Handler.
### Components
React-stuff definitions represent a part of UI.

### Data Flows
* The Controller/Handlers received UI input, verify and choose which useCase to be used or return an error.
* The useCase then received its needed data to process, save, load, filter,... and then return the result string to Handlers.
* The Handlers take results, check if has any error or data, then return to the UI.
* The UI with React-stuff (hooks, data, component,...) get data and change the UI to follow the data.

## Thought Process
So There is only one command that has been working at one time, every command to be executed as a single data flow.  
Due to that speciality, using useCase to make every single command has its place to store its logic is a good choice.
The UI implementation with SPA, not a lot of components and state, so I choose not to use third-party state management, using hooks and pass props to make changes, update UI.

## Knows Issues
* Some behaviour is not like the Redis version, like (error notification, result when null, empty).
* Some minor bugs
* Bugs related to OS's default Vietnamese keyboard can cause some problems (duplicate commands, text, lost character,...).
* You tell me.
