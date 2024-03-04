let sendBtn = document.getElementById('sendBtn');
let textBox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');

const user = {message: ""};

const arrayOfPossibleMessages = [
    {message: 'hi', response: 'Hello, how can I help you?'},
    {message: 'how are you', response: 'I am fine thankyou. How can I help you?'},
    {message: 'what is your name', response: 'My name is Chatbot. How can I help you?'},
    {message: 'what is your age', response: 'I am a chatbot, I do not have an age. How can I help you?'},
    {message: 'what is your purpose', response: 'I am here to help you with any questions you have. How can I help you?'},
    {message: "what's your name", response: 'My name is Chatbot. How can I help you?'},
    {message: 'what is the weather', response: 'I am sorry, I do not have that information. How can I help you?'},
    {message: 'where do you live', response: 'In the world wide web. How can I help you?'},
    {message: 'what is your favorite color', response: 'I am a chatbot, I do not have a favorite color. How can I help you?'},
    {message: 'what is your favorite food', response: 'I am a chatbot, I do not have a favorite food. How can I help you?'},
];

function sendMessage(userMessage) {
 const messageElement = document.createElement('div');
 messageElement.style.textAlign = 'right';
 messageElement.style.margin = '10px';
 messageElement.innerHTML = "<span> You: </span>" +
                            "<span>" + userMessage + "</span>";
chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessage) {
    let chatbotMessage = '';

    if(userMessage.length > 5 || userMessage === 'hi') {
        let result = arrayOfPossibleMessages.filter(msg => msg.message.includes(userMessage.toLowerCase()));
           if(result.length > 0) {
           let response = result[0].response;
           chatbotMessage = response;
           } else {
            chatbotMessage = 'I am sorry, I do not understand that. Please ask me something else.';
        }           
    } else {
        chatbotMessage = 'I am sorry, I do not understand that. Please ask me something else.';
    }

    const messageElement = document.createElement('div');
    messageElement.style.textAlign = 'left';
    messageElement.style.margin = '10px';
    messageElement.innerHTML = "<span> Chatbot: </span>" +
                            "<span>" + chatbotMessage + "</span>";

    setTimeout(() => {
    messageElement.animate([{easing: 'ease-in', opacity: 0.4}, {opacity: 1}], {duration: 1000, fill: 'forwards'});    
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000);                                                  
}

sendBtn.addEventListener('click', (e) => {
    let userMessage = textBox.value;
    if(userMessage === '') {
        alert('Please enter a message');
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textBox.value = '';
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
        console.log(user);
    }

});