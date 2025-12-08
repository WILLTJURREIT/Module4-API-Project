# **Module 4 Milestone 2**

Steps taken:

1. Create files and folders, Public folder containing app.js, index.html, style.css
2. Create other files database.json (this will act as the database for the assignment)
3. Install npm init -y to make this project use node, and create the json files which will handle the use of node.
4. Get API Key from NY Times site, make an account and get API Key V****gnfTyrMrLa14ADwIa2wUNB2
5. Once I have got this API Key I need to put it some place, so I will store this into a variable in my app.js, I feel this might not be the most secure way to handle the API Key, but for the purpose of this assignment for now I will store into a constant variable "API_KEY".
6. Add saved.html, for a better place the saved top stories can go.
7. Add saved.js to help with the functionality.
8. Add css to help with buttons and styling.
9. Clean up the code in index.html, now that I will have the top stories on the main page, and saved stories in the saved page. Add navigation to navigate between the pages.
10. Get all references into my app.js file.
11. Added Axios script tags fromt he website. Axios is a JavaScript library that makes it easier to request data from APIs, and the site I found the tag at is https://axios-http.com/docs/intro. I am using axios to help simplify the process.
12. Next I need to get the key word filter to work properly now that I have the top stories available, this will be a good time to now figure out the filtering.
13. Created the Key word filter, and can choose from the top stories by key word if it matches.
14. Add code into server.js so that server can run and serve the project from the public folder. I used Express, added express.json(), added express.static(), and added the route to serve index.html  I needed this in order to load the app properly through localhost.
15. Add the saving-story functionality inside app.js using local storage. When I click Save Story, it now stores the article object into the savedStories array in localStorage, and I added an alert to confirm to the user that the story was saved.
16. Add full delete button functionality in saved.js file this ment adding a delete button in the saved.html cards, passingg the index through a data attribute, and creating a deleteStory() function that removes the specific item from the savedStories array using splice(). This updates localStorage and refreshes the list so the deleted item disappears immediately.
17. Fix issues in saved.js where saved stories were not rendering. I added comments, and re-organized when loadSavedStories() gets called so that it works every time the saved page loads.
18. Fix issues with the keyword filter by adjusting references and making sure the filter only runs on the current articles being displayed. Also added a feedback message when no keyword results are found.
19. checked everything displays correctly, including images, titles, and abstracts.

### **Struggles & What I Learned**

My biggest struggle in this project was getting the saved stories to actually appear on the saved page. The save story button worked and showed the alert, but nothing was being stored. I kept thinking the backend or my code was broken.

The real issue was that I was not using the express server to open my files, I did not realize I needed to go through localhost:3000

Because of that, Axios couldn’t send POST requests, and I kept getting errors, and it was jsut not working.

Once I ran the server properly and opened the site through the local hosteverything worked.
I also struggles with making my JSON file have the data stored into it, my first attempt I did not feel was what was required, so I changed my code so the data would use the database as persistent storage.
