var modal = document.getElementById("myModal");
var img01 = document.getElementById("image01");
var img02 = document.getElementById("image02");
var img03 = document.getElementById("image03");
var img04 = document.getElementById("image04");
var img05 = document.getElementById("image05");
var img06 = document.getElementById("image06");
var img07 = document.getElementById("image07");
var img08 = document.getElementById("image08");
var img09 = document.getElementById("image09");
var img10 = document.getElementById("image10");

var modalImg = document.getElementById("modal-image");

img01.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "../src/image01.html";
};
img02.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image02.html";
};
img03.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image03.html";
};
img04.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image04.html";
};
img05.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image05.html";
};
img06.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image06.html";
};
img07.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image07.html";
};
img08.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image08.html";
};
img09.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image09.html";
};
img10.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/image10.html";
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var image = {
  01: "",
  02: "",
  03: "",
  04: "",
  05: "",
  06: "",
  07: "",
  08: "",
  09: "",
  10: ""
};
var modal = document.getElementById("myModal");
var img = document.getElementById("img1");
var modalImg = document.getElementById("modal-image");

Object.keys(image).forEach(function(key) {
  var img = document.getElementById("image" + key);
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../src/image" + key + ".html";
  }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
