import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to={`/beers`}>All beers</Link>
      <Link to={`/random-beer`}>Random beer</Link>
      <Link to={`/new-beer`}>New beer</Link>
    </div>
  );
}

export default Home;
