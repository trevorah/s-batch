# s-batch

A transform stream that batches items into arrays.

## Installation

```bash
npm install s-batch
```

## Usage

```js
import sBatch from "s-batch";

const batch = sBatch(3);

const result = await Array.fromAsync(
  ReadableStream.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipeThrough(batch)
);

console.log(result); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

## API

### `sBatch<T>(batchSize: number): TransformStream<T, T[]>`

Returns a transform stream that batches items into arrays.
