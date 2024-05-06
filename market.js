console.log("Перевірка підключення файлу скриптів js");

let itemsDiv = document.getElementById("items");

console.timeLog(itemsDiv)

if (itemsDiv){
    console.log(itemsDiv)
    console.log('Поле classlist: ', itemsDiv.classList)
    console.log('Поле id:', itemsDiv.id)
    console.log('Поле clientWidth:', itemsDiv.clientWidth)
    console.log('Поле innerHTML:', itemsDiv.innerHTML)
}else {
    console.log('Блок товарів не знайдено')
}