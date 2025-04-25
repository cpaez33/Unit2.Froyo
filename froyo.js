const userInputString = prompt(
  "Please enter some froyo flavors separated by commas."
);

const froyoFlavors = userInputString.split(",");

// console.log(froyoFlavors);

const flavors = {};

// for (let i = 0; i < froyoFlavors.length; i++) {
//   const flavor = froyoFlavors[i];
//   console.log(flavor);
//   if (flavors[flavor] === undefined) {
//     flavors[flavor] = 1;
//   } else {
//     flavors[flavor] += 1;
//   }
// }
// console.log(flavors);

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
