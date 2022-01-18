const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = "";
let activity = "";
let music = "";

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  name = answer;

  rl.question("What's an activity you like doing?", (answer) => {
    activity = answer;

    rl.question("What do you listen to while doing that?", (answer) => {
      music = answer;
      console.log(
        `Thank you for your valuable feedback! ${name} likes ${activity} while listening to ${music}.`
      );
      rl.close();
    });
  });
});
