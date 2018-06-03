(() => {
  window.addEventListener('load', () => {
    // make intro components' display: none
    setTimeout(() => {
      let canvas = document.querySelector('.canvas');
      let goggleOpening = document.getElementById('goggle-opening');
      canvas.style.display = 'none';
      goggleOpening.style.display = 'none';
    }, 8000);
  });
})();
