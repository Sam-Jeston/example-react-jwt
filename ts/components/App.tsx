import * as React from 'react'
import { Link } from 'react-router'

export class App extends React.Component<void, {}> {
  render () {
    return (
      <div>
        <h1>Hello from the hompage!</h1>
        <Link to={'/hello'}>Lets go to hello</Link>
      </div>
    )
  }
}
