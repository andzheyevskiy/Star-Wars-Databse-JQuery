$.baseURL = "https://andzheyevskiy.github.io/SWDB/";
// 2 swapi database in case one of them fails.
// $.swapi="https://swapi.dev/api/";
$.swapi="https://swapi.py4e.com/api/";
const runError = ()=>{
    $.getScript("./assets/components/error/error.js", ()=>runErr() );
}