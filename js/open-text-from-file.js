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
    fitTextareaToText();
  }
}

function fitTextareaToText() {
  const textarea = document.getElementById("input-container-textaria-main");
  textarea.style.height = "0px";
  textarea.style.height = textarea.scrollHeight + 25 + "px";

  const textarea_container = document.getElementById("input-container");
  textarea_container.style.paddingBottom = 25 + "px";
}
