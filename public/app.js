"use strict";


const API_KEY = "VM76EAB8OgnfTyrMrLa14ADwIa2wUNB2";




async function getTopStories(section = "world") {
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("API DATA LOADED:", data);
  } catch (err) {
    console.error("Error fetching NYT data:", err);
  }
}

getTopStories(); 
alert(getTopStories());
