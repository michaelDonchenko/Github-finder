import React, { Fragment, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Navbar from '../layout/Navbar';
import axios from 'axios'


const User = (props) => {

  const [state, setState] = useState({
    loading: false,
    user: {},
  })

   const {loading, user} = state

   const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

    //get single user
    const getUser = (name) => {
      setState({...state, loading:true})
      axios.get(`https://api.github.com/users/${name}`)
      .then(res => setState({...state , loading: false, user: res.data })) 
      .catch(err => console.log(err))  
  }

  useEffect(() => {
    const name = props.match.params.login
    getUser(name)
  }, [])

  return (
  <div>
    <Navbar />
    <div className="container m-5">
      <Fragment>
      <Link to='/' className='btn btn-info mr-5'>
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card' style={{padding: '10px'}}>
        <div className='mt-3 mb-3'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h4>Bio</h4>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} target='_blank' className='btn btn-info'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card'>
        <div className='badge badge-primary mb-2'>Followers: {followers}</div>
        <div className='badge badge-success mb-2'>Following: {following}</div>
        <div className='badge badge-light mb-2'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark mb-2'>Public Gists: {public_gists}</div>
      </div>
    </Fragment>
   </div>              
  </div>
  )
}
  
export default User;
