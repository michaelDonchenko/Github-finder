import React from 'react'
import UserItem from './UserItem'
import '../../css/user/Users.css'
import Spinner from '../layout/Spinner'

const Users = ({users, loading}) => {

   if (loading) {
      return (
        <Spinner />
      )
    } else {
      return (
       <div className="container users__container">
          {
            users.map(user => (
              <div>
              <UserItem user={user} />
              </div>
            ))
          }
       </div>
      )
    }

}

export default Users
