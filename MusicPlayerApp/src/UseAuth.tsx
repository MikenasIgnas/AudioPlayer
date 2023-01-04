import React from 'react';
import axios from 'axios';

export default function UseAuth(code) {
    const [accessToken, setAccessToken] = React.useState();
    const [refreshToken, setRefreshToken] = React.useState();
    const [expiresIn, setExpiresIn] = React.useState();

    React.useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then((res) => {
            console.log(res.data);
        }).catch(() => {
            window.location = '/';
        });
    }, [code]);
}
