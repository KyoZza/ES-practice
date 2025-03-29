type Value = number | null | Value[];

const data: Value[] = [1, [2, null, [3, [4, null]], 5], null];

function transformData(arr: Value[]): number[] {
  const transform = (val: Value) => {
    if (Array.isArray(val)) return val.flatMap<number>(transform);
    if (val !== null) return val * 2;
    return [];
  };

  return arr.flatMap(transform);

  // return arr.flat(3).filter(Boolean).map((val) => (val as number) * 2);
}

console.log(transformData(data));
// Expected Output: [2, 4, 6, 8, 10]
