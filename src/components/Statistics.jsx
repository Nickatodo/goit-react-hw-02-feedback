import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";

export default class Statistics extends Component { 

    constructor(props){ 
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
        this.counter = this.counter.bind(this);
    }

    counter(btn) { 
        switch (btn) {
            case "good":
                this.setState({
                   good: this.state.good + 1,
                });        
            break;
            case "neutral":
                this.setState({
                neutral: this.state.neutral + 1,
                });
            break;
            case "bad":
                this.setState({
                bad: this.state.bad + 1,
                });
            break;
            default:
            break;
        }
    }

    countTotalFeedback() {
        let total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }

    countPositiveFeedbackPercentage() { 
        let percentage = (this.state.good / this.countTotalFeedback()) * 100;
        return Math.round(percentage);
    }

    render() { 
        if (this.countTotalFeedback() !== 0) {
            return (
                <>
                    <FeedbackOptions onButtonClick={this.counter} ></FeedbackOptions>
                    <h3>Statistics</h3>
                    <div>
                        Good: {this.state.good}<br />
                        Neutral: {this.state.neutral}<br />
                        Bad: {this.state.bad}<br />
                        Total: {this.countTotalFeedback()}<br />
                        Positive feedback: {this.countPositiveFeedbackPercentage()}%
                    </div>
                </>
            );
        } else { 
            return (
                <>
                    <FeedbackOptions onButtonClick={this.counter} ></FeedbackOptions>
                    <h4>There is no feedback</h4>
                </>
            );
        }

    }
}

/* 
        return (
            <>
                <FeedbackOptions onButtonClick={this.counter} ></FeedbackOptions>
                <h1>Statistics</h1>
                <div>
                    Good: {this.state.good} 
                    Neutral: {this.state.neutral} 
                    Bad: {this.state.bad} 
                    Total: { this.countTotalFeedback()}
                    Positive feedback: { this.countPositiveFeedbackPercentage()}%
                </div>
            </>
        );
*/