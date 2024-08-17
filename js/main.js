import { Games } from "./games.module.js";
new Games();
$(document).ready(function () {
  $(".loading-screen").fadeOut(1500);
  $("body").css("overflow", "auto");
});