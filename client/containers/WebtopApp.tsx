import * as React from "react";

import {Link, IndexLink} from 'react-router';

import NavLink from '../components/shared/NavLink';


export interface WebtopAppProps {}

export class WebtopApp extends React.Component<WebtopAppProps, {}> {
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><NavLink to="/hello">Hello</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}