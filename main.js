/**
 * discord bot for the yld trivia channel
 */
const discord = require("discord.js");
const questions = require("./questions");

const client = new discord.Client();

let triviaChannel;
let currentQuestion;
const leaderboard = {};

function printLeaderboard() {
  const sortedLeaderboard = Object.values(leaderboard).sort(
    (a, b) => b.score - a.score
  );
  let strLeaderboard = `Current leaderboard:\n`;
  sortedLeaderboard.forEach(
    entry => (strLeaderboard += `${entry.name}: ${entry.score}\n`)
  );
  triviaChannel.send(strLeaderboard);
}

function pickQuestion(questions) {
  let index = Math.floor(Math.random() * questions.length);
  questions[index].asked = true;
  return questions[index];
}

function askQuestion() {
  const unansweredQuestions = questions.filter(
    question => question.asked === false
  );
  if (unansweredQuestions.length === 0) {
    questions.forEach(question => (question.asked = false));
  }
  currentQuestion = pickQuestion(unansweredQuestions);
  triviaChannel.send(currentQuestion.question);
}

client.on("ready", () => {
  triviaChannel = client.channels.find("name", "trivia");
  askQuestion();
});

client.on("message", msg => {
  if (msg.channel.name !== "trivia") return;

  if (msg.author.id === client.user.id) return;

  if (currentQuestion.answers.includes(msg.content.toLowerCase())) {
    msg.reply("congrats, you got it right!");
    if (leaderboard[msg.author.id] === undefined) {
      leaderboard[msg.author.id] = { name: msg.author.username, score: 10 };
    } else {
      leaderboard[msg.author.id].score += 10;
    }
    printLeaderboard();
    askQuestion();
  }
});

client.login(process.env.DISCORD_TOKEN);
