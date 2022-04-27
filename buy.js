let buyCards = document.querySelector(".buy_cards")
let catMain = document.querySelector(".cat_main")
let addToCard = document.querySelectorAll("#addToCard")
let mainCard = document.querySelectorAll(".main_card")
let basketPage = document.querySelector(".main_buy")
localStorage.getItem("good")

let arr = [];

const addToBasket = (id) =>{

        let data = goods.find (e=> e.id ===id)
        arr.push(data)
        console.log(arr);
        localStorage.setItem("good", JSON.stringify(arr))
        Shopping()
}

const Shopping = () => {
    let test = JSON.parse(localStorage.getItem(arr))
    test.forEach (e => {
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
    <img src="images/buy/trash.svg" alt="" id="delete">
</div>
    </div> `
})
}