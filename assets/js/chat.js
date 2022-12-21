
// Получаем элементы HTML
const chatContainer = document.querySelector('.d-flex.flex-column.align-items-md-center.justify-content-lg-center.align-items-xxl-center');
const chatWindow = chatContainer.querySelector('.d-flex.flex-column.align-items-md-center.justify-content-lg-center.align-items-xxl-center > div:first-child');
const chatInput = chatContainer.querySelector('input[type="text"]');
const chatButton = chatContainer.querySelector('img.ms-auto');

// Функция, которая добавляет сообщение в чат-окно
function addMessageToChat(message) {
  // создаем новый элемент div для сообщения
  const newMessage = document.createElement('div');
  // добавляем сообщение в текстовый контент нового элемента
    newMessage.textContent = message;
    // размер шрифта 14px
    newMessage.style.fontSize = '14px';
    // при отправке сообщения в chatWindow добавляем messageContainer, в котором будет находиться аватарка и контейнер с никнеймом и сообщением
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('d-flex', 'flex-row', 'align-items-center', 'mb-3');
    const messageSmallContainer = document.createElement('div');
    messageSmallContainer.classList.add('d-flex', 'flex-column',);
    const avatar = document.createElement('img');
    avatar.classList.add('rounded-circle', 'me-2',);
    // размер аватарки 50х50
    avatar.width = 50;
    avatar.height = 50;
    // аватарка Rectangle 103.png, которая лежит в папке img в корне проекта
    avatar.src = 'assets/img/Rectangle 103.png';
    avatar.alt = 'avatar';
    const nickname = document.createElement('div');
    nickname.classList.add('fw-bold', 'me-2');
    nickname.textContent = 'вася97541';

    messageSmallContainer.append(nickname, newMessage);
    messageContainer.append(avatar, messageSmallContainer);
    // добавляем новый элемент в конец чат-окна
    chatWindow.append(messageContainer);
    
}

// Функция, которая обрабатывает нажатие на кнопку отправки сообщения
function onChatButtonClick() {
    // получаем значение из поля ввода
    const message = chatInput.value;
    // добавляем сообщение в чат-окно
    addMessageToChat(message);
    // очищаем поле ввода
    chatInput.value = '';
    }

// Функция, которая обрабатывает нажатие на клавишу Enter в поле ввода
function onChatInputKeyPress(event) {
    // проверяем, была ли нажата клавиша Enter
    if (event.key === 'Enter') {
        // получаем значение из поля ввода
        const message = chatInput.value;
        // добавляем сообщение в чат-окно
        addMessageToChat(message);
        // очищаем поле ввода
        chatInput.value = '';
    }
}

// Добавляем обработчик события click на кнопку отправки сообщения
chatButton.addEventListener('click', onChatButtonClick);
// Добавляем обработчик события keypress на поле ввода
chatInput.addEventListener('keypress', onChatInputKeyPress);


