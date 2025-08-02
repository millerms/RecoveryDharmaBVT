// Buddhist quotes for cycling in the quote box
const rdQuotes = [
  {
    text: "You are not the darkness you endured. You are the light that refused to surrender.",
    author: "John Mark Green"
  },
  {
    text: "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    author: "The Buddha"
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "The Buddha"
  },
  {
    text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "The Buddha"
  },
  {
    text: "Let go of what has passed. Let go of what may come. Let go of what is happening now.",
    author: "Ajahn Chah"
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "The Buddha"
  },
  {
    text: "If you light a lamp for someone else, it will also brighten your path.",
    author: "The Buddha"
  },
  {
    text: "Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened.",
    author: "The Buddha"
  },
  {
    text: "To understand everything is to forgive everything.",
    author: "The Buddha"
  },
  {
    text: "Better than a thousand hollow words, is one word that brings peace.",
    author: "The Buddha"
  },
  {
    text: "If your compassion does not include yourself, it is incomplete.",
    author: "Jack Kornfield"
  },
  {
    text: "The root of suffering is attachment.",
    author: "The Buddha"
  },
  {
    text: "Be where you are; otherwise you will miss your life.",
    author: "Jack Kornfield"
  },
  {
    text: "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
    author: "The Buddha"
  },
  {
    text: "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
    author: "The Buddha"
  },
  {
    text: "Awareness is the greatest agent for change.",
    author: "Eckhart Tolle"
  },
  {
    text: "Meditate. Live purely. Be quiet. Do your work with mastery. Like the moon, come out from behind the clouds! Shine.",
    author: "The Buddha"
  },
  {
    text: "The trouble is, you think you have time.",
    author: "Jack Kornfield (attributed to the Buddha)"
  },
  {
    text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "The Buddha"
  },
  {
    text: "May all beings be happy; may all beings be without disease.",
    author: "Metta Sutta"
  }
];

function cycleRDQuotes() {
  const box = document.getElementById('rd-quote-box');
  if (!box) return;
  let idx = Math.floor(Math.random() * rdQuotes.length);
  function showQuote(i) {
    box.innerHTML = `<em>“${rdQuotes[i].text}”</em><br>— ${rdQuotes[i].author}`;
  }
  showQuote(idx);
  setInterval(() => {
    idx = (idx + 1) % rdQuotes.length;
    showQuote(idx);
  }, 60000);
}

document.addEventListener('DOMContentLoaded', cycleRDQuotes);
