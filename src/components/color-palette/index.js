import React, { Component } from 'react';
import style from './style.css';

export default (props) => (
        <ul className={style.palette}>
            {
                props.colors.map((a, b) => (
                    <li key={b} className={style.color} style={{backgroundColor: a}}></li>
                ))
            }
        </ul>
)
