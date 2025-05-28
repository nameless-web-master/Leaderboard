import renderScore from './render';

const user = document.getElementById('user');
const score = document.getElementById('score');
const path = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PYBRgDanIQVARLMj9lqC/scores/';

export default class Api {
  static addScore = async () => {
    await fetch(
      path,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user.value,
          score: score.value,
        }),
      },
    );
    user.value = '';
    score.value = '';
  };

  static getScores = async () => {
    const result = await fetch(
      path,
    );
    const data = await result.json();
    renderScore(data.result);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  Api.getScores();
}
);