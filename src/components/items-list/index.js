import React, { Component } from 'react';
import Item from '../item';
//import style from './style.css';

//Test...
import getThemes from 'butter-themes-search';

export default class Layout extends Component{
    constructor(props) {
    super(props)
    this.state = { data: [] };
}

componentDidMount() {
    const { props, state } = this;
    //Load themes
    search((themes) => state.setState({data: themes}));
}

render() {
    return (
        <ul>
        { state && state.data ? state.data.map( (a, b)=> <Item key={b} data={a}/> : <div>Loadign...</div> )}
        </ul>
    )
}

}
