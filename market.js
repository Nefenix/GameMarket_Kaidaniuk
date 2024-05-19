//console.log("Перевірка підключення файлу скриптів js");
let itemsArray = [
   {
    firstName: "Віталій",
    lastName: "Шатківський",
    age: 43,
    subject: "CS",
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
    url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
   },
   {
    firstName: "Наталія",
    lastName: "Венцель",
    age: 18,
    subject: "Адміністрація",
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
    url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
   },
   {
    firstName: "Наталія",
    lastName: "Кучер",
    age: 18,
    subject: "Фізика",
    photo: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
   },
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