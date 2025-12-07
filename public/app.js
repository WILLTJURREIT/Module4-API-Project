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
async function getTopStories(section) {
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
console.log("error not happening", getTopStories());

