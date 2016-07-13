import * as React from "react";
import { Link } from 'react-router'

export default class NavLink extends React.Component<any, {}> {
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
}
