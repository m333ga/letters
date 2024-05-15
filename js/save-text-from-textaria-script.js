// function saveAsMD() {
//   const file_name = document.getElementById("file-name-input").value;

//   const text_from_main_page = document.getElementById(
//     "input-container-textaria-main"
//   ).value;
//   const blob = new Blob([text_from_main_page], { type: "text_from_main_page/markdown" });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "3.md";
//   document.body.appendChild(a);
//   a.click();
//   window.URL.revokeObjectURL(url);
// }

function saveAsMD() {
  const text = document.getElementById("input-container-textaria-main").value;
  const blob = new Blob([text], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "saved_text.md";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}
