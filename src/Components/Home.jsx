import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Home = () => {

    const [home, setHome] = useState(true);

    return (
        <>
            {
                home ? <SignIn onClick={(v)=> setHome(v)} /> : <SignUp onClick={(v)=> setHome(v)} />
            }
        </>
    );
};

export default Home;
