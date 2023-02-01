## Node.js Tutorial for Beginners:

### Special about Node:

- Great for prototyping and agile development
- superfast and highly scalable
- JavaScript everywhere
- Cleaner and more consistent
- Large ecosystem of open-source files

Note: _Node is not a programming language_

### Node Architecture:

(Ryan Dahl)

JS code -> JS Engine -> Machine Code

- Browser provide a runtime environment to JS code
- Different browsers have different JS engine
  - Edge uses Chakra
  - Firefox uses SpiderMonkey
  - Chrome uses v8
- Depending on JS engine, JS can behave differently.

Before Node only way to run JS code is on the Browser.

### How Node works:

- Non blocking Asynchronous (By default)
- Ideal for I/O intensive apps (Data intensive and real time application)
- Not ideal for CPU-intensive apps
  - Since Node is single threaded, when performing the calculation of one client, the other client need to be wait.

### First Node Program:

```js
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Sourav");
```

To run this:

```bash
node app.js
```

_Note:_

- In node there is no window or document object

```js
function sayHello(name) {
  console.log("Hello " + name);
}

console.log(window);
```

This will give us `ReferenceError: window is not defined`

### Node Global Object:

- Node uses `global` instead of `window` object in JS

```js
//JS
window.setInterval();
window.clearInterval();

window.setTimeout();
window.clearTimeout();

// Node
global.setInterval();
global.clearInterval();

global.setTimeout();
global.clearTimeout();
```

_Note:_

```js
var message = "";
console.log(global.message);
```

It will output `undefined` on the console because `variables` and `functions` that we defined here, they are not added to the global object.

### Module:

In order to build reliable and maintainable applications, we should avoid defining functions and variables in the global scope.

- every file of node application is considered as a module.
- variables and functions are defined inside each module can't be available outside that module.
- To access variable outside of the defined module we need to export it

See the Output of the following:

```js
console.log(module);
```

It will give us output something like that

```bash
Module {
  id: '.',
  path: '/home/sherlock/Desktop/Learn',
  exports: {},
  filename: '/home/sherlock/Desktop/Learn/app.js',
  loaded: false,
  children: [],
  paths: [
    '/home/sherlock/Desktop/Learn/node_modules',
    '/home/sherlock/Desktop/node_modules',
    '/home/sherlock/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
```

### Creating and loading modules

```js
// logger.js(module)
var firstName = "Sourav";

function log(message) {
  console.log(message);
}

module.exports.log = log;
```

loading module

```js
// app.js (main module)
// require(name or the path of target variable)

const logger = require("./logger");
console.log(logger);
logger.log("output from logger module");
```

Output:

```bash
{ log: [Function: log] }
output from logger module
```

If we want to export a single function instead of an object

```js
// logger.js(module)
var firstName = "Sourav";

function log(message) {
  console.log(message);
}

module.exports = log; // only export log function
```

```js
// app.js (main module)
const log = require("./logger");
log("output from logger module");
console.log(log);
```

Output:

```bash
output from logger module
[Function: log]
```

_Note_: Good practice to use `const` keyword instead of `var`

### HTTP Module:

```js
const http = require("http");

const server = http.createServer();

server.on("connection", (socket) => {
  console.log("new connection");
});
server.listen(3000);
console.log("listening on port 3000 ...");
```

Now, if we goto `localhost:3000` we will see that a `new connection` established

Output

```bash
listening on port 3000 ...
new connection
```

Passing a `Callback` function on `createServer` method

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World"); // it will show Hello World on the browser
    res.end();
  }
});

server.listen(3000);
console.log("listening on port 3000 ...");
```

Stop listening on specific port

```bash
sudo lsof -i:port_number
kill -9 {pid}
```
