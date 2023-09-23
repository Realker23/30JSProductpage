const prdImg = document.getElementById("prdImg");
const btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", function () {
  prdImg.src = "image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[1].addEventListener("click", function () {
  prdImg.src = "image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
btn[2].addEventListener("click", function () {
  prdImg.src = "image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
});
