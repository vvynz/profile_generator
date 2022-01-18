const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = "";
let activity = "";
let music = "";
let meal = "";
let favFood = "";
let sport = "";
let superpower = "";

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  name = answer;

  rl.question("What's an activity you like doing?", (answer) => {
    activity = answer;

    rl.question("What do you listen to while doing that?", (answer) => {
      music = answer;

      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (answer) => {
          meal = answer;

          rl.question(
            "What's your favourite thing to eat for that meal?",
            (answer) => {
              favFood = answer;

              rl.question(
                "Which sport is your absolute favourite?",
                (answer) => {
                  sport = answer;

                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (answer) => {
                      superpower = answer;

                      console.log(
                        `Thank you for your valuable feedback! ${name} likes ${activity} while listening to ${music}. Your favourite meal of the day is ${meal} and your favourite food is ${favFood}! You love ${sport} and your superpower is ${superpower}!!`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});

// console.log(
//   `Thank you for your valuable feedback! ${name} likes ${activity} while listening to ${music}. Your favourite meal of the day is ${meal} and your favourite food is ${favFood}`
// );
// rl.close();
