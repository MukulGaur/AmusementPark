import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Home = () => {

    const [home, setHome] = useState(true);

    return (
        <>
            {
                home ? <SignIn ch={home}/> : <SignUp ch={home} />
            }
        </>
    );
};

export default Home;
