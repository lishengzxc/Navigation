window.onload = function () {
  document.querySelector('form').addEventListener('submit', function () {
    document.querySelector('#kw').value = '';
  });
};