// Depends on appendArray from $home/assets/moudles/appendArray.js

const runFile = (id) => {
    $.source = `${$.swapi}films/`
    $.finalUrl = $.source + id
    $.ajax({
        url: $.finalUrl,
        success: function (e) {
            $.img = `${$.baseURL}assets/img/films/${e.title.replace(" ", "%20").replace("/", "")}.jpg`
            // Add all elements in HTML
            $("#field").html(`
            <div class="file">
                <h2>movie name</h2>
                <p>${e.title}</p>
                <img src="${$.img}">
                <h2>movie director</h2>
                <p>${e.director}</p>
                <h2>characters</h2>
                <p id="people"><p>${appendArray("people",e.characters)}
                <h2>planets</h2>
                <p id="planets"><p>${appendArray("planets",e.planets)}
                <h2>starships</h2>
                <p id="starships"><p>${appendArray("starships",e.starships)}
                <h2>species</h2>
                <p id="species"><p>${appendArray("species",e.species)}
                <h2>opening paragraph</h2>
                <p class="paragraph">${e.opening_crawl.replace(/[\n\r]/g, "<br>")}</p>
            </div>
            `)
        },
        error: function () {
            runError()
        }
    });
}