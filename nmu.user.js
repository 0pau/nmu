// ==UserScript==
// @name         Neptun MakeUp
// @namespace    https://github.com/0pau/nmu/
// @version      0.2a
// @description  Egy kis smink nem árthat a Neptunnak se...
// @author       0pau
// @include      https://*neptun*/hallgato*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @downloadURL  https://github.com/0pau/nmu/releases/latest/download/nmu.user.js
// @grant        none
// ==/UserScript==

const style = document.createElement("style");

var xhr = new XMLHttpRequest;
xhr.open("GET", "https://raw.githubusercontent.com/0pau/nmu/main/nmu.css");
xhr.addEventListener("load", ()=>{
    style.innerHTML = xhr.responseText;
});
xhr.send();
document.body.append(style);