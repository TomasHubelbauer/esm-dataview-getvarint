# ESM DataView `getVarint`

This JavaScript library extends the `DataView` prototype to add a `getVarint`
method.

The library is developed with Protobuf and SQLite varints in mind, but varints
are used in other applications as well, like Bitcoin, Minecraft and many others.

- [Protobuf varint](https://developers.google.com/protocol-buffers/docs/encoding#varints)
- [SQLite varint](https://sqlite.org/src4/doc/trunk/www/varint.wiki)

## Installation

### `script` tag

```js
<script src="https://tomashubelbauer.github.io/esm-dataview-getvarint/index.js"></script>
```

From this point on, any `DataView` will have a `getVarint` method.

### ES Modules

```js
import 'https://tomashubelbauer.github.io/esm-dataview-getvarint/index.js';

// From this point on, any `DataView` will have a `getVarint` method.
```

### Git Submodules

```sh
git submodule add https://github.com/tomashubelbauer/esm-dataview-getvarint
```

Once installed locally like this, either a `script` tag or ESM can be used to
reference the script as per above.

### NPM

This library is not on NPM.

## Usage & API

Reference the library as per [Installation](#installation).

```js
/** @type {DataView} */
const dataView = …;

/** @typedef {{ value: number; byteLength: number; }} Varint */

// Get a varint at the beginning of the data view
/** @type {Varint} */
const varint = dataView.getVarint();

// Get a varint at a given byte offset in the data view
/** @type {Varint} */
const varint = dataView.getVarint(1);
```
