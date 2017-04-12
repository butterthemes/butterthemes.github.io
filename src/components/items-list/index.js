import React, { Component } from 'react';
import Item from '../item';
import getThemes from 'butter-themes-search';

export default class Layout extends Component{

constructor(props) {
    super(props)
    this.state = { data: [] };
}

componentDidMount() {
    const self = this;
    const { props, state } = self;
    //Load themes
    getThemes(themes => {
        self.setState({data:themes})
    });
}

render() {
    const { props, state } = this;
    return (
        <ul>
            {(state.data.length > 1) ? state.data.map((a, b) => (<Item key={b} data={a}/>)) : (<div>Loadign...</div>)}
        </ul>
    )
}

}
