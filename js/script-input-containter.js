// const textaria = document.querySelector(".input-container-textaria");

// textaria.addEventListener("input", function () {
//   let lines = textaria.value.split("\n");
//   // let maxlines = 54;
//   let maxlines = 4;

//   if (lines.lenght > maxlines) {
//     textaria.value = lines.slice(0, maxlines).join("\n");
//   }
// });

// script.js
const textarea = document.querySelector('#myTextarea');

textarea.addEventListener('input', function() {
    let lines = textarea.value.split('\n');
    let maxLines = 4; // Максимальное количество строк
    
    if (lines.length > maxLines) {
        textarea.value = lines.slice(0, maxLines).join('\n');
    }
});