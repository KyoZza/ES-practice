function invertObject(obj: object) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key]),
  );
}

console.log(invertObject({ a: "1", b: "2", c: "1" }));
// Expected output: { '1': 'c', '2': 'b' }
