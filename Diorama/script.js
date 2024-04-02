const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.setProperty('--random-x', Math.random()); /* Nastavení náhodné horizontální pozice bubliny */
  bubble.style.setProperty('--random-y', Math.random()); /* Nastavení náhodné vertikální pozice bubliny */
  bubble.style.setProperty('--random-z', Math.random()); /* Nastavení náhodné pozice bubliny ve výšce */
  bubblesContainer.appendChild(bubble);
}

setInterval(createBubble, 1000); // Vytvoření nové bubliny každou sekundu
