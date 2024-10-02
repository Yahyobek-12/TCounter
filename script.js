const inputField = document.querySelector('input');
const button = document.querySelector('button');
const resultDisplay = document.querySelector('b');

button.addEventListener('click', () => {
    let inputText = inputField.value.trim(); // Trim whitespace
    let lengthOfInput = inputText.length;

    if (lengthOfInput === 0) {
        resultDisplay.textContent = "Iltimos nimadir yozing..."; // Display a message if the input is empty
    } else {
        console.log(lengthOfInput);
        resultDisplay.textContent = `Sizning textingiz ${lengthOfInput} ta harf "yoki" belgi dan iborat`; // Display the length of the input
    }

    inputField.value = ''
});
