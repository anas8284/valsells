// // Get name from URL path
// // Example: /valsells/anas
// const path = window.location.pathname.split("/");

// // path = ["", "valsells", "anas"]
// let name = path[path.length - 1];

// // If user opens just /valsells/
// if (!name || name === "valsells") {
//   name = "YOU";
// }

// // Capitalize first letter
// name = name.charAt(0).toUpperCase() + name.slice(1);

// // Set text
// document.getElementById("question").innerText =
//   `${name}, will you be my Valentine?`;

// // No button movement
// const noBtn = document.getElementById("noBtn");
// noBtn.addEventListener("mouseover", () => {
//   const x = Math.random() * 200 - 100;
//   const y = Math.random() * 80 - 40;
//   noBtn.style.transform = `translate(${x}px, ${y}px)`;
// });

// // Yes click
// function yesClick() {
//   document.querySelector(".card").innerHTML = `
//     <h1>❤️ Yayyy ${name}! ❤️</h1>
//     <p>You just made my day 😍</p>
//   `;
// }

// Ask user for name
let name = prompt("Enter your name ❤️");

// Handle empty or cancel
if (!name || name.trim() === "") {
  name = "Nirali";
}

// Set question
document.getElementById("question").innerText =
  `${name}, will you be my Valentine?`;

// No button runs away
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes button
function yesClicked() {
  document.getElementById("card").innerHTML = `
    <div class="emoji">❤️🎉</div>
    <h1>YAYYYY ${name}!</h1>
    <p>You just made my heart melt 😍</p>
  `;
}
