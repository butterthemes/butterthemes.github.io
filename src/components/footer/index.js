import React, { Component } from 'react';
import Colorpalette from '../color-palette';
import style from './style.css';

export default (props) => (
    <footer className={style.footer}>
        <img src="https://raw.githubusercontent.com/butterproject/artworks/master/Butter/Official/butter-mascot/butter-mascot.png" height="135px"/>
        <span>Made with <i className="material-icons">favorite</i> by <a href="http://github.com/btzr-io" target="_blank">btzr-io</a></span>
    </footer>
    )
