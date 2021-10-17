import React, { Component } from 'react';
import SelectUser from '../components/selectmenu'
import Button from '@mui/material/Button';
class Login extends Component {
    render() {
        return (
            <div>
                <SelectUser />
                <Button variant="outlined">Sign in</Button>
            </div>


        )
    }
}

export default Login