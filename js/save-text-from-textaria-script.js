function saveTextFile() {
  const fileName = document.getElementById("file-name-input").value;

  const textFromMainInput = document.getElementById(
    "input-container-textaria-main"
  ).value;

  const fileNameAsBlob = new Blob([fileName], { type: "text/plain" });
  const textAsBlob = new Blob([textFromMainInput], { type: "text/plain" });
  const linkToSave = document.createElement("a");

  // download file
  linkToSave.download = fileNameAsBlob + ".md";
  linkToSave.href = window.URL.createObjectURL(textAsBlob);
  linkToSave.style.display = "none";
  document.body.appendChild(linkToSave);
  link.click();
  document.body.removeChild(linkToSave);

  console.log(fileName + " " + textFromMainInput);
}
