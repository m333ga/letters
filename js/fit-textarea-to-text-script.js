function fitTextareaToText() {
  const textarea = document.getElementById("input-container-textaria-main");
  textarea.style.height = "0px";
  textarea.style.height = textarea.scrollHeight + 25 + "px";
}
