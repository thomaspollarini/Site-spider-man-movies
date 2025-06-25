function handleMouseEnter() {
  this.classList.add("s-card--hovered");
}

function handleMouseLeave() {
  this.classList.remove("s-card--hovered");
}

function addEventListenersToCards() {
  const cardElements = document.querySelectorAll(".s-card");

  cardElements.forEach((card) => {
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
