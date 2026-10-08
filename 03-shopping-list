let items = []

let nextId = 1

//Добавить товар
function addItem(name, price, quantity) {
    const newProduct = {
        id: nextId++,
        name: name,
        price: price,
        quantity: quantity,
    }
    items.push(newProduct)
}

//Удалить товар по id
function removeItem(id) {
    items = items.filter((item) => {
        return item.id !== id
    })
}

//Вывод продуктов
function showAll(items) {
    items.forEach(item => {
        const total = item.price * item.quantity
        console.log(`${item.id}. ${item.name} - ${item.price}₽ × ${item.quantity} = ${total}₽`)
    });
}

//Общая сумма
function getTotal(items) {
    const sum = items.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)
    return sum
}

//Самый дешевый товар
function getCheapest(items) {
    let cheapest = items[0]
    items.forEach(item => {
        if (item.price < cheapest.price) {
            cheapest = item
        }
    });
    return cheapest
}

//Самый дорогой товар
function getMostExpensive(items) {
    let mostExpensive = items[0]
    items.forEach(item => {
        if (item.price > mostExpensive.price) {
            mostExpensive = item
        }
    });
    return mostExpensive
}

//Поиск товара по ключевому слову
function findItem(text) {
    const found = items.filter((item) => {
        return item.name.includes(text)
    })
    return found
}

//Статистика
function getStats(items) {
    const totalItems = items.length
    const totalSum = getTotal(items)
    const averagePrice = totalSum / totalItems
        return {
            totalItems: totalItems,
            totalSum: totalSum,
            averagePrice: averagePrice,
        }
}

addItem("Хлеб", 50, 2);
addItem("Молоко", 80, 1);
addItem("Сыр", 300, 1);



