window.startGlitch = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => img.classList.add('vhs-glitch'));
  console.log(`💥 Glitch applicato a ${images.length} immagini!`);
};

window.stopGlitch = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => img.classList.remove('vhs-glitch'));
  console.log("Calma ripristinata. 🕊️");
};

console.log("Libreria Glitch caricata in memoria e pronta all'uso! Digita startGlitch() per iniziare.");