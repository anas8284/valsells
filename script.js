const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClicked() {
  document.getElementById("card").innerHTML = `
    <div class="emoji">❤️🎉</div>
    <h1>YAYYYY!</h1>
    <p>You just made my heart melt 😍</p>
  `;
}

