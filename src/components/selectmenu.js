import * as React from 'react';
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



function SelectUser({ users, dispatch }) {
    console.log("users are from login select user", users);
    const theme = useTheme();
    const [authedUser, setAutheduser] = React.useState("");

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log("event.target.value", event.target.value);
        setAutheduser(
            // On autofill we get a the stringified value.
            { authedUser }
        );
        dispatch(setAuthedUser(authedUser))
        console.log(authedUser);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                    displayEmpty
                    value={authedUser}
                    onChange={handleChange}
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
                    {users.map((usr) => (
                        <MenuItem
                            key={usr}
                            value={usr}
                        >
                            {usr}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
function mapStateToProps({ users }) {
    return {
        users: Object.keys(users)
    }
}
export default connect(mapStateToProps)(SelectUser)