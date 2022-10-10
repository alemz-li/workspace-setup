const themeToggler = document.querySelector('.nav__theme-toggler')
const setupComponents = document.querySelector('.components')

// Animation
const showComponents = (entries) => {
  if (entries[0].isIntersecting) {
    const componentList = entries[0].target.querySelectorAll('.component__list')
    componentList.forEach((list) => list.classList.add('visible'))
  }
}

const observer = new IntersectionObserver(showComponents, {
  root: null,
  rootMargin: '-50px 0px',
  threshold: 0.1,
})

observer.observe(setupComponents)

// Theme
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('light-theme-variables')

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})
