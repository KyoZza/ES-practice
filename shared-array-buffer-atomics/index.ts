const buffer = new SharedArrayBuffer(4);
const view = new Int32Array(buffer);

const worker1 = new Worker(import.meta.resolve("./worker.ts"), {
  type: "module",
});
const worker2 = new Worker(import.meta.resolve("./worker.ts"), {
  type: "module",
});

worker1.postMessage(buffer);
worker2.postMessage(buffer);

// sync
// Atomics.wait(view, 0, 0);
// console.log(`Final count: ${Atomics.load(view, 0)}`);

// async
const { async, value } = Atomics.waitAsync(view, 0, 0);
if (async) {
  value.then(() => console.log(`Final count: ${Atomics.load(view, 0)}`));
} else {
  console.log(`Final count: ${Atomics.load(view, 0)}`);
}
