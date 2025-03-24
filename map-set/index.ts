const userLogins = new Map<number, string[]>()
const uniqueVisitors = new Set<number>()

function trackLogin(userId: number) {
  const timeStamp = new Date().toISOString()
  const timeStamps = [...(userLogins.get(userId) || []), timeStamp]

  userLogins.set(userId, timeStamps)
  uniqueVisitors.add(userId)
}

trackLogin(1)
trackLogin(2)
trackLogin(1)

console.log(userLogins)
/* Expected Output:
Map {
  1 => ["2024-03-24T12:00:00Z", "2024-03-24T12:05:00Z"],
  2 => ["2024-03-24T12:02:00Z"]
}
*/

console.log(uniqueVisitors)
// Expected Output: Set { 1, 2 }
