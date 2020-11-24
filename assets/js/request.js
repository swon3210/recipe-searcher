const ENDPOINT = 'http://localhost:3210';

// Recipes
export const getAllRecipesRequest = async () => {
  const response = await fetch(`${ENDPOINT}/recipes`);
  const data = await response.json();
  return data;
}

export const findRecipesRequest = async (recipeName, recipeDescription, tags, ingredients) => {
  const response = await fetch(`${ENDPOINT}/recipes?recipeName=${recipeName}&recipeDescription=${recipeDescription}&tags=${tags}&ingredients=${ingredients}`);
  const data = await response.json();
  return data;
}

export const updateRecipeRequest = async (recipe) => {
  recipe = JSON.stringify(recipe);
  const response = await fetch(`${ENDPOINT}/recipes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: recipe
  })
  console.log(response)
}

export const deleteRecipeRequest = async (id) => {
  const response = await fetch(`${ENDPOINT}/recipes/${id}`, {
    method: 'DELETE'
  })
  console.log(response)
}

export const findTags = async (tagName) => {
  const response = await fetch(`${ENDPOINT}/tags?tagName=${tagName}`);
  const data = response.json();
  return data;
}

export const findIngredients = async (ingredientName) => {
  const response = await fetch(`${ENDPOINT}/ingredients?ingredientName=${ingredientName}`);
  const data = response.json();
  return data;
}