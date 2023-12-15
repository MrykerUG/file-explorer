// script.js
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var formData = new FormData();
  formData.append('sampleFile', document.querySelector('input[type=file]').files[0]);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    window.open('/path/to/your/directory/' + document.querySelector('input[type=file]').files[0].name);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
