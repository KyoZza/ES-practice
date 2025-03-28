interface Log {
  level: string;
  timestamp: string;
  message: string;
}

function parseLogEntry(log: string): Log {
  const regex =
    /\[(?<level>\w+)\]\s+(?<timestamp>\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}) - (?<message>.*$)/;

  const result = regex.exec(log);
  if (!result?.groups) throw new Error("Invalid log");

  return {
    level: result.groups.level,
    message: result.groups.message,
    timestamp: result.groups.timestamp,
  };
}

const log1 = "[ERROR] 2025-03-29 14:55:10 - Failed to connect to database";
const log2 = "[INFO]  2025-03-29 14:56:02 - User login successful";

console.log(parseLogEntry(log1));
console.log(parseLogEntry(log2));
