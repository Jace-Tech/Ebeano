const sideBar = selector("#side-bar")
const closeBtn = selector("#close-side")
const burger = selector("#burger")


burger.addEventListener("click", () => {
    sideBar.classList.add("active")
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("active")
});