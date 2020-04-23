document.addEventListener('DOMContentLoaded', function(event) {
  const content = document.querySelector("div.main-content h1");
  const body = document.body;

  content.onmouseover = function() {
    body.classList.remove('light');
    content.classList.remove('light');
    body.classList.add('dark');
    content.classList.add('dark');
  };

  content.onmouseout = function() {
    body.classList.remove('dark');
    content.classList.remove('dark');
    body.classList.add('light');
    content.classList.add('light');
  }
});
