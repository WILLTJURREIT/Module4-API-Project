"use strict";

// API Key 
const API_KEY = "VM76EAB8OgnfTyrMrLa14ADwIa2wUNB2";

// references 
const articlesDiv = document.getElementById("articles");
const keywordInput = document.getElementById("keyword");
const keywordBtn = document.getElementById("keyword-btn");
const sectionSelect = document.getElementById("section-select");
const noResultsMsg = document.getElementById("no-results-message");

//Fetch the top stories 
async function fetchTopStories(section) {
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    renderArticles(data.results);
    noResultsMsg.classList.add("hidden");
    noResultsMsg.textContent = "";
    console.log("API DATA LOADED:", data);
  } catch (err) {
    console.error("Error fetching NYT data:", err);
    articlesDiv.innerHTML = "<p>Failed to load stories. Please try again.</p>";
  }
}


//Must RENDER the articles  on the page 
function renderArticles(stories) {
  articlesDiv.innerHTML = "";
//go through all stories and store into article one by one
  stories.forEach((story) => {
    const article = document.createElement("article");
//store the image
    const image =
      story.multimedia && story.multimedia[0]
        ? story.multimedia[0].url
        : "";
// create the card
    article.innerHTML = `
      <img src="${image}" alt="Story image">
      <h3>${story.title}</h3>
      <p>${story.abstract}</p>
      <button class="save-btn">Save Story</button>
    `;
// save story and provide feedback to the user
    const saveBtn = article.querySelector(".save-btn");
    saveBtn.addEventListener("click", () => {
      saveStory(story);
      alert("Saved this story!");
    });

    articlesDiv.appendChild(article);
  });
}

// Keyword filter front end
keywordBtn.addEventListener("click", () => {
  const keyword = keywordInput.value.toLowerCase().trim();

  // If the keyword is empty,  and the user did not type anything then show all articles and clear message
  if (!keyword) {
    const articleCards = document.querySelectorAll("#articles article");
    articleCards.forEach((card) => (card.style.display = "block"));
    noResultsMsg.classList.add("hidden");
    noResultsMsg.textContent = "";
    return;
  }
// get all the article cards that are displayed currently
  const articleCards = document.querySelectorAll("#articles article");

  let matchFound = false;// I can use this for if a match is found or not


  // the for each loop will loop through each article card
  articleCards.forEach((card) => {
    const text = card.innerText.toLowerCase();

    // when the card has the keyword this will show it
    if (text.includes(keyword)) {
      card.style.display = "block";
      matchFound = true;
    } else {
      card.style.display = "none";
    }
  });
// if no article is matched  show the feedback and hide. 
  if (!matchFound) {
    noResultsMsg.textContent = "No matching stories found.";
    noResultsMsg.classList.remove("hidden");
  } else {
    noResultsMsg.classList.add("hidden");
    noResultsMsg.textContent = "";
  }
});

fetchTopStories("world");