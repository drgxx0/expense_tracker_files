import React, { useState } from 'react';
import Loading from 'Components/UI/loading/loading'
import Home from 'Components/Home/home'
import SignIn from 'Components/signin/signin'
import Dashboard from 'Components/dashboard/dashboard'


const App = () =>  {
    const [route, setRoute] = useState();
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const changeRoute = (route) => {
        setRoute(route)
    }

    const delay = (time = 1500) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(true);
          }, time);
        });
      };

    const onAuthorization = async (data) => {
            setLoading(true)
            await delay(2000)
            setLoading(false)
            await setUser(data)
            await setAuth(true)
    }



    return (
    <React.Fragment>
        {loading ? <Loading /> : 
        auth ? <Dashboard 
        user={user} /> : 
        route === 'signin' ? <SignIn changeRoute={changeRoute} onAuthorization={onAuthorization} /> : 
        <Home changeRoute={changeRoute} />}
    </React.Fragment>
    );
}

export default App