import React from 'react'
import { Link } from 'react-router-dom';

  const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
       <div className="card" style={{width: '12rem', margin: '10px'}}>
          <img className="card-img-top" style={{borderRadius: '50%', padding: '5px'}} src={avatar_url} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <Link to={`/user/${login}`} className="btn btn-raised btn-info">More Info</Link>
          </div>  
        </div>
    );
  };
  

export default UserItem
