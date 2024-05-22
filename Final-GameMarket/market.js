
let itemsArray = [
    {
    student: "",
    developer:"",
    email: "",
    githubRepo: "",
    liveDemo: "",
    driveLink: "",
    formLink: "",
    gameMarketRepo: "",
    gameMarketDemo: "",
    marketPage: "",
}
]

let itemsDiv = document.getElementById("items");
// Перевірка існування знайденого блоку 
if (itemsDiv) { 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
            <div class="bober">
                <div class="item-title">${item.student}</div>
                
            </div>
            

            <p><img src="${item.photo}" " class="item-image"></p>

            <div class="parts-pay">
            <div><img src="img-market/mono-lapka.png" alt="">6</div>
            <div><img src="img-market/pb.png" alt="">8</div>
            </div>

            <div class="prise">
            <div><span>${item.price}</span><sup>грн</sup></div>
            <div><span>${item.discountPrice}</span><sup>грн</sup></div>
            
            </div>

            <div class="prise bonus">
            <div>ціна за купоном</div>
            <div><span>${item.couponPrice}</span><sup>грн</sup></div>
            </div>
        </div>`
    


      
    });
} else {
    // Вивід повідомлення про не знайдений блок 
    console.log('Блок товарів не знайдено');
}