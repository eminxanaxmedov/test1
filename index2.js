function requestAction() {
    // Запрашиваем у пользователя операцию
    const action = prompt("Какую операцию хотите выполнить? (дата, время, день недели)");

    // Получаем текущую дату
    const now = new Date();
    
    switch (action.toLowerCase()) {
        case "дата":
            // Выводим сегодняшнюю дату
            alert(now.toLocaleDateString());
            break;
        case "время":
            // Выводим текущее время
            alert(now.toLocaleTimeString());
            break;
        case "день недели":
            // Выводим день недели
            const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
            alert(daysOfWeek[now.getDay()]);
            break;
        default:
            alert("Некорректный ввод. Пожалуйста, введите 'дата', 'время' или 'день недели'.");
    }
}

// Вызываем функцию
requestAction();
