const trailerBtn  = document.querySelector(".trailer_button");
const closeModal = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector("video");
const videoLink = video.scroll;

function alternateModal() {
    modal.classList.toggle("opened");
}

trailerBtn.addEventListener("click", () => { 
    alternateModal();
    video.setAttribute("src" , videoLink);
});

closeModal.addEventListener("click", () => {
    alternateModal();
    video.setAttribute("src", "");
});