// Get name from URL path
// Example: /valsells/anas
const path = window.location.pathname.split("/");

// path = ["", "valsells", "anas"]
let name = path[path.length - 1];

// If user opens just /valsells/
if (!name || name === "valsells") {
  name = "YOU";
}

// Capitalize first letter
name = name.charAt(0).toUpperCase() + name.slice(1);

// Set text
document.getElementById("question").innerText =
  `${name}, will you be my Valentine?`;

// No button movement
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes click
function yesClick() {
  document.querySelector(".card").innerHTML = `
    <h1>❤️ Yayyy ${name}! ❤️</h1>
    <p>You just made my day 😍</p>
  `;
}

