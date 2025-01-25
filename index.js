export default function sBatch(batchSize) {
  let batch = [];
  return new TransformStream({
    transform(chunk, controller) {
      batch.push(chunk);
      if (batch.length === batchSize) {
        controller.enqueue(batch);
        batch = [];
      }
    },
    flush(controller) {
      if (batch.length > 0) {
        controller.enqueue(batch);
      }
    },
  });
}
