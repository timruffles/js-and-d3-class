## Primitives
{title: 1}

## String
```javascript
var name = 'Tim';
var description = "It's saving escapes";

var complete = \`${name}: ${opinion}\`;
```


## Interpolation: `${}`

```javascript
var opinionOnEs6 = "much nicer";
var es6 = \`Interpolation: '${opinion}'\`;

var opinionOnEs5 = "looks ugly";
var es5 = "Interpolation: '" + opinion + "'";
```

## Template strings

```javascript
var es5Html = "<h1>Ugh</h1>" +
  "<p>This is horrid</p>";

var howMuch = "Much";

var html = \`
  <h1>Writing HTML with ES.Next</h1>
  <p>${howMuch} nicer</p>
\`;
```

## Rule: use `Boolean`
{rule:1}

```javascript
var name = "";
var coerced = Boolean(name);

console.log(coerced) // false
console.log(Boolean(17)) // true

// NOOOOOOOOOO - never wrap primitives
var evil = new Boolean(false);
if(evil) {
  console.log("I told you to avoid new with primitives")
}
```


## Comparison
{subtitle:true}

## `==` has issues

<!-- TODO image -->

## Rule: always use `===`
{rule:1}

## But *ONE* place to use `==`

## Handling `null` and `undefined`


## `undefined` and `null`

```javascript
var x; // ?

var y = null;
```

## `null` & `undefined`

- A nuisance since 1995.
- I'd stick to `undefined`

## `==` to the rescue!

```
var undefinedNotEqeqeqNull = undefined === null; // false

if(x === null || x === undefined) {
  // what a chore!
}

if(x == null) {
  // equivalent, shorter, nicer
}
```

## Rule: use `== null`
{rule:1}

```javascript
var nullish = x == null;
```

## `===`

1. Same type?
1. Same value?

1. Special cases: `NaN !== NaN`
1. Objects (non primitives): compares by identity, not value

## `==`

1. Objects (non primitives): compares by identity, not value
1. Beyond that, very complex. Just use for `null` or `undefined`

