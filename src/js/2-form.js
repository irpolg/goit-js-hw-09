const LOCAL_KEY = "feedback-form-stage"; //new
const form = document.querySelector(".feedback-form"); //new

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", onTextInput); //new
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
  console.log("handleSubmit :", event);
  console.log("Ваше повідомлення відправлено");
  localStorage.removeItem(LOCAL_KEY); //new
  event.currentTarget.reset();
}



// const LOCAL_KEY_EMAIL = "feedback-form-email";
// const LOCAL_KEY_MSG   = "feedback-form-msg";
// const inputEmail   = document.querySelector(".form-email");
// const inputMessage = document.querySelector("textarea");
// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", handleSubmit);
// inputEmail.addEventListener("input", onEmailInput);
// reload();

// inputMessage.addEventListener("input", onMessageInput);
// reload();

// //Отримуємо значення поля. Зберігаємо його в сховищі
// function onEmailInput(event) {
//     const emailText = event.target.value;
//     localStorage.setItem(LOCAL_KEY_EMAIL, emailText);
// }

// //Отримуємо значення поля. Зберігаємо його в сховищі
// function onMessageInput(event) {
//     const messageText = event.target.value;
//     localStorage.setItem(LOCAL_KEY_MSG, messageText);
// } 

// //Отримуємо дані зі сховища. Якщо там щось було, то оновлюємо DOM 
// //значення зі сховища з'являються в полях на екрані форми
// function reload() {
//     const savedEmail = localStorage.getItem(LOCAL_KEY_EMAIL);
//     if (savedEmail) {
//         inputEmail.value = savedEmail;
//     }
//         const savedMessage = localStorage.getItem(LOCAL_KEY_MSG);
//     if (savedMessage) {
//         inputMessage.value = savedMessage;
//     }
// }

// //Відправляємо форму та видаляємо ключі з localStorage
// function handleSubmit(event) {
//     event.preventDefault();
//     console.log("handleSubmit :", event);
//     console.log("Ваше повідомлення відправлено");
//     localStorage.removeItem(LOCAL_KEY_EMAIL);
//     localStorage.removeItem(LOCAL_KEY_MSG);
//     event.currentTarget.reset();
// }