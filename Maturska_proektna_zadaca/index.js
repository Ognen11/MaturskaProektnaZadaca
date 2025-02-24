window.addEventListener('scroll', function() {
    var header = document.querySelector('.NavigationBar');
    
    // Check if the scroll position is greater than 50px (adjust this value as needed)
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });