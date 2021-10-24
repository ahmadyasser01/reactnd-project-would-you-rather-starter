import React, { Component } from "react";
import Header from "../components/nav";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Question from "../components/Question";
import { Container } from "@mui/material";
import sortBy from "sort-by";

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
                <Container>
                    <Box sx={{ p: 3 }}>
                        <Typography component={'div'}>{children}</Typography>
                    </Box>
                </Container>

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

class Home extends Component {
    state = {
        value: 0
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    //    formatQuestion()
    render() {
        const { value } = this.state
        const { users, questions, authedUser } = this.props
        const formattedQuestions = questions.sort(sortBy("-timestamp")).map(question => {
            return {
                ...question,
                avatarURL: users[question.author].avatarURL
            }
        })
        const answeredQuestions = formattedQuestions.filter((q) =>
        (q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser)

        )

        )
        const unAnsweredQuestions = formattedQuestions.filter(q => {
            return (
                !q.optionOne.votes.includes(authedUser) && !q.optionTwo.votes.includes(authedUser)
            )
        })



        return (
            <div>
                <Header></Header>


                <Container className="content">

                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={this.handleChange} aria-label="basic tabs example">
                                <Tab label="Unanswered questions" {...a11yProps(0)} />
                                <Tab label="Answered questions" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} >
                            {unAnsweredQuestions && unAnsweredQuestions.map(question => (
                                <Question question={question} key={question.id} />
                            ))}

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {answeredQuestions && answeredQuestions.map(question => {
                                return (
                                    <Question question={question} key={question.id} />
                                )
                            })
                            }
                        </TabPanel>

                    </Box>


                </Container >
            </div>


        )
    }
}
const mapStateToProps = ({ users, questions, authedUser }) => {
    return {
        users, questions: Object.values(questions), authedUser
    }
}
export default connect(mapStateToProps)(Home)