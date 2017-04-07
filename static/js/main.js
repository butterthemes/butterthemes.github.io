/* CLEAN THIS MESS */

$(function(){

    var items = [],
        username = "butterthemes",
        api = "https://api.github.com/",
        raw = "https://rawgit.com/"
        raw2 = "https://raw.githack.com/";

        //Load css file....
        function LoadCss(url){
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        }

        function getColors(theme, element){
            element.classList.add(theme);
            LoadCss(raw + username + "/" + theme + "/master/index.css");
        }

        function getPackageJson(user, repo, url, fn){
            $.getJSON(raw + username + "/" + repo + "/master/package.json", function(json, status) {
                if(status==="success") fn(json, url)
            });
        }

        function CreateElement(opts){
            var element = document.createElement(opts.type || 'div');
                element.className = opts.class || '';
                element.innerHTML = opts.content || '';
                if(element.href) element.href = opts.href || '';
                return element;
        }

        function Item(i, url) {

        var element = CreateElement({
            type: 'li',
            class: 'item'
        });

        var color = '<li class="color"></li>';

        var palette = CreateElement({
            type: 'ul',
            class: 'palette',
            content: color + color + color + color
        });

        element.appendChild(palette);

        var header = CreateElement({
            type: 'div',
            class: 'header',
            content: '<h3 class="title">'+ i.name +'</h3> <span class="version">'+i.version+'</span>',
        });

        element.appendChild(header);

        var description = CreateElement({
            type: 'div',
            class: 'description',
            content:  i.description
        });

        element.appendChild(description);

        var user = '<a class="user" href="https://github.com/'+ username +'">@'+ username +'</a>',
            install = '<a class="button" href="'+ url +'">Install</a>';


        var footer = CreateElement({
            type: 'div',
            class: 'footer',
            content: user + install
        });

        element.appendChild(footer);

        getColors(i.name, palette);

        $("#root .items").append(element);
    }

    //Load data
    $.get(api + "orgs/" + username + "/repos", function(data, status){
        if(status==="success"){
            data.forEach( function (item, index) {
                //Check for themes...
                if (item.name.substring(0, 13) == "butter-theme-") {
                    //Get package json + data
                    getPackageJson(item.owner.login, item.name, item.html_url, Item);
                }
            });
        }
    });
});
