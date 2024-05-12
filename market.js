console.log("Перевірка підключення файлу скриптів js");

let itemsDiv = document.getElementById("items");

<<<<<<< HEAD
    console.log(itemsDiv)
=======
if (itemsDiv) {
    console.log(itemsDiv)
    for (let i = 0; i < 16; i++) {
        itemsDiv.innerHTML += `<div class = "item">${i + 1}</div>`
    }
    console.log('Поле classlist: ', itemsDiv.classList)
    console.log('Поле id:', itemsDiv.id)
    console.log('Поле clientWidth:', itemsDiv.clientWidth)
    console.log('Поле innerHTML:', itemsDiv.innerHTML)

    itemsDiv.innerText = 'Перший Програмно доданий текст'
    itemsDiv.innerText += 'Другий Програмно доданий текст'

    itemsDiv.innerText = `<h1>Відформатований HTML код</h1>`
} else {
    console.log('Блок товарів не знайдено')
}
>>>>>>> dc596f848b053ac778f2818d597458c5862cc051
