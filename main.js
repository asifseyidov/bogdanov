//Burger Menu

let burger_lines = document.querySelector(".burger_lines");
let burger_menu = document.querySelector(".burger_menu");
let header_left = document.querySelector(".header_left");
let first = document.querySelector("#first_slider");
let second = document.querySelector("#second");

burger_lines.addEventListener("click", () => {
  burger_menu.classList.toggle("active");

  if (burger_lines.classList.contains("burger_lines")) {
    burger_lines.classList.replace("burger_lines", "burger_christ");
  } else {
    burger_lines.classList.replace("burger_christ", "burger_lines");
  }

  first.classList.toggle("none");
  second.classList.toggle("none");
});

// Fixed Header

let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  if (fromTop > 220) {
    header.classList.add("fixed");
    header.style.height = "70px";
  } else {
    header.classList.remove("fixed");
    header.style.height = "110px";
  }
});

// City change

let flagDown = document.querySelector("#flagDown");
let top_drop = document.querySelector("#top_drop");
let city = document.querySelector("#city");
let flag = document.querySelector(".flag");
let rus = document.querySelector(".rus");
let eng = document.querySelector(".eng");
let esp = document.querySelector(".esp");
let ger = document.querySelector(".ger");
let City = localStorage.getItem("City");

flagDown.addEventListener("click", () => {
  top_drop.classList.toggle("active");
  flagDown.classList.toggle("active");
});

// Moscow
rus.addEventListener("click", () => {
  city.textContent = "Москва";
  flag.src = "images/top_left/Mask Group.svg";
  localStorage.setItem("City", "Moscow");
  top_drop.classList.remove("active");
  flagDown.classList.remove("active");
});
if (City === "Moscow") {
  city.textContent = "Москва";
  flag.src = "images/top_left/Mask Group.svg";
}

// England
eng.addEventListener("click", () => {
  city.textContent = "London";
  flag.src = "images/top_left/Mask Group (1).svg";
  localStorage.setItem("City", "London");
  top_drop.classList.remove("active");
  flagDown.classList.remove("active");
});
if (City === "London") {
  city.textContent = "London";
  flag.src = "images/top_left/Mask Group (1).svg";
}

// Espaniol
esp.addEventListener("click", () => {
  city.textContent = "Madrid";
  flag.src = "images/top_left/Mask Group (2).svg";
  localStorage.setItem("City", "Madrid");
  top_drop.classList.remove("active");
  flagDown.classList.remove("active");
});
if (City === "Madrid") {
  city.textContent = "Madrid";
  flag.src = "images/top_left/Mask Group (2).svg";
}

// Germany
ger.addEventListener("click", () => {
  city.textContent = "Berlin";
  flag.src = "images/top_left/Mask Group (3).svg";
  localStorage.setItem("City", "Berlin");
  top_drop.classList.remove("active");
  flagDown.classList.remove("active");
});
if (City === "Berlin") {
  city.textContent = "Berlin";
  flag.src = "images/top_left/Mask Group (3).svg";
}

// Catalog Hover (CSS hover işləmir)

let catalog = document.querySelector(".catalog");
let header_dropdown = document.querySelector(".header_dropdown");

catalog.addEventListener("mouseenter", () => {
  header_dropdown.classList.add("active");
  header_dropdown.addEventListener("mouseover", () => {
    header_dropdown.classList.add("active");
  });
});
catalog.addEventListener("mouseleave", () => {
  header_dropdown.classList.remove("active");
  header_dropdown.addEventListener("mouseout", () => {
    header_dropdown.classList.remove("active");
  });
});

// BASKET

let goods = [
  {
    id: 1,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/1.png",
    price: 14000,
    count: 1,
  },
  {
    id: 2,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/2.png",
    price: 14000,
    count: 1,
  },
  {
    id: 3,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/3.png",
    price: 14000,
    count: 1,
  },
  {
    id: 4,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/4.png",
    price: 14000,
    count: 1,
  },
  {
    id: 5,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/5.png",
    price: 14000,
    count: 1,
  },
  {
    id: 6,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/6.png",
    price: 14000,
    count: 1,
  },
  {
    id: 7,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/7.png",
    price: 14000,
    count: 1,
  },
  {
    id: 8,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/8.png",
    price: 14000,
    count: 1,
  },
  {
    id: 9,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/9.png",
    price: 14000,
    count: 1,
  },
  {
    id: 10,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/10.png",
    price: 14000,
    count: 1,
  },
  {
    id: 11,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/11.png",
    price: 14000,
    count: 1,
  },
  {
    id: 12,
    title: "Блузон «Овация» в две длинные строки",
    image: "images/jamper/12.png",
    price: 14000,
    count: 1,
  },
];

let buyCards = document.querySelector(".buy_cards");
let catMain = document.querySelector(".cat_main");
let addToCard = document.querySelectorAll("#addToCard");
let basketPage = document.querySelector(".main_buy");
let deleteBtn = document.querySelectorAll("#delete")
localStorage.getItem("good");

let arr = [];

if (catMain) {
  goods.forEach((e) => {
    catMain.innerHTML += `<div class="main_card">
      <div class="card_img">
          <img src=${e.image} alt="">
          <div class="overlay" id="addToCard" onclick = "addToBasket(${e.id})">
              <span>ДОБАВИТЬ</span>
              <img src="images/jamper/bag.svg" alt="">
          </div>
      </div>
      <div class="card_text">
          <div class="love">
              <span>Арт. 1234567</span>
              <img src="images/jamper/love.svg" alt="">
          </div>
          <p>${e.title}</p>
          <span id="price">${e.price} </span><span>14 000 ₽</span>
      </div>
      </div>`;
  });
}

const addToBasket = (id) => {
  let data = goods.find((e) => e.id === id);
  arr.push(data);
  console.log(arr);
  localStorage.setItem("good", JSON.stringify(arr));
  Shopping()
};

const removeItem = (id) => {
  arr.find(e => e.id === id)
  arr = arr.filter(e => e.id !== id)
  localStorage.removeItem("good", JSON.stringify(arr));
  console.log(arr);
  Shopping()
}

const Shopping = () => {
 
  let test = JSON.parse(localStorage.getItem("good"));
  if (buyCards) {
    buyCards.innerHTML = ""
    test.forEach((e) => {
      buyCards.innerHTML += ` <div class="left_part">
          <div class="buy_img">
          <img src="${e.image}" alt="">
          </div>
          <div class="buy_desc">
          <p>${e.title}</p>
          <div class="love">
              <span>Арт. 1234567</span>
              <img src="images/jamper/love.svg" alt="">
          </div>
          </div>
          <div class="buy_size">
          <span>42</span>
      </div>
      <div class="buy_btn">
          <img src="images/buy/minus.svg" alt="">
          <span>0</span>
          <img src="images/buy/plus.svg" alt="">
      </div>
      <div class="buy_price">
          <span id="price">${e.price}</span>
          <span>11000</span>
      </div>
      <div class="buy_trash">
          <img src="images/buy/trash.svg" alt="" id="delete" onclick = "removeItem(${e.id})">
      </div>
          </div> `;
    });
  }
};
Shopping();


