function logActivity(
  user: string,
  action: string,
  timestamp: string,
) {
  console.log(`[${timestamp}] ${user} performed ${action}`);
}

logActivity("Alice", "logged in", "2024-03-25 10:00:00");
// Expected Output: [2024-03-25 10:00:00] Alice performed logged in
