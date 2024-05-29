// Depends on appendArray from $home/assets/moudles/appendArray.js

const runFile = (id) => {
    $.source = `${$.swapi}species/`
    $.finalUrl = $.source + id
    $.ajax({
        url: $.finalUrl,
        success: function (e) {
            $.img = `${$.baseURL}assets/img/species/${e.name.replace(" ", "%20").replace("/", "")}.jpg`
            // Add all elements in HTML
            $("#field").html(`
            <div class="file">
            <h2>name</h2>
            <p>${e.name}</p>
            <img src="${$.img}">
            <h2>classification</h2>
            <p>${e.classification}</p>
            <h2>designation</h2>
            <p>${e.designation}</p>
            <h2>average height</h2>
            <p>${e.average_height}</p>
            <h2>average lifespan</h2>
            <p>${e.average_lifespan}</p>
            <h2>eye colors</h2>
            <p>${e.eye_colors}</p>
            <h2>hair colors</h2>
            <p>${e.hair_colors}</p>
            <h2>skin colors</h2>
            <p>${e.skin_colors}</p>
            <h2>language</h2>
            <p>${e.language}</p>
            <h2>homeworld</h2>
            <p id="planets"></p>${appendArray("planets",e.homeworld)}
            <h2>people</h2>
            <p id="people"></p>${appendArray("people",e.people)}
            <h2>films</h2>
            <p id="films"></p>${appendArray("films",e.films)}
            </div>
            `)
        },
        error: function () {
            runError()
        }
    });
}