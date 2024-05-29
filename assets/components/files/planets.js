// Depends on appendArray from $home/assets/moudles/appendArray.js

const runFile = (id) => {
    $.source = `${$.swapi}planets/`
    $.finalUrl = $.source + id
    $.ajax({
        url: $.finalUrl,
        success: function (e) {
            $.img = `${$.baseURL}assets/img/planets/${e.name.replace(" ", "%20").replace("/", "")}.jpg`
            // Add all elements in HTML
            $("#field").html(`
            <div class="file">
            <h2>name</h2>
            <p>${e.name}</p>
            <img src="${$.img}">
            <h2>diameter</h2>
            <p>${e.diameter}</p>
            <h2>rotation period</h2>
            <p>${e.rotation_period}</p>
            <h2>gravity</h2>
            <p>${e.gravity}</p>
            <h2>population</h2>
            <p>${e.population}</p>
            <h2>climate</h2>
            <p>${e.climate}</p>
            <h2>terrain</h2>
            <p>${e.terrain}</p>
            <h2>surface water</h2>
            <p>${e.surface_water}</p>
            <h2>residents</h2>
            <p id="people"></p>${appendArray("people",e.residents)}
            <h2>films</h2>
            <p id="films"></p>${appendArray("films",e.films)}
            <div>
            `)
        },
        error: function () {
            runError()
        }
    });
}