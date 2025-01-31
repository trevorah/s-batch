import sBatch from "./index.js";
import { test } from "node:test";
import assert from "node:assert";

test("sBatch", async () => {
  const batch = sBatch(2);

  const result = await Array.fromAsync(
    ReadableStream.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipeThrough(batch)
  );

  assert.deepEqual(result, [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("sBatch with empty stream", async () => {
  const batch = sBatch(2);
  const result = await Array.fromAsync(
    ReadableStream.from([]).pipeThrough(batch)
  );
  assert.deepEqual(result, []);
});

test("sBatch with stream of size 1", async () => {
  const batch = sBatch(1);
  const result = await Array.fromAsync(
    ReadableStream.from([1]).pipeThrough(batch)
  );
  assert.deepEqual(result, [[1]]);
});

test("sBatch with stream of size 1 and batch size 2", async () => {
  const batch = sBatch(2);
  const result = await Array.fromAsync(
    ReadableStream.from([1]).pipeThrough(batch)
  );
  assert.deepEqual(result, [[1]]);
});
