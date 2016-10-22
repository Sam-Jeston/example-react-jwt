import * as React from 'react'
import { counter } from '../services/data'

export interface MiniState {currentCount: number}

export class Mini extends React.Component<void, MiniState> {
  constructor(props) {
    super(props)
    this.state = {currentCount: 0}

    counter.subscribe((x: number) => {
      this.setState({currentCount: x})
    })
  }

  render () {
    return (
      <div>
        <h1>We are now a sub-component, listening to the same observable!</h1>
        <br/>
        <p>And our value is</p>
        <p>{this.state.currentCount}</p>
      </div>
    )
  }
}
