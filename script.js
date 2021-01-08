const elephant = document.querySelector(".elephant");

elephant.addEventListener("mouseover", function () {
  elephant.classList.add("hover");
});

elephant.addEventListener("mouseout", function () {
  elephant.classList.remove("hover");
});
