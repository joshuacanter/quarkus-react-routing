import React from 'react';
import { Link } from "react-router-dom";

const Home = ({  }) => {
    return (
        <div>
            <h1> Welcome to the homepage </h1>
            <div>
            <Link to="/particle"> Particles </Link>
            </div>
        </div>

    )
};

export default Home