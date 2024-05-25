
  
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default jump

      const targetSection = document.querySelector(link.getAttribute('href'));

      // Optional parameters for smoother scrolling:
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Start section at top of viewport
        inline: 'center' // Center section horizontally
      });
    });
  });

    document.getElementById('contactLink').addEventListener('mouseover', function() {
      document.getElementById('popup').style.display = 'block';
  });

  document.getElementById('contactLink').addEventListener('mouseout', function() {
      document.getElementById('popup').style.display = 'none';
  });

  function showContactInfo(){
    document.getElementById('contactinfo').style.display = 'block';
  }

  function hideContactInfo(){
    document.getElementById('contactinfo').style.display = 'none';
  }
