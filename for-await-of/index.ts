// async generator version
async function* fetchUsers() {
  const users = ["User1", "User2", "User3"];

  for (const user of users) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield user;
  }
}

// async iterable version
const userIterable: AsyncIterable<string> = {
  // with generator as itearator
  // async *[Symbol.asyncIterator]() {
  //   const users = ["User1", "User2", "User3"];

  //   for (const user of users) {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     yield user;
  //   }
  // },

  // async iterator
  [Symbol.asyncIterator]() {
    let index = 0;
    const users = ["User1", "User2", "User3"];

    return {
      next: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (index === users.length) {
          return {
            value: undefined,
            done: true,
          };
        }

        return {
          value: users[index++],
          done: false,
        };
      },
    };
  },
};

async function test() {
  for await (const user of fetchUsers()) {
    console.log(user);
  }
}

test();
