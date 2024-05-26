function saveTextFile() {
  const fileNameInput = document.getElementById("file-name-input");
  const mainInputTextarea = document.getElementById(
    "input-container-textaria-main"
  );

  const fileName = fileNameInput.value || "text";
  const textFromMainInput = mainInputTextarea.value;

  const textAsBlob = new Blob([textFromMainInput], { type: "text/markdown" });

  const linkToSave = document.createElement("a");
  linkToSave.download = fileName + ".md";
  linkToSave.href = window.URL.createObjectURL(textAsBlob);
  linkToSave.style.display = "none";

  document.body.appendChild(linkToSave);
  linkToSave.click();
  document.body.removeChild(linkToSave);

  console.log(
    "fileName: " +
      '"' +
      fileName +
      '"' +
      " | textFromMainInput: " +
      '"' +
      textFromMainInput +
      '"'
  );
}

document.addEventListener("keydown", function (event) {
  if (event.altKeyKey && event.key == "S" || event.key == "Ы") {
    saveTextFile();
  }
});
