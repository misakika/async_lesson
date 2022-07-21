/*
  ? １秒待ってから「global end」と表示される処理を書いてください
  */

// const sleep = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('setTimeout done')
//       resolve()
//     }, 1000)
//   })
// }

// sleep()
//   .then(() => {
//     console.log('global end')
//   })


/*
  ? userId: 4に紐づく/postsの「title」を配列で出力してください。
  ! ただし、userIdは/usersへリクエストを飛ばして取得してください。
  /users: https://jsonplaceholder.typicode.com/users
  /posts: https://jsonplaceholder.typicode.com/posts
  */

const fetchUsers = async () => {
  const users = await axios.get('https://jsonplaceholder.typicode.com/users')
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(users.data)
  console.log(posts.data)
}

fetchUsers()

