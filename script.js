const noBtn = document.getElementById("noBtn");
const nameText = document.getElementById("nameText");

// Read name from query param
const params = new URLSearchParams(window.location.search);
let name = params.get("name") || "nirali";

// Capitalize
name = name.charAt(0).toUpperCase() + name.slice(1);

nameText.innerText = `${name}, will you be my valentine?`;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClick() {
  document.querySelector(".card").innerHTML = `
    <h1>❤️ Yayyy! ❤️</h1>
    <p>You just made my day 😍</p>
  `;
}
