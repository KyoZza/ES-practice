function delayedTask(task: "fetch" | "save") {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (task === "save") reject("No write access");
      resolve({ id: 1, name: "Alice" });
    }, 1000)
  );
}

delayedTask("fetch").then(console.log).catch(console.error).finally(() =>
  console.log("Task completed")
);

delayedTask("save").then(console.log).catch(console.error).finally(() =>
  console.log("Task completed")
);
