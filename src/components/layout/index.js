import React, { Component } from 'react';
import Nav from '../nav';
import Footer from '../footer';
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

         let app = {
             name: 'Butter-themes',
             version: '0.0.1'
         }

         let links = [
             {name: 'Themes', url:'#'},
             {name: 'About', url:'#'},
         ]

         return (
             <div>
               <Nav app={app} items={links}/>
               <h2>Butter flavors!</h2>
                <ul className={style.items}>
                    {items.map((a, b)=>(
                        <Item key={b} data={a}/>
                    ))}
                 </ul>
                 <Footer />
             </div>
         )

    }
}
