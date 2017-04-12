import React, { Component } from 'react';
import Colorpalette from '../color-palette';
import style from './style.css';

export default (props) => (
        <div className={style.item}>
            <Colorpalette colors={["#AAA",  "#BBB", "#CCC", "#DDD", "#EEE"]}/>
            <div className={style.content}>
                <h3 className={style.data}>
                    <a className={style.name} href="?">{props.data.name}</a>
                    <span className={style.version}>{props.data.version}</span>
                </h3>
                <p className={style.description}>{props.data.description}</p>
            </div>
            <div className={style.footer}>
                <a className={style.user} href="#">{props.data.author}</a>
                <a className={style.button} href="#">{"install"}</a>
            </div>
        </div>
    )
