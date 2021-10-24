import React, { Component } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];



class SelectUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authedUser: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({ authedUser: event.target.value })
        this.props.dispatch(setAuthedUser(event.target.value))
    }

    render() {
        const { authedUser } = this.state;
        const { users, dispatch } = this.props;
        const usrsarry = Object.values(users)
        return (
            <div>
                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                    <Select
                        displayEmpty
                        value={authedUser}
                        onChange={this.handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Select user</em>;
                            }

                            return selected;
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>Users</em>
                        </MenuItem>
                        {usrsarry && usrsarry.map((usr) => (
                            <MenuItem
                                key={usr.id}
                                value={usr.id}
                            >
                                {usr.name}
                            </MenuItem>
                        ))}

                    </Select>

                </FormControl>
            </div>
        )
    }

}









export default connect()(SelectUser)