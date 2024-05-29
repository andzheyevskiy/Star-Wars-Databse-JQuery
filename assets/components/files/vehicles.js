// Depends on appendArray from $home/assets/moudles/appendArray.js

const runFile = (id) => {
    $.source = `${$.swapi}vehicles/`
    $.finalUrl = $.source + id
    $.ajax({
        url: $.finalUrl,
        success: function (e) {
            $.img = `${$.baseURL}assets/img/vehicles/${e.name.replace(" ", "%20").replace("/", "")}.jpg`
            // Add all elements in HTML
            $("#field").html(`
            <div class="file">
            <h2>name</h2>
            <p>${e.name}</p>
            <img src="${$.img}">
            <h2>model</h2>
            <p>${e.model}</p>
            <h2>vehicle class</h2>
            <p>${e.vehicle_class}</p>
            <h2>manufacturer</h2>
            <p>${e.manufacturer}</p>
            <h2>lenght</h2>
            <p>${e.lenght}</p>
            <h2>cost in credits</h2>
            <p>${e.cost_in_credits}</p>
            <h2>crew</h2>
            <p>${e.crew}</p>
            <h2>passengers</h2>
            <p>${e.passengers}</p>
            <h2>max atmospheric speed</h2>
            <p>${e.max_atmospheric_speed}</p>
            <h2>cargo capacity</h2>
            <p>${e.cargo_capacity}</p>
            <h2>name</h2>
            <p id="films"></p>${appendArray("films",e.films)}
            </div>
            `)
        },
        error: function () {
            runError()
        }
    });
}