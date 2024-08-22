import { getUsers } from '@/lib/data'
import styles from './adminUsers.module.css'
import Image from 'next/image'
import { deleteUser } from '@/lib/action'


const AdminUsers = async () => {
  const users = await getUsers()

  return (
    <div className={styles.container}>
    <h1>Users</h1>
    {users.map(user => (
      <div className={styles.user} key={user.id}>
        <div className={styles.detail} >
          <Image
            src="/noavatar.png"
            alt=""
            width={50}
            height={50}
          />
          <span className={styles.userUsername}>{user.username}</span>
        </div>
        {/* <form action={() => deleteuserWithId(user.id)}> can't seem to pass a function like this, we'll need another component as pass id as prop*/ }
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id}/>
          <button className={styles.userBtn}>Delete User</button>
        </form>
      </div>
    ))}
  </div>
  )
}

export default AdminUsers
