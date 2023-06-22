//Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.

function userName(name){
    alert(`Hello, ${name}`)
}

let name = prompt("Как Вас зовут", "Имя");
userName(name);