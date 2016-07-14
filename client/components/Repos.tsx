import * as React from "react";
import { Link } from 'react-router'

export class Repos extends React.Component<any, {}> {
  render () {
      return (
        <div>
        <h2>Repos</h2>
        <ul>
            <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
            <li><Link to="/repos/facebook/react">React</Link></li>
        </ul>
        {/* will render `Repo.js` when at /repos/:userName/:repoName */}
        {this.props.children}
        </div>
    )
}}