/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  //declare arrays to store values we need to access by the for loop to create the string for domain
  //we will need to concantenate three words from three arrays below

  document.querySelector("#domain").innerHTML = generateExcuse();
  console.log(generateExcuse);
};

let generateExcuse = () => {
  let pronoun = ["the", "our"];
  let adj = ["happy", "little"];
  let noun = ["lemon", "cafe"];

  let whoPronoun = Math.floor(Math.random() * pronoun.length);
  let whoAdj = Math.floor(Math.random() * adj.length);
  let whoNoun = Math.floor(Math.random() * noun.length);

  return pronoun[whoPronoun] + adj[whoAdj] + noun[whoNoun] + ".com";
};

const refreshButton = document.querySelector(".refreshButton");
const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);

//create a for loop, the nest another for loop inside of it. nested loop because we have to access more than one array
/*let domain = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let n = 0; n < adj.length; n++) {
      for (let m = 0; m < noun.length; m++) {
        //declare variable for the concantenated domain string
        //push method fills new array with generated domain
        domain.push(pronoun[i] + adj[n] + noun[m] + ".com");
        //console.log(`${pronoun[i]}${adj[n]}${noun[m]}.com`);
        console.log(domain);
        //changes the content on the HTML
      }
    }
  }
  let element = (document.getElementById("domain").innerHTML = domain);
  for (let i = 0; i < domain.length; i++) {
    element.innerHTML += "<li>" + domain[i] + "</li>";
  }
  document.write("\n");*/
