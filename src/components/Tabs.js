import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Question from "../components/Question"
import AnsweredQuestion from './answeredQuestion';
import QuestionDetails from './QuestionDetails'
import { connect } from 'react-redux';
import sortBy from 'sort-by';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
// const formatQuestions = (questionsIds) =>
//     questionsIds
//         .map((questionId) => ({
//             author: this.props.questions[questionId].author,
//             id: questionId,
//             optionOne: this.props.questions[questionId].optionOne,
//             optionTwo: this.props.questions[questionId].optionTwo,
//             timestamp: this.props.questions[questionId].timestamp,
//             avatarURL: this.props.users[this.props.questions[questionId].author]
//                 .avatarURL,
//         }))
//         .sort(sortBy('-timestamp'))
function BasicTabs({ unAnsweredQuestions, answeredQuestions }) {
    console.log(unAnsweredQuestions, answeredQuestions);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="unswered Questions" {...a11yProps(0)} />
                    <Tab label="Answered Questions" {...a11yProps(1)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {unAnsweredQuestions && unAnsweredQuestions.map(q => (

                    <Question question={q} />
                ))}

            </TabPanel>
            <TabPanel value={value} index={1}>
                {answeredQuestions && answeredQuestions.map(q => (

                    <Question question={q} />
                ))}

            </TabPanel>
        </Box>
    );
}
function mapStateToProps({ questions }) {
    return {
        questions: Object.values(questions)
    }

}
export default connect(mapStateToProps)(BasicTabs)