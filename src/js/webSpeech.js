"use strict";

import { handleResult } from "../../util/utils.js";
import { colorsByLength, isDark } from "./colors.js";

const heading_h1 = document.querySelector(".move");
heading_h1.innerHTML = wrapInSpan(heading_h1.textContent);
const colors_div = document.querySelector(".colors");
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function wrapInSpan(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join(" ");
}

function start() {
  if(!("SpeechRecognition" in window)) {
    alert("Oops, this browser does not support speech recognition!");
    return;
  }
  const speechReco = new SpeechRecognition();
  speechReco.continuous = true;
  speechReco.interimResults = true;
  speechReco.onresult = handleResult;
  speechReco.start();
}

function renderColors(colors) {
  return colors
  .map(color => `<span class="color ${color} ${
    isDark(color) ? "dark" : ""
  }" style="background: ${color};">${color}</span>`)
  .join("");
}

start();
colors_div.innerHTML = renderColors(colorsByLength);