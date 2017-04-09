import React, { Component } from 'react';
import Item from '../item';

export default class Layout extends Component{

    constructor (props) {
       super()
       this.state = {}
   }

    render (){
         let { props } = this
         return (
             <div>
                 <Item data={{
                     author: '@butter',
                     name: 'Package',
                     version: '0.0.1',
                     description: 'Chunk, chunk, chunk!'
                 }} />
             </div>
         )

    }
}
