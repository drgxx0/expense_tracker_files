import React, { useState, useRef } from 'react'

import './signin.css'

const SignIn = (props) => {
    const users = [{username: 'test', password: '1234'}]
    const [checkUser, setCheckUser] = useState({username: '', password: '', error: {status: false, message: ''}})

    const inputRef = useRef(null)

    const handleSubmit = () => {
        if(checkUser.username.length && checkUser.password.length) {
        const filter = users.filter((user, index) => {
            return users[index].username === checkUser.username
        })
        if(filter.length) {
            props.onAuthorization(filter[0])
        } else {
            setCheckUser({username: '', password: '', error: {status: true, message: `user doesn't exist`}})
            inputRef.current.focus()
        }
      } else {
        setCheckUser({...checkUser, error: {status: true, message: 'please enter valid username and password'}})
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
            <div className='back' onClick={() => props.changeRoute('home')}>Back</div>
            <div className='signin'>
                <div className='box'>
                <h1>Sign In</h1>
                    <p>User:</p> 
                    <input ref={inputRef} type='text' placeholder='User' value={checkUser.username}
                    onChange={(e) => setCheckUser({...checkUser, username: e.target.value})} 
                    onKeyDown={(e) => {handleIntro(e)}}/><br />
                    <p>Password:</p> 
                    <input type='password' placeholder='Password' value={checkUser.password}
                    onChange={(e) => setCheckUser({...checkUser, password: e.target.value})}
                    onKeyDown={(e) => {handleIntro(e)}}/>
                    <br />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                    {checkUser.error.status ? <p style={{color: 'red'}}>{checkUser.error.message}</p> : null}
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignIn