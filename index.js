const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");

const uploadImage = () => {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imgView.style.backgroundImage = `url(${imgLink})`;
  imgView.textContent = "";
  imgView.style.border = "none";
};

inputFile.addEventListener("change", uploadImage);

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
