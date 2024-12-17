function calculateServings() {
  let servings = document.getElementById('servings').value;
  let ingredients = document.querySelectorAll('#ingredient');
  document.getElementById("error-message").innerText = '';

  if ((servings > 0) && (servings <= 10)) {
    ingredients.forEach(ingredient => {
      let amount = ingredient.getAttribute('quantity');
      let newServings = (amount * servings / 4);
  
      newServings = Math.ceil(newServings);
  
      ingredient.textContent = (newServings);
      });
  } else {
    document.getElementById("error-message").innerText = "Ungültig! Bitte geben Sie einen Wert zwischen 1 und 10 ein!";
  }
}

