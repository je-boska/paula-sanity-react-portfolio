export const fadeIn = () => {
  let elements
  let windowHeight

  const init = () => {
    elements = document.querySelectorAll('.to-fade')
    windowHeight = window.innerHeight / 1.2
  }
  const checkPosition = () => {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i]
      let positionFromTop = elements[i].getBoundingClientRect().top

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element')
        element.classList.remove('to-fade')
      }
    }
  }

  window.addEventListener('scroll', checkPosition)
  window.addEventListener('resize', init)

  init()
  checkPosition()
}
