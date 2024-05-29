const runErr=()=>{
    $("#field").html(`
    <div class="error"> Error: Page not found </div>
    `);
    $(".error").css({
        "font-size": "26px",
        "font-family": "StarJediOutline",
        "color": "red",
        "text-align": "center",
        "padding-top": "20%"
      })
}