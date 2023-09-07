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

//applyCSS();

var menubar = document.querySelector(".menubar.root-level");
var appearanceMenu = document.createElement("li");
appearanceMenu.className = "menu-parent nmu-menu-parent";
appearanceMenu.innerHTML = "MakeUp";

var appearanceMenuContent = document.createElement("div");
appearanceMenuContent.className = "nmu-menu";
appearanceMenu.appendChild(appearanceMenuContent);

appearanceMenuContent.innerHTML = "<p class='info'>E menü elemei jelenleg nem működnek.</p><div class='nmu-menu-item switch'>Sötét mód<input type='checkbox' id='darkmode-toggle'></div><div class='nmu-menu-item'>Kijelölőszín</div>";

menubar.appendChild(appearanceMenu);

function applyCSS() {
    const style = document.createElement("style");

    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://raw.githubusercontent.com/0pau/nmu/main/nmu.css");
    xhr.addEventListener("load", ()=>{
        style.innerHTML = xhr.responseText;
    });
    xhr.send();
    document.body.append(style);
}