document
  .getElementById("file-name-input")
  .addEventListener("input", function () {
    const value = this.value.trim();
    const title = value ? "letters - " + value : "letters - New File";
    document.title = title;
  });

