import React, { Component } from 'react';
import Item from '../item';
//import style from './style.css';

//Test...
import  request from 'superagent';


const getJson = (url, q, callback) => {
    request
    .get(url)
    .query(q)
    .set('Accept', 'application/json')
    .end(function(err, res){
         if(!err) {
             callback(res.body)
         } else {
             console.error(err)
         }

    })
}

const rawJson = (user, repo, branch, file, callback) => getJson('https://rawgit.com/'+user+'/'+repo+'/'+(branch||'master')+'/'+file, null, callback);

const parseTheme = (pack, git) => ({
    name: pack.name,
    version: pack.version,
    description: pack.description || git.description,
    author: git.owner.login,
    url: {
        github: git.html_url,
        css: "http://rawgit.com/" + git.owner.login + "/" + git.name + "/" + git.default_branch + (pack.main || "index.css")
    }
})

const getThemes = callback => getJson('https://api.github.com/search/repositories', {q:'butter+theme+language:css+fork:false'}, (res) => {

    const items = [],
          themes = [];

    res.items.map(item => {
        if(item.name.startsWith('butter-theme-')) items.push(item);
    });

    items.map((item, index) => {
        rawJson(item.owner.login, item.name, item.default_branch, 'package.json', (pack) => {
            const theme = parseTheme(pack, item);
            themes.push(theme);
            if(items.length === (index + 1)) callback(themes);
        })
    });
});

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
        console.log(themes.length);
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
