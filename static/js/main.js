/* CLEAN THIS MESS */

$(function(){

    var items = [],
        username = "butterthemes",
        api = "https://api.github.com/",
        raw = "https://raw.githubusercontent.com/";

    function getPackageJson(user, repo, url, fn){
        $.getJSON(raw + user + "/" + repo + "/master/package.json", function(json, status) {
            if(status==="success"){
                fn(json, url)
            }
        });
    }

    function Item(i, url){

            var element = '<li class="item">' +
                '<div class="header"><h3 class="title">'+ i.name +'</h3> <span class="version">'+i.version+'</span></div>' +
                '<div class="description">'+i.description+ '</div>'+
                '<div class="footer"><a class="button" href="'+url+'">Install</a></div>' +
                '</li>';

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
