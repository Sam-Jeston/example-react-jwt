import * as React from 'react'
import { Link } from 'react-router'

export class NoMatch extends React.Component<void, {}> {
  render () {
    return (
      <div>
        <h1>Sorry 404</h1>
        <Link to={'/'}>Return home</Link>
      </div>
    )
  }
}
