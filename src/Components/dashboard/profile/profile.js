import React from 'react'

import './profile.css'

const Profile = ({users, handleAuth}) => {
    return (
        <div className='itemPro'>
            <div className='user'><p>Test</p></div>
            <div className='profileBtn'>View profile</div>
            <div className='logoutBtn' onClick={() => handleAuth(false)}>Log out</div>
        </div>
    )
}

export default Profile