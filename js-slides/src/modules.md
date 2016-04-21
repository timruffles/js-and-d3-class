## Designing in JS
{title:true}

## Structuring an application

> Make smaller things.

Sandii Metz

## Lots of small bits

## CommonJS

Node's module system

## Export

```javascript
// A.js
module.exports.someFunction = function() {
}


module.exports.A_CONSTANT = "hi there";
```

```javascript
// B.js
var myModule = require("./A.js");

// myModule is the module.exports from A.js
console.log(myModule.A_CONSTANT) // "hi there"
```


## Third-party code

```javascript

// this is from core library
var fs = require("fs");

// this is looked up from node_modules folders in current,
// and parent directories
var anNpmModule = require("from-npm");
```

## Third-party vs local code

```javascript

// either standard library or node_modules
var fs = require("fs");

// relative path
var ourCode = require("../path/to/code");

// absolute path
var moreCode = require("/path/to/code");
```

## Export shorthand

```javascript
// A.js
exports.someFunction = function() {
}

exports.A_CONSTANT = "hi there";
```

```javascript
// B.js
var myModule = require("./A.js");

// myModule is the module.exports from A.js
console.log(myModule.A_CONSTANT) // "hi there"
```

## Replacing the default export

```javascript
// A.js
module.exports.mainFunction = exports = function main(path) {
}

exports.A_CONSTANT = "hi there";

```

```javascript
// B.js
var myModule = require("./A.js");

console.log(myModule.toString) // "function main(path) { ...

console.log(myModule.A_CONSTANT) // "hi there"
```


## export

```javascript
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
⭐️                                     ⭐️
⭐️      'Behind the scenes'            ⭐️
⭐️ var module = { exports: {} };       ⭐️
⭐️ var exports = module.exports;       ⭐️
⭐️                                     ⭐️
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

exports.helper = function() {
}

module.exports = function Main() {
}
```

<ul>
  <li>What's wrong with the code above?</li>
  <li class="fragment">
     We've redefined <code>module.exports</code>!
  </li>

  <li class="fragment">
    Original <code>exports</code> object is no longer in module object.
  </li>
</ul>

## Let's have a go!
{exercise:true}

    exercises/commonjs

