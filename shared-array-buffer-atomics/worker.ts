/// <reference lib="deno.worker" />

self.onmessage = (event) => {
  const view = new Int32Array(event.data);

  for (let i = 0; i < 5; i++) {
    Atomics.add(view, 0, 1);
  }

  Atomics.notify(view, 0, 1);
};
