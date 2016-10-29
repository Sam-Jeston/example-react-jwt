import * as React from 'react'
import { Mini } from './Mini'
import { Link } from 'react-router'
import { counterIncrement, counter } from '../services/data'

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState {currentCount: number}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props) {
    super(props)
    this.state = {currentCount: 0}
    this.counterToggle = this.counterToggle.bind(this)

    counter.subscribe((x: number) => {
      this.setState({currentCount: x})
    })
  }

  counterToggle () {
    counterIncrement(++this.state.currentCount)
  }

  render () {
    return (
      <div>
        <h1>Hello!</h1>
        <Link to={'/about'}>Lets go to about</Link>
        <br/>
        <br/>
        <button onClick={this.counterToggle}>Lets go up</button>
        <br/>
        <button className="waves-effect waves-light btn">button</button>
        <p>What are we now?</p>
        <p>{this.state.currentCount}</p>
        <Mini />
      </div>
    )
  }
}
