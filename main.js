const textElement = document.querySelector('.blinking-text');
setInterval(() => {
  textElement.style.opacity = textElement.style.opacity == '0' ? '1' : '0';
}, 500);