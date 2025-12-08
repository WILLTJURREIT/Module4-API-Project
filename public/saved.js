"use strict";


// load the stories from the local storage and render them in the saved 
async function loadSavedStories() {
    //store into references and parses the JSON data to javascript
const saved = await axios.get("/api/saved-stories").then(res => res.data);

  const container = document.getElementById("saved-list");

  //clear the old content - no duplicate data
  container.innerHTML = "";

  //show a message for feedback if nothing exists
  if (saved.length === 0) {
    container.innerHTML = "<p>You have no saved stories yet.</p>";
    return;
  }
// loop through every story in the array and store into variable
  saved.forEach((story, index) => {
    const article = document.createElement("article");

    //check if the story has multi media or not if it does use  the URL, if not we use an empty string( this part was confusing for me)
    const image =
      story.multimedia && story.multimedia[0]
        ? story.multimedia[0].url
        : "";

        // create the card for the article to go on  this places the data onto the card. 
    article.innerHTML = `
      <img src="${image}" alt="Story image">
      <h3>${story.title}</h3>
      <p>${story.abstract}</p>

     <a class="read-more-btn" href="${story.url}" target="_blank">Read More</a>

      <button class="delete-btn" data-index="${index}">
        Delete
      </button>
    `;
// add the article to the page now that its created
    container.appendChild(article);
  });

  // Attach event listeners to all delete buttons
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      deleteStory(index);
    });
  });
}
// delete function for the saved stories, felt correct to place in this file. 
async function deleteStory(index) {
await axios.post("/api/delete-story", { index });

  // refresh the list
  loadSavedStories(); 
}

loadSavedStories();
