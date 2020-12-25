export const hideHeader = el => {
  let prevScrollPos = window.pageYOffset
  let header = document.querySelector(el)
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (prevScrollPos > currentScrollPos) {
      header.style.top = '0'
    } else {
      header.style.top = '-90px'
    }
    prevScrollPos = currentScrollPos
  }
}
