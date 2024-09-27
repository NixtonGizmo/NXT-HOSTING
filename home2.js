document.querySelector('.slide-btn').addEventListener('click', function() {
  document.querySelector('.chat-sidebar').classList.toggle('open');
  document.querySelector('.main-container').classList.toggle('sidebar-open');
});
