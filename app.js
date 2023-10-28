const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("back-btn")
const nextBtn = document.getElementById("next-btn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY
  scrollContainer.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft += 900;
})
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft -= 900;

})