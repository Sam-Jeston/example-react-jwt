import * as React from 'react'
import { Link } from 'react-router'

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
  render () {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <Link to={'/about'}>Lets go to about</Link>
      </div>
    )
  }
}
