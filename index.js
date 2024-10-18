class Tag {
    constructor(element) {
      this.element = element;
    }
    addClass(classToAdd) {
      this.element.classList.add(classToAdd);
    }
    removeClass(classToRem) {
      this.element.classList.remove(classToRem);
    }
    toggleClass(classToToggle) {
      this.element.classList.toggle(classToToggle);
    }
  }
  
  //Navbar Toggle
  
  const navbarTag = new Tag(document.querySelector('[data-navbar]'));
  const navbarTogglers = new Tag(document.querySelectorAll('[data-nav-toggler]'));
  const overlay = new Tag(document.querySelector('[data-overlay]'));
  
  navbarTogglers.element.forEach((element) => {
    element.addEventListener('click', () => {
      navbarTag.toggleClass('active');
      overlay.toggleClass('active');
      document.body.classList.toggle('nav-active');
    });
  });
  //Header
  
  const headerTag = new Tag(document.querySelector('[data-header]'));
  window.addEventListener('scroll', () => {
    window.scrollY > 100
      ? headerTag.addClass('active')
      : headerTag.removeClass('active');
  });
  
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  const reveal = () => {
    revealElements.forEach((ele) => {
      ele.getBoundingClientRect().top < window.innerHeight
        ? ele.classList.add('reveal')
        : null;
    });
  };
  
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  