const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];


function getUsersNames(users) {
  return users.map(user => user.name)
}

function getUserAverageAge(users) {
  if (users.length === 0) {
    return 0 
  }

  const totalAge = users.reduce((sum, user) => sum + user.age, 0)
  return totalAge / users.length
}

const names = getUsersNames(users)
console.log(names)

const averageAge = getUserAverageAge(users)
console.log(averageAge.toFixed(2))