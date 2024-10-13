window.addEventListener('load', function() {
  document.querySelector('.pre-loader').classList.add('hidden');
  setTimeout(function() {
    document.querySelector('.main-container').style.opacity = 1;
  }, 2000);
});
