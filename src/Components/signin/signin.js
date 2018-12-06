import React, { useState, useRef } from 'react'

import './signin.css'

const SignIn = ({users, handleRoute, handleAuth,  handleError, error}) => {
    
    const [checkUser, setCheckUser] = useState({username: '', password: ''})

    const inputRef = useRef(null)

    const handleSubmit = () => {
        if(checkUser.username.length && checkUser.password.length) {
        const filter = users.filter((user, index) => {
            return users[index].username === checkUser.username
        })
        if(filter.length) {
            handleAuth(true)
        } else {
            setCheckUser({username: '', password: ''})
            handleError(true, `User doesn't exist`)
            inputRef.current.focus()
        }
      } else {
        handleError(true, 'please enter valid username and password')
        inputRef.current.focus()
      }
    }

    const handleIntro = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }
    return (
        <React.Fragment>
            <div className='back' onClick={() => handleRoute('home')}>Back</div>
            <div className='signin'>
                <div className='box'>
                <h1>Sign In</h1>
                    <p>User:</p> 
                    <input 
                        ref={inputRef} 
                        type='text' 
                        placeholder='User' 
                        value={checkUser.username}
                        onChange={(e) => setCheckUser({...checkUser, username: e.target.value})} 
                        onKeyDown={(e) => {handleIntro(e)}}
                    />
                    <br />
                    <p>Password:</p> 
                    <input 
                        type='password' 
                        placeholder='Password' 
                        value={checkUser.password}
                        onChange={(e) => setCheckUser({...checkUser, password: e.target.value})}
                        onKeyDown={(e) => {handleIntro(e)}}
                    />
                    <br />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                    {error.stat ? <p style={{color: 'red'}}>{checkUser.error.message}</p> : null}
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignIn