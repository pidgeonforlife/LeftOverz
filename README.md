## 💡 Inspiration 💡
According to the food waste loss report by Canada Gov, 58% of all food produced in Canada is wasted, moreover, 18% of food in restaurants is thrown away. By providing an outlet for restaurants to sell food that would otherwise be wasted, our app aims to change those grim statistics!

## ⚙️ What it does ⚙️
You can sign up on the app and connect with restaurants directly to purchase heavily discounted food items. You get to prevent food waste, support local businesses and both you and the restaurant get to save money! Products being sold may look like an extra burger or a side of soup from a lunch rush that the restaurant couldn't sell. 

We also added a recipe recommendation system for users. Users can find recipes to make using their leftovers and/or ingredients they have on hand. The recipe recommender provides users a wide variety of recipes based on their desired calorie count and available inputted ingredients. 

## 🛠️ How we built it 🛠️
For the frontend, we used React (JS)/(Bootstrap) and FontAwesome to create a visual and accessible way for users to order food. 

To store user data, we took advantage of Firebase and used Axios to fetch any data required from firebase. We also used react-router-dom to handle routing inside of React(JS).

For the recommendation feature, we used Pandas, Numpy and Seaborn to preprocess our data. We trained our model using Sklearn on 2000 different recipes.

## 😣 Challenges we ran into 😣
We were plagued with challenges throughout WinHacks because there are only 3 of us and we started nearly 24 hours late.

Some Challenges include:

Getting reactJS to work on everyone's computer
Organizing schedules
Finding a good dataset for recipes
Getting multiple reactJS pages to work together seamlessly
Implementing parts of the app that are reactive and respond to user interaction

## 🎉 Accomplishments that we're proud of 🎉
As a team consisting of only 3 hackers, we accomplished A LOT during the past 24 hours!

Some notable accomplishments include:
Designing the app from scratch
Using so many tools, languages and frameworks at once, and making them work together :D
Figuring out how to deploy ML models to a mobile app and understanding get/post requests

## ⏭️What's next for LeftOverz⏭️
Implement a chat feature so users can talk amongst themselves and employers
Expand on the search feature (add more search terms)
Make our job board more aesthetically pleasing
Have a 'posts' area where users can talk about their experiences and give advice
Possibly have a resume builder built in to the app to help users with their application process
