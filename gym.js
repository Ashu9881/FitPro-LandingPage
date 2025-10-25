const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chatbox');
const chatClose = document.getElementById('chat-close');
const chatSend = document.getElementById('chat-send');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatBtn.addEventListener('click', () => {
  chatBox.style.display = 'flex';
});

chatClose.addEventListener('click', () => {
  chatBox.style.display = 'none';
});

chatSend.addEventListener('click', () => {
  const msg = chatInput.value.trim();
  if(msg === '') return;

  const userMsg = document.createElement('p');
  userMsg.classList.add('user');
  userMsg.textContent = msg;
  chatMessages.appendChild(userMsg);

  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatInput.value = '';

  setTimeout(() => {
    const botMsg = document.createElement('p');
    botMsg.classList.add('bot');
    botMsg.textContent = 'Thank you for reaching out! Our support team will contact you shortly.';
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 800);
});

chatInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') chatSend.click();
});

