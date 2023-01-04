/* eslint-disable react/jsx-no-bind */
import React from 'react';
import MusicPlayer from './components/MusicPlayer';
import LogIn from './LogIn';
import Dashboard from './Dashboard';

  const code = new URLSearchParams(window.location.search).get('code');
const App = () => (
  <div className="container">
    <MusicPlayer />
    {
      code
      ? <Dashboard code={code} /> : <LogIn />
    }

  </div>
  );
export default App;
