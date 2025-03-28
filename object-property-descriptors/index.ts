const user = {
  name: "Alice",
  age: 25,
  get info() {
    return `${this.name}, ${this.age}`;
  },
};

Object.defineProperty(user, "role", {
  value: "admin",
  writable: false,
  enumerable: false,
  configurable: true,
});

// will list the defined property
console.log(Object.getOwnPropertyDescriptors(user));
// won't list the defined property due to `enumerable: false`
console.log(Object.entries(user));
// can't delete the propery due to `configurable: false`
// delete user.role;
// can't modify the propery due to `configurable: false`
Object.defineProperty(user, "role", { configurable: true });
