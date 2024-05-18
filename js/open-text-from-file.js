function openTextFromFile(fileInput) {
  const reader = new FileReader();

  reader.onload = function (e) {
    const fileContent = e.target.result;
    const fileName = fileInput.files[0].name;

    const mainInputTextarea = document.getElementById(
      "input-container-textaria-main"
    );

    mainInputTextarea.value = fileContent ? fileContent.toString() : "";

    mainInputTextarea.placeholder = fileName || "";
  };

  reader.onerror = function (error) {
    console.log("Error occurred reading the file:", error);
  };

  reader.readAsText(fileInput.files[0]);
}
