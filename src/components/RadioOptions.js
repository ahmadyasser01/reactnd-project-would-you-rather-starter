import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({ options }) {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label={options[0].text} />
                <FormControlLabel value="male" control={<Radio />} label={options[1].text} />

            </RadioGroup>
        </FormControl>
    );
}