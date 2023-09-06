
const colorSelect = document.getElementById('color-select');


colorSelect.addEventListener('change', function() {
  
  const selectedColor = colorSelect.value;
  
  
  document.body.style.backgroundColor = selectedColor;
});
