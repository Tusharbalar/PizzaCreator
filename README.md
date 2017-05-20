## Pizza Creator

Component architecture is the fundamental building block of applications, and isn’t just limited to Angular. Building with components allows for things such as encapsulation, isolation and reusability for a single or set of components. When dealing with forms, using components has typically been a challenge - and I’d like to share some patterns when creating reactive forms with Angular’s component based system that make dealing with forms a bit of a breeze.

For the purposes of this application, we’ll be focusing on some of Angular’s reactive form APIs and how we can apply them to container and presentational components to build out this small pizza application that demonstrates some things I’ve been thinking about lately.

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script
