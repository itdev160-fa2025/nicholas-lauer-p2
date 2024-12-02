document.addEventListener('DOMContentLoaded', () => {
  // Arrays to store ingredients and steps
  const ingredients = [];
  const steps = [];

  // Function to add an item to a list
  function addItem(inputId, listId, array) {
      const inputField = document.getElementById(inputId);
      const list = document.getElementById(listId);

      const value = inputField.value.trim(); // Get input value
      if (value !== '') {
          array.push(value);
          updateList(array, list);
          inputField.value = '';
      }
  }

  // Function to update the displayed list
  function updateList(array, list) {
      list.innerHTML = array.map((item, index) => `<li data-index="${index}">${item}</li>`).join('');

      // Add event listeners to list items for click-to-remove 
      list.querySelectorAll('li').forEach((item) => {
          item.addEventListener('click', (event) => {
              const itemIndex = parseInt(event.target.getAttribute('data-index'), 10);
              array.splice(itemIndex, 1); // Remove the clicked item from the array
              updateList(array, list); // Refresh the displayed list
          });
      });
  }

  // Function to display the full recipe
  function displayRecipe() {
      const recipeName = document.getElementById('recipe-name-input').value.trim();
      const recipeOutput = document.getElementById('recipe-output');

      // Validate recipe name
      if (!recipeName) {
          alert('Please enter a recipe name.');
          return;
      }

      // Validate ingredients
      if (ingredients.length === 0) {
          alert('Please add at least one ingredient.');
          return;
      }

      // Validate steps
      if (steps.length === 0) {
          alert('Please add at least one step.');
          return;
      }

      // Hide the input and list sections
      document.getElementById('recipe-inputs').style.display = 'none';

      // Display the recipe output
      recipeOutput.innerHTML = `
          <h2>${recipeName}</h2>
          <h3>Ingredients:</h3>
          <ul id="output-ingredients">${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}</ul>
          <h3>Steps:</h3>
          <ol id="output-steps">${steps.map((step) => `<li>${step}</li>`).join('')}</ol>
      `;

      // Make the recipe output visible
      recipeOutput.style.display = 'block';

      // Add event listeners for strikethrough 
      document.getElementById('output-ingredients').addEventListener('click', toggleStrikethrough);
      document.getElementById('output-steps').addEventListener('click', toggleStrikethrough);
  }

  // Function to toggle strikethrough on click for the final recipe 
  function toggleStrikethrough(event) {
      if (event.target.tagName === 'LI') {
          event.target.style.textDecoration =
              event.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
      }
  }

  // Attach event listeners to buttons
  document.getElementById('add-ingredient-btn').addEventListener('click', () => {
      addItem('ingredient-input', 'ingredients-list', ingredients);
  });

  document.getElementById('add-step-btn').addEventListener('click', () => {
      addItem('step-input', 'steps-list', steps);
  });

  document.getElementById('display-recipe-btn').addEventListener('click', displayRecipe);
});

function getTodaysDate() {
    const today = new Date();

    // Extracting the date parts
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();

    // Formatting the date as MM/DD/YYYY
    return `${month}/${day}/${year}`;
}

// Display the date in the element with id "date"
document.getElementById('date').textContent = getTodaysDate();

getTodaysDate();