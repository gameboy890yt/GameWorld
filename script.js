function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff69b4', '#ffb6c1', '#ffd700', '#7fffd4', '#87cefa'];
    
    for (let i = 0; i < 200; i++) { // Увеличиваем количество конфетти
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * -100 + 'vh';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        
        confettiContainer.appendChild(confetti);
    }
}

createConfetti();
