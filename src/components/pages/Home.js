import React, {useState } from 'react'
import Navbar from '../layout/Navbar'
import Users from '../user/Users'
import axios from 'axios'
import Search from '../user/Search'

export const Home = () => {

  const [state, setState] = useState({
    users: [],
    loading: false,
    user: {},
  })

   const {users, loading,} = state

   //search for github users
    const searchUsers = (text) => {
      setState({...state, loading:true})
      axios.get(`https://api.github.com/search/users?q=${text}&`)
      .then(res => setState({users: res.data.items, loading: false}))
      .catch(err => console.log(err))
      
  }

    const clearUsers = () => {
      setState({users: []})
    }

  return (
    <div>
         <Navbar title='Github Finder'/>
         <Search searchUsers={searchUsers} clearUsers={clearUsers} users={users}/>
         <Users users={users} loading={loading} />    
    </div>
  )
}

export default Home
