# Online Recipe Application

## Overview

The Online Recipe Application is a web-based platform that allows users to manage their favorite recipes. Built using ReactJS and JSON Server, this application provides users with the ability to store, search, add, delete, and update recipes. Users can register, log in, and securely manage their recipe collections. The app implements CRUD operations and ensures user-friendly navigation with responsive design.

## Features

* User Authentication:

** Users can register and log in to the application to access their personalized recipe list.
** User data is securely stored, and only authorized users can manage their recipes.

## Recipe Management:

* Users can add new recipes, update existing recipes, delete unwanted recipes, and search for specific recipes based on keywords.

## CRUD Operations:

* Create: Add new recipes to the list.
* Read: View all saved recipes.
* Update: Modify details of existing recipes.
* Delete: Remove a recipe from the list.

##Recipe Details:

* Each recipe includes:
** Recipe Name
** Ingredients
** Instructions
** Category (e.g., Dessert, Main Course, Appetizer)
** Preparation Time
** Cooking Time
**Servings


## Recipe Categories:

* Recipes are organized by categories such as Breakfast, Lunch, Dinner, and Desserts, making it easy for users to navigate and classify their dishes.

## Search Functionality:

* Users can search for recipes by keywords. This feature dynamically filters and displays matching recipes based on user input.

## Responsive Design:

* The app is built to be responsive and ensures that it works seamlessly on various devices (desktops, tablets, and smartphones).

## Pages

1. Login Page

* Users can log in using their username and password.
* Validation is in place to ensure the correct credentials are provided.

2. Registration Page

* New users can create an account by providing a username and password.
* Form validation ensures unique usernames and strong passwords.

4. Home Page

* Displays the list of all stored recipes.
* Users can search for specific recipes, view recipe details, and manage their recipe list.

## Recipe Features

1. Search Function

* Users can search for recipes by entering keywords in the search bar.
The recipe list will dynamically update to display only recipes that match the search criteria.

2. Add Recipe

* Users can add new recipes by providing the following details:
** Recipe Name
** Ingredients: List of ingredients required for the dish.
** Instructions: Step-by-step guide on how to prepare the dish.
** Category: Classify the recipe (e.g., Dessert, Main Course, etc.).
** Preparation Time: Time required for preparation.
** Cooking Time: Time required for cooking.
** Servings: Number of servings the recipe makes.
** Proper input validation ensures that all necessary fields are filled in correctly.

3. Delete Recipe

* Users can delete any recipe from their list by clicking the delete button associated with the recipe.
* Once deleted, the recipe is removed from both the UI and the JSON Server database.

7. Update Recipe

* Users can edit any existing recipe to update the name, ingredients, instructions, category, time, or servings.
* Changes are saved to the JSON Server database.

9. Recipe Categories

* Users can categorize their recipes into predefined categories such as Breakfast, Lunch, Dinner, or custom categories.
* Categories help in filtering and organizing recipes.


## Technologies Used

* ReactJS: Used for building the user interface and managing component state.
* JSON Server: A fake REST API to handle and manage data for the application.
* Axios/Fetch API: Used for making HTTP requests to the JSON Server endpoints.
* CSS/Styled Components: Used for responsive design and styling.


## API Endpoints

The JSON Server provides a REST API for managing recipe data.

* Get all recipes:

** URL: /recipes
** Method: GET
** Purpose: Retrieve the list of all recipes.

## Add a new recipe:

* URL: /recipes
* Method: POST
* Purpose: Add a new recipe to the list.

## Body:

{
  "name": "Recipe Name",
  "ingredients": "List of ingredients",
  "instructions": "Cooking instructions",
  "category": "Category",
  "prepTime": "Preparation time",
  "cookTime": "Cooking time",
  "servings": "Number of servings"
}

## Delete a recipe:

* URL: /recipes/:id
* Method: DELETE
* Purpose: Delete a specific recipe by its ID.

Update a recipe:

* URL: /recipes/:id
* Method: PUT/PATCH
* Purpose: Update the details of an existing recipe.
* Body: (For example, updating the recipe name)


{
  "name": "Updated Recipe Name"
}

Installation and Setup
Clone the repository:

bash
Copy code
git clone https://github.com/Asiphile1/Recipe-App-CodeTribe.git
cd online-recipe-app
Install dependencies:

bash
Copy code
npm install
Run JSON Server: Start the JSON server to handle recipe data:

bash
Copy code
npx json-server --watch db.json --port 5000
Start the React Application: In a new terminal window, run:

bash
Copy code
npm start
Access the Application: Open a browser and navigate to http://localhost:3000 to access the app.

## Validation

* Form Validation: All forms (login, registration, recipe creation) are validated to ensure that users provide the necessary information. Input validation includes:
** Required fields (e.g., recipe name, ingredients, instructions).
** Proper password validation during registration.
* Error Handling: The app handles errors gracefully by providing informative messages to the user if an action fails (e.g., failed login, empty form submission).


## Security

* Authentication: Users must be logged in to access the recipe list, add, delete, or update recipes.
* Authorization: Only the owner of the recipes can modify or delete their recipes.
* Password Protection: Passwords are securely handled and never stored in plain text.

## Responsive Design

The application is fully responsive, ensuring that it works seamlessly across a variety of screen sizes, from desktop computers to mobile phones.

## Future Enhancements

* User Profiles: Allow users to have personalized profiles with saved recipes.
* Recipe Ratings: Enable users to rate and review recipes.
* Recipe Sharing: Allow users to share their recipes with friends and family via social media.
* Image Uploads: Allow users to upload images for each recipe.
