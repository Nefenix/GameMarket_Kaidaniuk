//console.log("Перевірка підключення файлу скриптів js");
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумулятивний оприскувач 12 N',
    'Газонокосарка 430',
    'Електричний тример 130',
    'Електрична газонокосарка 320',
    'Акумулятивний оприскувач 12 E ',
]

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    itemsArray.forEach((items)=>{
        itemsDiv.innerText += `<div class = "items">${items}</div>`
    })
} 
else {
    console.log('Блок товарів не знайдено')
}


//itemsArray = itemsArray.sort()

//for (let i = 0; i < itemsArray.length; i++){
 //   console.log(i + '-й елемент: ',itemsArray[i])
//}