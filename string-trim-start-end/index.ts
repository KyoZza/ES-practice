function extractCommand(cmd: string) {
  const command = cmd.trimStart();

  if (command[0] === "/") return command.slice(1);
  return null;
}

function cleanMessage(msg: string) {
  return msg.trimEnd();
}

console.log(extractCommand("   /start  ")); // "start" (leading spaces removed, trailing spaces kept)
console.log(extractCommand("/help me")); // "help me" (keeps everything after `/`)
console.log(extractCommand("   hello")); // null (not a command)
console.log(extractCommand("  /")); // "" (valid command but empty)

console.log(cleanMessage("  Hello world!  ")); // "  Hello world!"
console.log(cleanMessage("No extra spaces")); // "No extra spaces"
console.log(cleanMessage("Trailing only   ")); // "Trailing only"
console.log(cleanMessage("   ")); // "" (only spaces become empty string)
