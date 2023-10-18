"use strict";

import makeHome from './home.js';
import makeMenu from './menu.js';
import makeContact from './contact.js';
// import lasagnaImg from './lasagna.jpg';

import './style.css';

const contentArea= document.querySelector("#content");

const contentBody = document.createElement('div');

function renderPage(obj,pageName="Home"){
    
    let titleError = document.createElement('h1');
    titleError.innerText = "No title to display";
    
    let textError = document.createElement('p');
    textError.innerText = "No text to display";


    function addToPage({title, text}){
        contentBody.appendChild(title);
        contentBody.appendChild(text);
    }
    try{ 
        pageName ? pageName: null;
        addToPage(obj);
    }
    catch (err){

        addToPage({'title': titleError, 'text':textError});
    }
    // const mainImage = new Image();
    // mainImage.src = lasagnaImg;
    // contentBody.appendChild(mainImage);
}

// Remove the contents of the content body, but preserve menus
function clear(){
    contentBody.innerHTML="";
}
// Function calls
const homePage = makeHome();

const tabbedSections = (() => {
    const sections =  ['Home', 'Menu', 'Contact'];
    const navbar = document.createElement("div");
    
    // Modify sectionHeaders area
    navbar.classList.add("navbar");
    contentArea.appendChild(navbar);
    
    sections.forEach(section => {
        let currentNavItem = document.createElement('p');
        currentNavItem.setAttribute("data-section", section);
        currentNavItem.innerText = section;
        currentNavItem.classList.add('nav-item');
        navbar.appendChild(currentNavItem);
        currentNavItem.addEventListener("click", (e)=>{
            
            clear();
            const clickedSection = e.target.getAttribute('data-section');
            switch(clickedSection){
                case "Home":
                    renderPage(makeHome());
                    break;
                case "Menu":
                    renderPage(makeMenu());
                    break;
                case "Contact":
                    renderPage(makeContact());
                    break;
            }

        })
    })
    contentArea.appendChild(navbar);
})();


// Build basic page
contentBody.classList.add("content-body");
contentArea.appendChild(contentBody);

renderPage(makeHome());