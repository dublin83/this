import * as React from 'react';
import { Button } from 'react-md';

interface LocalState {
  truth: boolean | null;
}

interface HockeyProps {
  name: string;
}

class Hockey extends React.Component<HockeyProps, LocalState> {
  constructor(props: HockeyProps) {
    super(props);
    this.state = {
      truth: null
    };
  }
 
  isTellingTheTruth = () => {
    this.setState({ truth: true });
  }
  isTellingTheLie = () => {
    this.setState({ truth: false });
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {this.state.truth === null && (
          <div>
            <h1>Are the Preds your favorite team?</h1>

            <Button raised={true} onClick={this.isTellingTheTruth}>
              Of Course
            </Button>
            <Button raised={true} onClick={this.isTellingTheLie}>Not At All</Button>
          </div>
        )}
        {this.state.truth === true && (
          <h1>Of course. You are so predictable Mellor</h1>
        )}
        {this.state.truth === false && (
          <h1>That is a lie from the pit of hell!</h1>
        )}
      </div>
    );
  }
}

export default Hockey;
