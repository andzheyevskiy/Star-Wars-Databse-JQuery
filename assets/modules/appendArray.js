// This is a module to easily append items to (target) html dom id from an (array)
// returns nothing

const appendArray = (target, array) => {
    // Case array is more than 1 item
    if (Array.isArray(array)) {
        if (target != "films") {
            array.forEach(element => {
                $.ajax({
                    url: element,
                    success: function (response) {
                        //Get id from url
                        $.id = response.url.split(target)[1].replaceAll("/", "")
                        $(`#${target}`).append(`
                    <p><a href="?files=${target}=${$.id}">${response.name}</a></p>
                    `)
                    },
                    fail: function () {
                        $(`#${target}`).html(`not available`)
                    }
                });
            })
        } else {
            array.forEach(element => {
                $.ajax({
                    url: element,
                    success: function (response) {
                        //Get id from url
                        $.id = response.url.split(target)[1].replaceAll("/", "")
                        $(`#${target}`).append(`
                    <p><a href="?files=${target}=${$.id}">${response.title}</a></p>
                    `)
                    },
                    fail: function () {
                        $(`#${target}`).html(`not available`)
                    }
                });
            })
        }
    }
    // Case array is 1 items
    else {
        if (target != "films") {
            $.ajax({
                url: array,
                success: function (response) {
                    //Get id from url
                    $.id = response.url.split(target)[1].replaceAll("/", "")
                    $(`#${target}`).append(`
                <p><a href="?files=${target}=${$.id}">${response.name}</a></p>
                `)
                }
            });
        } else {
            $.ajax({
                url: array,
                success: function (response) {
                    //Get id from url
                    $.id = response.url.split(target)[1].replaceAll("/", "")
                    $(`#${target}`).append(`
                <p><a href="?files=${target}=${$.id}">${response.title}</a></p>
                `)
                }
            });





        }
    }
    return ""
}