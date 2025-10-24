const chatBtn = document.getElementById('chat-btn');
const chatBox = document.getElementById('chatbox');
const chatClose = document.getElementById('chat-close');
const chatSend = document.getElementById('chat-send');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Open chatbox
chatBtn.addEventListener('click', () => {
  chatBox.style.display = 'flex';
});

// Close chatbox
chatClose.addEventListener('click', () => {
  chatBox.style.display = 'none';
});

// Send message
chatSend.addEventListener('click', () => {
  const msg = chatInput.value.trim();
  if(msg === '') return;

  // User message
  const userMsg = document.createElement('p');
  userMsg.classList.add('user');
  userMsg.textContent = msg;
  chatMessages.appendChild(userMsg);

  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatInput.value = '';

  // Simulated bot response
  setTimeout(() => {
    const botMsg = document.createElement('p');
    botMsg.classList.add('bot');
    botMsg.textContent = 'Thank you for reaching out! Our support team will contact you shortly.';
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 800);
});

// Send on Enter key
chatInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') chatSend.click();
});
