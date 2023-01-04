import React from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=9b4cedd973b9475a993951d8de9c9fc6&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const LogIn = () => (
  <div>
    <a href={AUTH_URL}>Log In with spotify</a>
  </div>
  );

export default LogIn;
