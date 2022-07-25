
const reviews = [
    {
      id: 1,
      name: "ram",
      job: "",
      img:
        "./pics/dummy1.png",
      text:
        "Whenever I deliver food to my Customers, they are always happy. I dont know why but I make more sales."
    },
    {
      id: 2,
      name: "anees",
      job: "Brick Layer",
      img:
        "./pics/dummy2.jpg",
      text:
        "Whenever I deliver food to my Customers, they are always happy. I dont know why but I make more sales."
    },
    {
      id: 3,
      name: "james",
      job: "Student",
      img:
        "./pics/dummy3.png",
      text:
        "Whenever I deliver food to my Customers, they are always happy. I dont know why but I make more sales."
    },
    {
      id: 4,
      name: "san",
      job: "Student",
      img:
        "./pics/dummy4.jpg",
      text:
        "Whenever I deliver food to my Customers, they are always happy. I dont know why but I make more sales.."
    }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  