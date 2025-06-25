function handleMouseEnter() {
    this.classList.add("s-card--hovered");
}

function addEventListenersToCards() {
  const cardElements = document.querySelectorAll(".s-card");

  cardElements.forEach((card) =>
    card.addEventListener("mouseenter", handleMouseEnter)
  );
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
