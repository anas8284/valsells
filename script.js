const noBtn = document.getElementById("noBtn");

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
