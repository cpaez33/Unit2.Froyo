const userInput = prompt(
  "Please enter some froyo flavors separated by commas."
);

const froyoFlavors = userInput.split(",");

// console.log(froyoFlavors);

function countFroyoFrequencies(froyoFlavors) {
  const flavors = {};

  for (let i = 0; i < froyoFlavors.length; i++) {
    const flavor = froyoFlavors[i];
    // console.log(flavor);
    if (flavors[flavor] === undefined) {
      flavors[flavor] = 1;
    } else {
      flavors[flavor] += 1;
    }
  }
  return flavors;
}

console.log(countFroyoFrequencies(froyoFlavors));
