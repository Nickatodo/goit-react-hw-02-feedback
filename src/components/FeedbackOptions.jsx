import { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class FeedbackOptions extends Component {

  render() {
    return (
      <>
        <Button variant="secondary" onClick={() => this.props.onButtonClick("good")}>Good</Button>{ ' ' }
        <Button variant="secondary" onClick={() => this.props.onButtonClick("neutral")}>Neutral</Button>{' '}
        <Button variant="secondary" onClick={() => this.props.onButtonClick("bad")}>Bad</Button>{' '}
      </>
    )
  }
}
