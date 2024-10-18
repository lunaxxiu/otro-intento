const botonVerde = document.getElementById('verde');
const botonRojo = document.getElementById('rojo');

botonRojo.addEventListener('click', () => {
  botonRojo.style.transform = 'scale(0.8)';
  botonVerde.style.transform = 'scale(1.2)';
  setTimeout(() => {
    botonRojo.style.transform = 'scale(1)';
    botonVerde.style.transform = 'scale(1)';
  }, 500);
});

botonVerde.addEventListener('click', () => {
  botonVerde.style.transform = 'scale(1.2)';
  botonRojo.style.transform = 'scale(0.8)';
  setTimeout(() => {
    botonVerde.style.transform = 'scale(1)';
    botonRojo.style.transform = 'scale(1)';
  }, 500);
});
