const runSearch = async (selector, page)=>{
    $.source = "https://swapi.dev/api/"
    $.finalUrl = `${$.source}/${selector}/?page=${page}`
    $.ajax({
        url: $.finalUrl,
        success: function (response) {
            //Results will contain each one of the results
            //next-previous will contains the buttons to change page
            $("#field").html(`
            <div id="resultWrapper"></div>
            <div id="next-previous"></div>
            `)
            //Append search results
            response.results.forEach(e => {
                // Since swapi does not give id propriety from the search, we need to extract it from the "url"
                $.id =  e.url.split(selector)[1].replaceAll("/","")
                // Define name , for films its title, for the rest its name.
                const name = e.name?e.name:e.title
                // link to the image
                $.img = `${$.baseURL}assets/img/${selector}/${name.replace(" ","%20").replace("/","")}.jpg`
                $("#resultWrapper").append(`
                <a href="?files=${selector}=${$.id}" class="searchContent"><img src="${$.img}">${name}</a>
                `)
            });
                 //Create Next Previous buttons
                response.previous?$("#next-previous").append(`<a href="?search=${selector}=${page--}" class="pagenav">Previous Page<a/>`):null;
                response.next?$("#next-previous").append(`<a href="?search=${selector}=${page++}"class="pagenav">Next Page</a>`): null ;
        },
        error: function(){
            runError()
        }
    });


}
