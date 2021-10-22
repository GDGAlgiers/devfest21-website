import React, { Component } from 'react';
import questions from '../../data/questions'
import Accordion from './Accordion';

class Faq extends Component {
    render() {
        return (
            <div>
                {questions.map(qst => {
                    return <Accordion title={qst.title} content={qst.content} />
                })}
            </div>
        );
    }
}

export default Faq;