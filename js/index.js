const categoryMenu = selectors(".e-dropdown-menu")
const categoryBtn = selectors(".e-dropdown")

const slideRightScroll = selectors(".scroll-right")
const slideLeftScroll = selectors(".scroll-left")

const modals = selectors(".e-modal")

const signUpModal = selector("#sign-up-modal")
const signUp = selector("#sign-up")

const sectionBtns = selectors(".section-tab")
const sectionMenus = selectors(".section-tab-menu")
// const sectionSubBtns = selectors(".section-sub-tab")
// const sectionSubMenus = selectors(".section-tab-sub-menu")

// const switchTabs = (tabArray, menuArray, index) => {
//     tabArray.forEach((item, tabIndex) => {
//         if(item.classList.contains('active')){
//             item.classList.remove('active')
//         }

//         if(tabIndex == index){
//             item.classList.add('active')
//         }
//     })

//     menuArray.forEach((item, menuIndex) => {
//         if(item.classList.contains('active')){
//             item.classList.remove('active')
//         }

//         if(menuIndex == index){
//             item.classList.add('active')
//         }
//     })
// }

// switchTabs(sectionBtns, sectionMenus, 0)

// sectionBtns.forEach((btn, index, array) => {
//     btn.addEventListener("click", e => {
//         e.preventDefault()

//         switchTabs(array, sectionMenus, index)
//     })
// });


// sectionSubBtns.forEach((btn, index, array) => {
//     btn.addEventListener("click", e => {

//         e.preventDefault()

//         // switchTabs(array, sectionSubMenus, index)
//     })
// });


const slideLeft = event => {
    const parent = event.target.parentNode.getBoundingClientRect()
    console.log(parent)
}
let currentX = 0
const slideRight = event => {
    const parent = event.target.parentNode
    const parentRect = event.target.parentNode.getBoundingClientRect()
}


slideLeftScroll.forEach(btn => {
    btn.addEventListener("click", slideLeft)
})

slideRightScroll.forEach(btn => {
    btn.addEventListener("click", slideRight)
})

categoryBtn.forEach((btn, index) => {
    btn.addEventListener("click", e => {
        e.stopPropagation()
        categoryBtn[index].classList.toggle('active')
        categoryMenu[index].classList.toggle('active')
    })
})

categoryMenu.forEach(menu => {
    menu.addEventListener("click", e => {
        e.stopPropagation()
    })
})

signUp.addEventListener("click", e => {
    e.preventDefault()
    signUpModal.classList.add("active")
})

modals.forEach(modal => {
    modal.addEventListener("click", () => {
        if(modal.classList.contains("active")){
            modal.classList.remove("active")
        }
    })
});

window.addEventListener('click', () => {
    categoryBtn.forEach(btn => {
        if(btn.classList.contains('active')){
            btn.classList.remove("active")
            categoryMenu.forEach(menu => menu.classList.remove("active"))
        }
    })

})
