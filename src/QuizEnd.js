import React, { Component } from 'react'
import { timingSafeEqual } from 'crypto';

class QuizEnd extends Component {
    handleResetClick() {
        this.props.resetClickHandler()
    }
    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href='#' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        )
    }
}

export default QuizEnd