function openTextFromFile() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".md";
  fileInput.addEventListener("change", handleFileInput);
  fileInput.click();

  function handleFileInput(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = handleFileLoaded;
    reader.readAsText(file);
  }

  function handleFileLoaded(event) {
    const textFromLoadedFile = event.target.result;

    const textareaElement = document.getElementById(
      "input-container-textaria-main"
    );
    textareaElement.value = textFromLoadedFile;
  }
}
