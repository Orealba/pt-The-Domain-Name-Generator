/* eslint-disable */

import "./style.css";

function domain() {
  var aleatorioPronoun = Math.floor(Math.random() * 3);
  var aleatorioAdj = Math.floor(Math.random() * 3);
  var aleatorioNoun = Math.floor(Math.random() * 3);
  var aleatorioDomainType = Math.floor(Math.random() * 3);
  return (
    pronoun[aleatorioPronoun] +
    adj[aleatorioAdj] +
    noun[aleatorioNoun] +
    domainType[aleatorioDomainType]
  );
}

var pronoun = ["the", "our", "this"];
var adj = ["great", "big", "adorable"];
var noun = ["jogger", "racoon", "panda"];
var domainType = [".com", ".net", ".es"];

const newDomain = document.querySelector("#dominio");
newDomain.innerHTML = domain();
