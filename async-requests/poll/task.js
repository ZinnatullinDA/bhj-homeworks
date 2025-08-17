const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function loadPoll() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const poll = JSON.parse(xhr.responseText);
      renderPoll(poll);
    }
  });
  xhr.send();
}

function renderPoll(poll) {
  pollTitle.textContent = poll.data.title;
  pollAnswers.innerHTML = '';

  poll.data.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'poll__answer';
    btn.textContent = answer;
    btn.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
      sendVote(poll.id, index);
    });
    pollAnswers.appendChild(btn);
  });
}

function sendVote(pollId, answerIndex) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      loadPoll();
    }
  });
  xhr.send(`vote=${pollId}&answer=${answerIndex}`);
}

loadPoll();
