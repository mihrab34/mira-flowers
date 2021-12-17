// Input button
const search = document.querySelector(".search");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const icon = document.querySelector(".fa-search")

// btn.style.color = '#000';

btn.addEventListener("click", () => {
  // setColor();
  search.classList.toggle("active");
  input.focus();
  input.value = ""
});


// shop button 

const btnText = document.querySelector('.btn-text');
btnText.addEventListener('click', () => {
  btnText.classList.toggle('active');
})
