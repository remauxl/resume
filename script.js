const words = ["ls", "cd /home/yasin", "Yasin Saymaz"];
let len = words.length;
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      len--;
      if (len == 0) {
        return;
      }
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();

