const mat = [
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "x",
    "w",
    "y",
    "z",
  ],
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "X",
    "W",
    "Y",
    "Z",
  ],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "+", "=", "<", ">"],
];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const choose_groups = [0, 3];

const numChar = 20;

let group;
let password = "";

for (let i = 1; i < numChar; i++) {
  group = randomIntFromInterval(0, 3);

  while (!choose_groups.includes(group)) {
    group = randomIntFromInterval(0, 3);
  }

  const charac_position = randomIntFromInterval(0, mat[group].length - 1);

  password = password + mat[group][charac_position];
}

console.log(password);
