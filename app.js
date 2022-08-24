const back = document.getElementById('back')
const openModals = document.getElementById('modals')
const closeModal = document.getElementById('closemodal')
const select = document.getElementById('select')
const thankscard = document.getElementById('thankscard')
const gotit = document.getElementById('gotit')
const bookmark = document.getElementById('bookmark')
let bookmarked = false;
back.addEventListener('click', () => {
    openModals.classList.add('show')
})

closeModal.addEventListener('click', () => {
    openModals.classList.remove('show')
})

select.addEventListener('click', () => {
    thankscard.classList.add('show')
})

gotit.addEventListener('click', () => {
    thankscard.classList.remove('show')
})

bookmark.addEventListener('click', () => {
    bookmarked = !bookmarked;
    bookmarked
    ? (bookmark.innerText = "Bookmarked")
    : (bookmark.innerText = "Bookmark" )
});





