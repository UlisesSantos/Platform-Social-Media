const btnUploadImage = document.getElementById("upload-img-profile");

btnUploadImage.addEventListener("click", function () {
  OpenFileSelector();
});

function OpenFileSelector() {
  const input = document.createElement("input");
  input.type = "file";

  input.style.display = "none";

  input.click();

  input.onchange = function () {
    document.body.removeChild(input);
  };
}
