import React, {useState} from 'react'

const Search = ({searchUsers, clearUsers, users}) => {

  const [text, setText] = useState('')
  const [error, setError] = useState('')
  console.log(users)

  //onSubmit handler
  const Submit = (e) => {
       e.preventDefault()
       if (text === '') {
          setError('Please Type something')
       } else {
         searchUsers(text) 
         setText('')
       }
    }

  //onChange handler
  const Change = (e) => {
      setText(e.target.value)
      setError('')
  }

  //showError handler
  const showError = () => (
      <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
        {error}
      </div>
   )     

   const showClearButton = () => {
     if (users.length > 0) {
        return <button onClick={clearUsers} className="btn btn-raised btn-warning btn-block">Clear</button>
     } else {
       return null
     }
   } 

  return (
    <div className="container mb-4 mt-4">
      <form onSubmit={Submit}>
        <div className="form-group">
            {
              showError()
            }
          <input onChange={Change} className="form-control" type="text" placeholder="Search for users.." name="text" value={text}>
          </input>
        </div>
          <button value="search" className="btn btn-raised btn-info btn-block" type="submit">
              Search
          </button>
          {
            showClearButton()
          }
      </form>

    </div>
  )
}

export default Search
