const questions = [
  "Kas tā pa valsiti?",
  "Kas tā pa planētu?",
  "Kā sauc šo dzīvnieku?",
  "Kura ir pirmā planēta no saules?",
  "Kā sauc šo ziedu?",
  "Kā sauc šo augli?",
  "Kas ši pa valsti?",
  "Kā sauc šo dzīvnieku?",
  "Kas ir šis par kontinetu?",
  "Kas ir ši krāsa?",
];

const answers = [
  "Latvija",
  "Zeme",
  "Vanags",
  "Merkurs",
  "ceriņš",
  "Granātābols",
  "Mongolija",
  "Kaķis",
  "Āzija",
  "Zila",
];

const incorrect = [
  ["Igaunija", "Lietuva", "Zviedrija"],
  ["Jupiter", "Saturns", "Urans"],
  ["Suns", "Zirgs", "Vāvere"],
  ["Zeme", "Mars", "Venēra"],
  ["Lilija", "Tulpes", "Rozes"],
  ["Ābols", "Bumbieris", "Banāns"],
  ["Krievija", "Kazahstāna", "Ukraina"],
  ["Koala", "Lācis", "Suns"],
  ["Eiropa", "Austrālija", "Z-Amerika"],
  ["Sarkana", "Dzeltena", "Zaļa"],
];

const img = [
  "img/1.webp",
  "img/2.webp",
  "img/3.webp",
  "img/4.webp",
  "img/5.webp",
  "img/6.webp",
  "img/7.webp",
  "img/8.webp",
  "img/9.webp",
  "img/10.webp",
];

const options = ["A", "B", "C", "D"];

document.getElementById("scor").style.display = "none";

var cor = 0;
var incor = 0;
var i = 0;
var a = Math.floor(Math.random() * 4);

function setOptions() {
  document.getElementById("img").style.display = "flex";
  document.getElementById("img").src = img[i];

  for (let x in options) {
    document.getElementById(options[x]).style.color = "#cdd6f4";
    document.getElementById(options[x]).style.backgroundColor = "#1e1e2e";
    document.getElementById(options[x]).innerHTML = "ABC";
  }

  document.getElementById("Q").innerHTML = questions[i];
  document.getElementById(options[a]).innerHTML = answers[i];

  let incIndex = 0;
  for (let x in options) {
    if (document.getElementById(options[x]).innerHTML == "ABC") {
      document.getElementById(options[x]).innerHTML = incorrect[i][incIndex];
      incIndex++;
    }
  }
}

setOptions();

function next() {
  if (i == 9) {
    final();
    return;
  }
  i++;
  a = Math.floor(Math.random() * 4);
  setOptions();
}

function final() {
  document.getElementById("Q").innerHTML = "Game over!";
  document.getElementById("ans").style.display = "none";
  document.getElementById("scor").style.display = "flex";
  document.getElementById("scor").innerHTML =
    "Correct: " + cor + " Incorrect: " + incor;
  document.getElementById("img").style.display = "none";
}

function check(button) {
  if (button.innerHTML == answers[i]) {
    cor++;
  } else {
    incor++;
  }

  for (let x in options) {
    if (document.getElementById(options[x]).innerHTML == answers[i]) {
      document.getElementById(options[x]).style.backgroundColor = "#a6e3a1";
      document.getElementById(options[x]).style.color = "#1e1e2e";
    } else {
      document.getElementById(options[x]).style.backgroundColor = "#f38ba8";
      document.getElementById(options[x]).style.color = "#1e1e2e";
    }
  }

  console.log("Correct: " + cor);
  console.log("Incorrect: " + incor);

  setTimeout(function() {
    next();
  }, 1000);
}

function reset() {
  cor = 0;
  incor = 0;
  i = 0;
  a = Math.floor(Math.random() * 4);
  document.getElementById("scor").style.display = "none";
  document.getElementById("ans").style.display = "flex";

  for (let x in options) {
    document.getElementById(options[x]).style.backgroundColor = "#1e1e2e";
    document.getElementById(options[x]).style.color = "#cdd6f4";
    document.getElementById(options[x]).style.display = "block";
  }
  setOptions();
}
