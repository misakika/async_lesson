const sleep = () => {
  setTimeout(() => console.log(' two '), 1000)
}

console.log(' one ')
sleep()
console.log(' three ')

const fetchUsers = () => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(() => {
    console.log(' two ')
  })
}

// console.log(' one ')
// fetchUsers()
// console.log(' three ')
