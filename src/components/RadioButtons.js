import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { handleAnswerQuestion } from '../actions/Questions';

export default function ErrorRadios({ question, authedUser, dispatch }) {
    console.log(question, "from radio");
    const [value, setValue] = React.useState('');
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) { alert("select an answer") }
        dispatch(handleAnswerQuestion({ authedUser, qid: question.id, answer: value }))


    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl
                sx={{ m: 3 }}
                component="fieldset"

                variant="standard"
            >
                <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                    <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined"
                    onClick={handleSubmit}>
                    Submit Answer
                </Button>
            </FormControl>
        </form>
    );
}