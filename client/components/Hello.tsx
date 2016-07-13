import * as React from "react";

export interface HelloProps { compiler: string; framework: string; params: any}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from me {this.props.compiler} and {this.props.framework}!and{this.props.params.repoName}</h1>;
    }
}