# Recipe Builder using nodes and edges

## Motivation

I built this app to help anyone who wants an easy, step-by-step way to put together packed lunches. It’s meant to be a simple and helpful tool for busy people who want to plan their meals without the stress.

The app works by storing ingredients as nodes, and the steps for using them are shown through connections between those nodes.

The goal is to show you what ingredients you need and the order to use them, making lunch prep smoother and clearer.

I hope you find it helpful and maybe even fun to use!

P.S. The app is still a work in progress, but with more time, I’d love to make it even better and more useful.

## How to start the project

- in the main folder (recipe-builder) run `npm install`
- `cd client && npm install`
- `cd ..`
- `cd server && npm install`
- `cd .. && npm run start` - this will start the app with hot rebuild both on the front end and backend

## The app has the following features

- get nodes and edges from the database;
- view the connected node in a `React Flow` canvas;
- create new node.

## What I wish I could do if I had more time

### Shared Data

- a shared types package that will server both the backend and the frontend enhance DRY code.

### Development

- build endpoint for create new edge;
- build database service for create new edge and get edge by ID;
- node interactivity with drag/drop functionality;
- build the compute data in the flow using the following hooks: `updateNodeData`, `useNodeConnections`, `useNodesData`.

### Testing

- mock the database services to avoid interaction with the real database;
- test the new node creation and get node by ID;
- test the new edge creation and get edge by ID;
- a favicon icon for the Zero One Recipe Builder App.

### Bugs

- fix the not displaying nodes: when I feed the nodes through `useNodesState` hook the nodes are not displayed anymore; but when I feed them directly from my custom hook `useNodes` they are displayed.
