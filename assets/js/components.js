// Get info from URL
$.fullURL = $(location).attr("href");
$.urlInfo = $.fullURL.split("?")[1] ? $.fullURL.split("?")[1] : "mainpage";
// Usable information
$.tab = $.urlInfo.split("=")[0];
$.file = $.urlInfo.split("=")[1];
$.id = $.urlInfo.split("=")[2];

///////////  FUNCTIONS   ///////////////

// Recieves targeted component from ajax.
//Use only on document onload

/* const appendScripts = (data) => {
    data.components.forEach(e => {
        $("body").prepend(
            `<script src="${e}"></script>`
        );
    })
} */

const appendScripts = (data) =>{
    data.components.forEach(e=>{
        $.getScript(e, ()=>{
            typeof runSearch!="undefined"?runSearch($.file,$.id):null
            typeof runFile!="undefined"?runFile($.id):null
        });
    })
}

// Recieves targeted component from ajax
const appendStyles = (data) => {
    data.styles.forEach(e => {
        $("head").prepend(
            `<link rel="stylesheet" href="${e}">`
        );
    })
}


//////// EXECUTING THE SCRIPTS //////

// target is going to be the "target" element from config.json
// depending on URL target is going to be different


let target;
if($.tab == "files"){
    target = $.file
}else if ($.tab == "search") {
    target = $.tab
} else{
    target = "mainpage"
}


// Execute appendScripts/appendStyles
// Using ajax to get config.json
$.ajax({
    url: "./assets/components/config.json",
    success: function (response) {

        appendStyles(response[target])
        $(document).ready(() => {
            appendScripts(response[target])
        });
    }
});

// Run corresponding Script depending on the loaded File or search.