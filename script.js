// Get name from URL
const params = new URLSearchParams(window.location.search);


// Set question text
document.getElementById("question").innerText =
  ` will you be my Valentine?`;

// No button movement
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes click
function yesClicked() {
  document.getElementById("card").innerHTML = `
    <div class="emoji">❤️🎉</div>
    <h1>YAYYY !</h1>
    <img src="celebration.gif" alt="Celebration">
    <p>You just made my heart melt 😍</p>
  `;
}
