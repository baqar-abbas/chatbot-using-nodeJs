let sendBtn = document.getElementById('sendBtn');
let textBox = document.getElementById('textbox');

const user = {message: ""};

sendBtn.addEventListener('click', (e) => {
    let userMessage = textBox.value;
    if(userMessage === '') {
        alert('Please enter a message');
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textBox.value = '';
        console.log(user);
    }

});