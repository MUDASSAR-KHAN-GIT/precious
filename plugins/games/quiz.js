const questions = [
  { q: "What is the capital of Pakistan?", a: "Islamabad" },
  { q: "Who painted the Mona Lisa?", a: "Da Vinci" },
  { q: "What is the largest ocean?", a: "Pacific" }
]
let currentQuiz = {}

module.exports = {
  name: 'quiz',
  alias: [],
  category: 'games',
  reactEmoji: '❓',
  async execute(sock, msg, { from, sender }) {
    const q = questions[Math.floor(Math.random() * questions.length)]
    currentQuiz[sender] = { question: q.q, answer: q.a }
    await sock.sendMessage(from, { text: `❓ *Quiz:* ${q.q}\nReply with your answer.` }, { quoted: msg })
    // Wait for answer (simplified – real would need a message collector)
  }
}