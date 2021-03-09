import React, { useState, Component, PureComponent } from 'react';
import RocketCore from './RocketCore';


export class FunctionalRocket extends PureComponent {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    }
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={this.initialLaunchTime} />
  }
}


export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}


