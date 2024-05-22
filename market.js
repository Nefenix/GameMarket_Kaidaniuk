//console.log("Перевірка підключення файлу скриптів js");
let itemsArray = [
//    {
//     firstName: "Віталій",
//     lastName: "Шатківський",
//     age: 43,
//     subject: "CS",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//    },
//    {
//     firstName: "Наталія",
//     lastName: "Венцель",
//     age: 18,
//     subject: "Адміністрація",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
//    },
//    {
//     firstName: "Наталія",
//     lastName: "Кучер",
//     age: 18,
//     subject: "Фізика",
//     photo: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
//     url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
//    },
{
    name: "Електрична Мотокоса 12 MS",
    price: "5499",
    discountPrice: "4497",
    couponPrice: "4395",
    photo: "https://hotline.ua/img/tx/319/3193450945.jpg"
},
{
    name: "Електричний тример 4 Limit",
    price: "4497",
    discountPrice: "3498",
    couponPrice: "3396",
    photo: "https://vitals.ua/image/cache/catalog/demo/sad-park/ezt-033s/ezt-033s-4-1000x1000.jpg"
},
{
    name: "Електрична газонокосарка 9",
    price: "4497",
    discountPrice: "3297",
    couponPrice: "3195",
    photo: "https://w7.pngwing.com/pngs/623/979/png-transparent-lawn-mowers-al-ko-kober-dalladora-others-mower-lawn-vehicle.png"
},
{
    name: "Ручний Оприскувач Limit 81",
    price: "2190",
    discountPrice: "1698",
    couponPrice: "1596",
    photo: "https://hecht.ua/content/images/18/478x480l50nn0/95145173888325.jpg"
}  ,
   


//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',

]

let itemsDiv = document.getElementById("items");

if (itemsDiv) {

    itemsArray
    
    .forEach((item,index)=>{

        itemsDiv.innerHTML += 
        `
        <div class = "item">
            <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
            <p>${item.firstName} ${item.lastName}</p>
            <p>Предмет: ${item.subject}</p>
            <p><img src ="${item.photo}" class = "item-image"></p>
            <p><a href = "${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
            <p><a href = "malito:${item.email}?subject=Питання&body=Доброго дня" target = "_blank" class = "price">Написати</a></p>
        </div>
        `
    }) 
} 
else {
    console.log('Блок товарів не знайдено')
}


//itemsArray = itemsArray.sort()

//for (let i = 0; i < itemsArray.length; i++){
 //   console.log(i + '-й елемент: ',itemsArray[i])
//}