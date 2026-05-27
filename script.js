// Функция для добавления динамического контента (для тестирования)
function addDynamicContent() {
    const div = document.getElementById('dynamic-content');
    div.innerHTML = `
                <div class="test-case">
                    <h4>Динамически добавленные контакты:</h4>
                    <p>Добавленный телефон: <a href="tel:89111111111">8 (911) 111-11-11</a></p>
                    <p>Добавленный email: <a href="mailto:original@test.ru">original@test.ru</a></p>
                    <p>Текст с номером: 8-911-111-11-11</p>
                </div>
            `;
}