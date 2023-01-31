
// const cardsAIData = [
//   {
//     "userId": 1,
//     "id": 1,
//     "card-title": "Blog on Mean Stack-1",
//     "card-text": "This blog explains Mean Stack 1"
//   },
//   {
//     "userId": 2,
//     "id": 2,
//     "card-title": "Blog on Mean Stack-2",
//     "card-text": "This blog explains Mean Stack 2"
//   },
//   {
//     "userId": 3,
//     "id": 3,
//     "card-title": "Blog on Mean Stack-3",
//     "card-text": "This blog explains Mean Stack 3"
//   },
//   {
//     "userId": 4,
//     "id": 4,
//     "card-title": "Blog on Mean Stack-4",
//     "card-text": "This blog explains Mean Stack 4"
//   },
//   {
//     "userId": 5,
//     "id": 5,
//     "card-title": "Blog on Mean Stack-5",
//     "card-text": "This blog explains Mean Stack 5"
//   },
// ];
// import { cardsAIData } from "./aiData.js";
// console.log(cardsAIData);






function load() {
  // show the profile and logout menu
  document.getElementById("profile").hidden = false;
  //hide the login menu    
  document.getElementById("login").hidden = true;

  // // Load mean-container
  // const cardsContainer = document.getElementById('mean-container');
  // // cardsData contains data from JSON or HTTP Get API call
  // cardsMeanData.forEach((cardAIData) => {
  //   const card = createCard(cardAIData);
  //   cardsContainer.appendChild(card);
  // });
  loadMeanData();
  loadCloudData();
  loadAIData();
}

function loadMeanData(){
  // Load mean-container
  const cardsContainer = document.getElementById('mean-container');
  // cardsData contains data from JSON or HTTP Get API call
  cardsMeanData.forEach((cardAIData) => {
    const card = createCard(cardAIData);
    cardsContainer.appendChild(card);
  });
} 


function loadCloudData(){
    // Load mean-container
    const cardsContainer = document.getElementById('cloud-container');
    // cardsData contains data from JSON or HTTP Get API call
    cardsCloudData.forEach((cardAIData) => {
      const card = createCard(cardAIData);
      cardsContainer.appendChild(card);
    });
} 

function loadAIData(){
    // Load mean-container
    const cardsContainer = document.getElementById('ai-container');
    // cardsData contains data from JSON or HTTP Get API call
    cardsAIData.forEach((cardAIData) => {
      const card = createCard(cardAIData);
      cardsContainer.appendChild(card);
    });
} 

document.getElementById("mean-stack-button").addEventListener("click", function () {
  // show the login screen again
  // Need to interate the card data in the JSON. Here data is cardsData
  const cardsContainer = document.getElementById('mean-container');
  //   cardsData contains data from JSON or HTTP Get API call
  cardsAIData.forEach((cardAIData) => {
    const card = createCard(cardAIData);
   // cardsContainer.appendChild(card);
  });
});

document.getElementById("logout").addEventListener("click", function () {
  // show the login screen again
  alert("logout");
});


document.getElementById("profile").addEventListener("click", function () {
  // show the profile page
  alert("profile");
});


// start of create card data element

function createCard (cardData) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('col-md-3', 'col-sm-6', 'mb-4');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardLink = document.createElement('a');
  cardLink.href = '#';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'smaller-text');

  const cardImg = document.createElement('img');
  cardImg.src = "/images/Mean Stack.png";
  cardImg.style = "width:50px; height:50px";
  cardImg.classList.add('card-img-top');
  cardImg.alt = "...";

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title', 'smaller-text', 'no-link-text');
  cardTitle.textContent = cardData['card-title'];

  const cardText = document.createElement('p');
  cardText.classList.add('card-text', 'smaller-text', 'no-link-text');
  cardText.textContent = cardData['card-text'];

  cardBody.appendChild(cardImg);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardLink.appendChild(cardBody);
  card.appendChild(cardLink);
  cardContainer.appendChild(card);

  return cardContainer;
};

// End of create card data element



