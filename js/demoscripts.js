var recipe = [
    {
        name: 'Spicy Spaghetti',
        ingredientslist: "'Spaghetti' 'Extra Virgin Olive Oil' '1/4 cup of diced onions' '1 tsp minced garlic' '1 tbsp Pepper Flakes' '1 tsp Oregano' '1/2 cup cherry tomatores'",
        recipesteps: "'bring water to boil and cook spaghetti' 'heat olive oil in skillet over medium heat' 'add onion to oil and cook til soft' 'stir in red pepper flakes, more if you like spicy' 'add garlic and cook for 1 minute before adding tomatoes, oregano and salt, and any other pepper or salt youd like' 'cook for 5-7 minutes stirring occasionally' 'serve the sauce over the noodles!",
        description: 'This Spicy Spaghetti is an easy dinner made with fresh cherry tomatoes, a kick of red pepper flakes, and a delicious blend of fresh basil and parmesan cheese. Its the perfect summer entree sure to please your whole family with just the right amount of spice!',
        stars: 5,
        id: 'recipe1'
    },
    {
        name: 'The Best Grilled Cheese',
        ingredientslist: "'2 pieces of your favorite bread' 'butter' '3 slices of your favorite cheese' '1/8 tsp garlic' 'a couple pieces of spinach'",
        recipesteps: "'spread butter on one side of each piece of toast' 'on the non buttered side, place cheese evenly between the two pieces' place on spinach and sprinkle garlic and pepper evenly' 'on a pan, temperature medium/high, place sandwhich on and let cook for about 1 minute, flipping over and doing the same until cheese is all melted' 'enjoy'",
        description: 'A delicious grilled cheese with a little spice that is sure to impress for a quick eat!',
        stars: 4.50,
        id: 'recipe2'
    }
];


// Constructor to create Package Functions
function Package(recipe) {
    this.name = recipe.name;
    this.ingredients = recipe.ingredientslist.split("' '").map(str => str.replace(/'/g, '').trim());
    this.steps = recipe.recipesteps.split("' '").map(str => str.replace(/'/g, '').trim());
    this.description = recipe.description;
    this.stars = recipe.stars;
}

// Create Package objects from database
const recipe1 = new Package(recipe[0]);
const recipe2 = new Package(recipe[1]);

// Function to insert data
function displayPackageData(packageObj, packageIndex) {
    document.getElementById(`recipe-${packageIndex}-name`).textContent = packageObj.name;
    document.getElementById(`recipe-${packageIndex}-description`).textContent = packageObj.description;

    // Add Inngredients List
    const ingredientsList = document.getElementById(`recipe-${packageIndex}-ingredientslist`);
    ingredientsList.innerHTML = '';
    packageObj.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Add Steps List
    const stepsList = document.getElementById(`recipe-${packageIndex}-recipesteps`);
    stepsList.innerHTML = '';
    packageObj.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });

    // Star Rating
    document.getElementById(`recipe-${packageIndex}-stars-count`).textContent = packageObj.stars.toFixed(2);
}

// Display data for both recipes
displayPackageData(recipe1, 1);
displayPackageData(recipe2, 2);
