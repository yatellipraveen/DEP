//global variable declaration

let pageIndex = -1;
let items = new Array();
let totalresult = 0;
let elementsPerPage = 4;
const url =
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCyjRf9SI3vh3FATvFJP1f2z6-0GEyaCCA&type=video&part=snippet&order=viewCount&maxResults=15&q=";
let query = "";
let nextPageToken = "";
let previousPageToken = "";

//initialize function
(function init() {
  headerDiv();
  searchDiv();
  displayDiv();
  navigationDiv();
})();

//creating header
function headerDiv() {
  const header = document.createElement("header");
  //creating h1 tag
  const title = document.createElement("h1");
  const titleText = document.createTextNode("Youtube Search");
  title.appendChild(titleText);
  header.appendChild(title);

  const body = document.querySelector("body");
  body.appendChild(header);
}

function searchDiv() {
  //input tag
  const searchBox = document.createElement("input");
  searchBox.setAttribute("type", "text");
  searchBox.setAttribute("id", "searchbox");
  searchBox.setAttribute("placeholder", "search");

  const searchButton = document.createElement("button");
  searchButton.innerHTML = "&#128269;";

  //search div
  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search");
  searchDiv.appendChild(searchBox);
  searchDiv.appendChild(searchButton);

  const body = document.querySelector("body");
  body.appendChild(searchDiv);

  //event listeners
  searchButton.addEventListener("click", async event => {
    query = searchBox.value;
    await getVideos(url + query);
    pageIndex++;
    populateView(pageIndex);
    nextButton.style.display = "block";
  });
}

//display div
function displayDiv() {
  const displayDiv = document.createElement("div");
  displayDiv.classList.add("display");

  const body = document.querySelector("body");
  body.appendChild(displayDiv);
}

function navigationDiv() {
  //previous button
  const previousButton = document.createElement("button");
  previousButton.classList.add("previous");
  previousButton.textContent = "Previous";

  //next Button
  const nextButton = document.createElement("button");
  nextButton.classList.add("next");
  nextButton.textContent = "Next";

  //navigation div
  const navigationDiv = document.createElement("div");
  navigationDiv.classList.add("navigation");
  navigationDiv.appendChild(previousButton);
  navigationDiv.appendChild(nextButton);

  const body = document.querySelector("body");
  body.appendChild(navigationDiv);

  previousButton.addEventListener("click", event => {
    clearView();
    pageIndex--;
    populateView(pageIndex);
  });

  nextButton.addEventListener("click", event => {
    clearView();
    pageIndex++;
    populateView(pageIndex);
  });

  //clear the view on the page
  function clearView() {
    const cardOneImg = document.querySelectorAll(".card");
    for (let i = 0; i < cardOneImg.length; i++) {
      displayDiv.removeChild(cardOneImg[i]);
    }
  }
}

//function to fetch data and add to the global list items
function getVideos(queryUrl) {
  return fetch(queryUrl)
    .then(resposne => {
      return resposne.json();
    })
    .then(result => {
      let newitems = result.items;
      items = items.concat(newitems);
      totalresult = totalresult + 15;
      nextPageToken = result.nextPageToken;
      previousPageToken = result.prevPageToken;
    });
}

async function populateView(pageIndex) {
  let previousButton = document.querySelector(".previous");
  if (pageIndex <= 0) {
    previousButton.style.display = "none";
  } else previousButton.style.display = "block";
  if (pageIndex * elementsPerPage > totalresult - elementsPerPage) {
    await getVideos(url + query + "&pageToken=" + nextPageToken);
  }
  for (
    let i = pageIndex * elementsPerPage;
    i < pageIndex * elementsPerPage + elementsPerPage;
    i++
  ) {
    //img tag
    let img = document.createElement("img");
    img.src = items[i].snippet.thumbnails.medium.url;
    img.style = "width:100%";

    //title tag
    let title = document.createElement("h4");
    title.textContent = items[i].snippet.title;

    //description tag
    let description = document.createElement("div");
    description.classList.add("container");
    let docText = document.createTextNode(items[i].snippet.description);
    description.appendChild(docText);

    //appending
    let card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    let displayDiv = document.querySelector(".display");
    displayDiv.appendChild(card);
  }
}
