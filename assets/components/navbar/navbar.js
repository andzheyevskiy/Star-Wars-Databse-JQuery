$("body").prepend(`
<div class="contenedorlogo">
    <a href="?mainpage"><img src="${$.baseURL}/assets/img/logo.png" alt="Star Wars Logo"></a>
</div>
<button id="mobile-menu">≡</button>
<nav id="navbar">
    <a href="?search=films=1" class="buttons">films</a>
    <a href="?search=people=1" class="buttons">people</a>
    <a href="?search=planets=1" class="buttons">planets</a>
    <a href="?search=species=1" class="buttons">species</a>
    <a href="?search=vehicles=1" class="buttons">vehicles</a>
    <a href="?search=starships=1" class="buttons">starships</a>
</nav>
    `)
