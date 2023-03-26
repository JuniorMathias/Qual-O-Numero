const openModalBtutton = document.querySelector("#open-modal");
const closeModalBtutton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}
//evento click
[openModalBtutton,closeModalBtutton].forEach((e) => {
    e.addEventListener("click",() => toggleModal());
});