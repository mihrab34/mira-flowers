// Input button
const search = document.querySelector(".search");
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  input.value = ""
  btn.style.color = '#fff';
  
});

// shop button 

const btnText = document.querySelector('.btn-text');
btnText.addEventListener('click', () => {
  btnText.classList.toggle('active');
})
