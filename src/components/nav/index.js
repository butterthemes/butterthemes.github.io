import React, { Component } from 'react';
import style from './style.css';

export default (props)=> (
    <nav className={style.nav}>
        <div className={style["app-data"]}>
            <h3 className={style["app-name"]}>{props.app.name}</h3>
            <span className={style["app-version"]}>{props.app.version}</span>
        </div>
        <ul className="menu">
            { props.items.map((a, b) => (
                <li key={b}> <a href={a.url}>{a.name}</a> </li>
            ))}
        </ul>
    </nav>
)
