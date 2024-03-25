// Завдання 2 - Форма зворотного зв'язку
// Виконуй це завдання у файлах 2-form.html і 2-form.js.
// Додай у HTML розмітку форми.У JS напиши скрипт,
//     який буде зберігати значення полів у локальне сховище,
//     коли користувач щось друкує.

const LOCAL_KEY = "feedback-form-state"; 
const form = document.querySelector(".feedback-form"); 

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", onTextInput); 
reload();

//Отримуємо значення поля. Зберігаємо його в сховищі
function onTextInput(event) {
  let savedInput = localStorage.getItem(LOCAL_KEY);
  savedInput = savedInput ? JSON.parse(savedInput) : {};
  let { email, message } = form.elements;
  savedInput = {
    email: email.value.trim(),
    message: message.value.trim(),
  }
    const emailText = event.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(savedInput));
}

//Отримуємо дані зі сховища. Якщо там щось було, то оновлюємо DOM 
//значення зі сховища з'являються в полях на екрані форми
function reload() {
  let savedInput = localStorage.getItem(LOCAL_KEY);
  if (savedInput) {
    savedInput = JSON.parse(savedInput);
    Object.entries(savedInput).forEach(([name, value]) => {
      form.elements[name].value = value ?? '';
    })
  }
}

//Відправляємо форму та видаляємо ключі з localStorage
function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements; // new
  console.log({ email: email.value, message: message.value }); //new
  // console.log("handleSubmit :", event);
  // console.log("Ваше повідомлення відправлено");
  localStorage.removeItem(LOCAL_KEY); //new
  event.currentTarget.reset();
}