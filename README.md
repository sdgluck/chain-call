# chain-call

> Build a chain of method calls 

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/chain-call"><img alt="npm version" src="https://badge.fury.io/js/chain-call.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) 

## Install

```sh
npm install --save chain-call
```

```sh
yarn add chain-call
```

## Import

```js
// ES6
import chainCall from 'chain-call'

// CommonJS
var chainCall = require('chain-call')
```

## Example

```js
const callApi = (entity, identifier) => chainCall(api, [
  entity,
  [typeof identifier === 'string' ? 'slug' : 'id', identifier],
  'get',
  ['then', (response) => response]
])

callApi('users', 59) // calls api.users().id(59).get().then((response) => response)
```

## API

### `chainCall(subject, calls)`

Chain call methods on an object.

- __subject__ {Object} Object to chain method calls on
- __calls__ {Array} Array of calls to chain
 
Returns the result of invoking each method in `calls` one-by-one 
on the return of the previous, beginning with a call on `subject`.

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out Kent C. Dodds'
[great video tutorials on egghead.io](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github)!

## Author & License

`chain-call` was created by [Sam Gluck](https://twitter.com/sdgluck) and is released under the MIT license.
