## Objects
{title:1}

## Confusion

## `Object`

```javascript
const a = { b: 1 }; // this is an instance of 'Object'

// A is an object too!
A.b = 1;
function A() {
}

console.log(typeof null); // object
```

## Nope
{bad: true}

## OOP

- Object-oriented programming. 
- Alan Kay's 'objects'


     The big idea is "messaging". 

## OOP in JS

- ES6: `class`
- ES5: prototypes

## ES6

```javascript
class Widget {
  constructor({ model }) {
    this._model = model;
  }

  render() {
    return \`<div>${ this._model.get("name") }</div>\`;
  }
}

const instance = new Widget({
  model: new Map([["name", "crockford"]]),
});
```

## Let's break it down

```javascript
class Widget {
  // this is the function invoked when we call 'new Widget'
  constructor({ model }) {
    // ... 
  }
}
```

## Let's break it down

```javascript
class Widget {
  // ...

  // methods defined here will be callable on the instances
  render() {
    
  }
}
```

## Let's have a go
{exercise:true}

    Exercise 1

    exericses/objects-and-prototypes

## Okay that's the basics

## What about

## Privacy?

## Consensual privacy

```javascript
class Widget {

  render() {
    return \`<div>${ this._renderName() }</div>\`;
  }

  // prefix to show it's private
  _renderHelper() {
    return \`<span class='name'>
      ${ this._model.get("name") }
    </span>\`;
  }

}

const instance = new Widget(/\* ... \*/);

instance.render();
instance._renderHelper(); // no error
```

## Inheritence

```javascript
class DefaultMap extends Map {

  constructor(members, defaulter) {
    super(members);
    this._default = defaulter;
  }

  get(key) {
    if(!this.has(key)) {
      this._default(key, this);  
    }

    return super.get(key);
  }
}

const instance = new DefaultMap([["apples", 7 ]]), 
  () => 0)

console.log(instance.get("apples")) // 7
console.log(instance.get("pears")) // 0
```

## Broken down

```javascript
class DefaultMap extends Map {

  constructor(members, default) {
    super(members);
    this._default = default;
  }

  // ...
}
```

```javascript
// this is the default constructor of a sub-class
constructor(...args) {
  super(...args)
}
```

## Calling super methods

```javascript
class DefaultMap extends Map {
  // ...

  get(key) {
    // ...

    return super.get(key);
  }
}
```

## Let's try
{exercise:true}

    Exercise 2

    exercises/objects-and-prototypes

## Properties?

```javascript
class Widget {
  something: [];
}
```

## Nope
{bad:true}

## Deliberate ommission

## Instead

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

## Why?

## Well...

## How do JS objects really work?

## Prototypes!

## Big idea

## If an object doesn't know, it asks its prototype

##        
{notitle:1}

<img src="media/prototypes.png">

<!-- TODO explain why on image - i.e that we're reducing repetition -->

## Chain

<img src="media/prototype-chain.png">

## Lookup algorithm
{code:1}

```javascript
// always at run-time
function getProperty(object, prop) {
  if(object.hasOwnProperty(prop)) {
    return object[prop];
  } else {
    if(object.\_\_proto\_\_) {
      getProperty(object.\_\_proto\_\_, prop);
    } else {
      return undefined;
    }
  }
}
```


## `this` on invocation
{code:1}

```javascript
const sturcture = {
  squareArea: function() {
    return this.width * this.height;
  },
};

const house = Object.create(structure);
Object.assign(house, {
  width: 5,
  height: 10,
});

house.squareArea() // 50
```

## Magic argument `this`

```javascript
// this = someObject
someObject.someProperty();

const someProperty = this.someObject;

// this = enclosing this, likely global
someProperty();
```

## Classic bug
{code:1}

```javascript
var someObject = {
  name: "lil' listeny",
  listen: function(el) {
    el.addEventListener("click", this.handle)
  },
  handle: function() {
    console.log(this.name);
  },
};

// what do we see console.log'd?
someObject.listen(button);
button.click();
```

## How can we fix?

## `=>`
{code:1}

```javascript
var someObject = {
  // ...
  listen: function(el) {
    // fat arrow has lexical this! i.e this of current scope
    el.addEventListener("click", (e) => this.handle(e))
  },
  // ...
};
```

## Let's try!
{exercise:true}

    Exercise 3

    exercises/objects-and-prototypes

