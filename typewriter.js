// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   process.stdout.write(char);
// }

// setTimeout(() => {
//   // print the char here
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.

const sentence = "one of the best movies for this summer is little mermaid";
let index = 0;
const delay = 50;

const printCharacterWithDelay = function() {
  if (index < sentence.length) {
    process.stdout.write(sentence[index] + "\n");
    index++;
    setTimeout(printCharacterWithDelay, delay * index);
  }
};

printCharacterWithDelay();


