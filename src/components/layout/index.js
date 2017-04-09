import React, { Component } from 'react';
import Item from '../item';
import style from './style.css';

export default class Layout extends Component{

    constructor (props) {
       super()
       this.state = {}
   }

    render (){
         let { props } = this
         //Dirty test...
         let item = {
             author: '@butter',
             name: 'theme-ghost',
             version: '0.0.1',
             description: 'Chunk, chunk, chunk!'
         }

         let items = [item,item,item,item,item,item]

         return (
             <div>
                <ul className={style.items}>
                    {items.map((a, b)=>(
                        <Item key={b} data={a}/>
                    ))}
                 </ul>
             </div>
         )

    }
}
