// Buddhist quotes for cycling in the quote box
const rdQuotes = [
  { text: "You are not the darkness you endured. You are the light that refused to surrender.", author: "John Mark Green" },
  { text: "Peace comes from within. Do not seek it without.", author: "The Buddha" },
  { text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.", author: "The Buddha" },
  { text: "Let go of what has passed. Let go of what may come. Let go of what is happening now.", author: "Ajahn Chah" },
  { text: "If your compassion does not include yourself, it is incomplete.", author: "Jack Kornfield" },
  { text: "The root of suffering is attachment.", author: "The Buddha" },
  { text: "Be where you are; otherwise you will miss your life.", author: "Jack Kornfield" },
  { text: "Hatred does not cease by hatred, but only by love; this is the eternal rule.", author: "The Buddha" },
  { text: "When you realize how perfect everything is, you will tilt your head back and laugh at the sky.", author: "The Buddha" },
  { text: "Awareness is the greatest agent for change.", author: "Eckhart Tolle" },
  { text: "Meditate. Live purely. Be quiet. Do your work with mastery. Like the moon, come out from behind the clouds! Shine.", author: "The Buddha" },
  { text: "The trouble is, you think you have time.", author: "Jack Kornfield (attributed to the Buddha)" },
  { text: "Three things cannot be long hidden: the sun, the moon, and the truth.", author: "The Buddha" },
  { text: "May all beings be happy; may all beings be without disease.", author: "Metta Sutta" },
  { text: "Don’t move. Just die over and over. Don’t anticipate. Nothing can save you now, because you have only this moment.", author: "Shunryu Suzuki" },
  { text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", author: "Thich Nhat Hanh" },
  { text: "Only the present moment contains life.", author: "Thich Nhat Hanh" },
  { text: "Try to be mindful. And let things take their natural course. Then your mind will become still in any surroundings, like a clear forest pool.", author: "Ajahn Chah" },
  { text: "You can’t stop the waves, but you can learn to surf.", author: "Jon Kabat-Zinn" },
  { text: "Nothing ever goes away until it has taught us what we need to know.", author: "Pema Chödrön" },
  { text: "To understand everything is to forgive everything.", author: "The Buddha" },
  { text: "Each morning we are born again. What we do today is what matters most.", author: "The Buddha" },
  { text: "As you walk and eat and travel, be where you are. Otherwise you will miss most of your life.", author: "The Buddha" },
  { text: "Don’t believe everything you think.", author: "Allan Lokos" },
  { text: "Forgive others not because they deserve forgiveness, but because you deserve peace.", author: "The Buddha (attributed)" },
  { text: "Recovery is not a path back to what was, but a doorway into what is possible.", author: "Unknown (Recovery Dharma inspired)" },
  { text: "To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.", author: "Thich Nhat Hanh" },
  { text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", author: "Oprah Winfrey (used in Buddhist recovery talks)" },
  { text: "The mind is everything. What you think, you become.", author: "The Buddha" },
  { text: "Be patient with all that is unresolved in your heart, and try to love the questions themselves.", author: "Rainer Maria Rilke" }
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
