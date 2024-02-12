document.querySelectorAll('.emoji').forEach(emoji => {
  emoji.addEventListener('click', function() {
    const mood = this.dataset.mood;
    let suggestion = '';

    switch (mood) {
      case 'happy':
        suggestion = 'That\'s great! Keep spreading positivity.';
        break;
      case 'sad':
        suggestion = 'It\'s okay to feel sad. Here\'s a virtual hug for you. 🤗';
        break;
      case 'anxious':
        suggestion = 'Take deep breaths. Everything is going to be okay.';
        break;
      case 'neutral':
        suggestion = 'It\'s a neutral day. Maybe try something new?';
        break;
    }

    document.getElementById('suggestionText').textContent = suggestion;
    document.getElementById('popup').classList.add('show');
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});
