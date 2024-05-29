// Depends on appendArray from $home/assets/moudles/appendArray.js

const runFile = (id) => {
    $.source = `${$.swapi}people/`
    $.finalUrl = $.source + id
    $.ajax({
        url: $.finalUrl,
        success: function (e) {
            $.img = `${$.baseURL}assets/img/people/${e.name.replace(" ", "%20").replace("/", "")}.jpg`
            // Add all elements in HTML
            $("#field").html(`
            <div class="file">
            <h2>name</h2>
            <p>${e.name}</p>
            <img src="${$.img}">
            <h2>birth year</h2>
            <p>${e.birth_year}</p>
            <h2>gender</h2>
            <p>${e.gender}</p>
            <h2>species</h2>
            <p id="species"></p>
            <h2>height</h2>
            <p>${e.height}</p>
            <h2>mass</h2>
            <p>${e.mass}</p>
            <h2>hair color</h2>
            <p>${e.hair_color}</p>
            <h2>skin color</h2>
            <p>${e.skin_color}</p>
            <h2>eye color</h2>
            <p>${e.eye_color}</p>
            <h2>homeworld</h2>
            <p id="planets"></p>${appendArray("planets",e.homeworld)}
            <h2>films</h2>
            <p id="films"></p>${appendArray("films",e.films)}
            <h2>starships</h2>
            <p id="starships"></p>${appendArray("starships",e.starships)}
            <h2>vehicles</h2>
            <p id="vehicles"></p>${appendArray("vehicles",e.vehicles)}
            <div>
            `)
        },
        error: function () {
            runError()
        }
    });
}