let todos = [];
let nextId = 1;

function addTask(text) {
    const newTask = {
        id: nextId++,
        text: text,
        done: true
    };
    todos.push(newTask);
}

function show(todos) {
    todos.forEach((userData) => {
        let status;
        if (userData.done) {
            status = "✅";
        } else {
            status = "⬜";
        }
        console.log(`${status} ${userData.text}`);
    });
}

function toggleDone(id) {
    const task = todos.find((todo) => todo.id === id);
    if (task) {
        task.done = !task.done;
    }
}

function removeTask(id) {
    todos = todos.filter((todo) => todo.id !== id);
}

function showActive(todos) {
    const active = todos.filter((todo) => todo.done !== true);
    show(active);
}

function showDone(todos) {
    const done = todos.filter((todo) => todo.done === true);
    show(done);
}

function getStats(todos) {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    const activeCount = todos.filter((todo) => !todo.done).length;
    return {
        total: totalCount,
        done: doneCount,
        active: activeCount
    };
}

function findTask(text) {
    const found = todos.filter((todo) => todo.text.includes(text));
    show(found);
}

addTask("Купить хлеб");
addTask("Купить молоко");
addTask("Позвонить маме");
addTask("Сделать зарядку");

console.log("=== Все задачи ===");
show(todos);

console.log("=== Активные ===");
showActive(todos);

console.log("=== Выполненные ===");
showDone(todos);

console.log("=== Статистика ===");
console.log(getStats(todos));

console.log("=== Поиск: Купить ===");
findTask("Купить");

console.log("=== Переключаю id=2 ===");
toggleDone(2);
show(todos);

console.log("=== Удаляю id=1 ===");
removeTask(1);
show(todos);
