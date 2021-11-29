"use strict";

import { isCorrectColor } from "../src/js/colors.js";

export function handleResult(e) {
  const results = e.results;
  const words = results[results.length -1][0].transcript;
  
  let color = words.toLowerCase();
  color = color.replace(/\s/g, "");

  if (!isCorrectColor(color)) return;

  const color_span = document.getElementsByClassName(color)[0];
  color_span.classList.add("gotcha");

  document.body.style.backgroundColor = color;
}