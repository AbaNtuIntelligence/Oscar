    // Full-screen navigation toggle
    const toggleBtn = document.getElementById('toggleNavBtn');
    const fullscreenNav = document.getElementById('fullscreenNav');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const exploreBtn = document.getElementById('exploreBtn');

    function openNav() {
      fullscreenNav.classList.add('open');
      toggleBtn.innerHTML = '<i class="fas fa-times text-base sm:text-xl"></i><span class="text-xs sm:text-sm tracking-wider">CLOSE</span>';
    }
    function closeNav() {
      fullscreenNav.classList.remove('open');
      toggleBtn.innerHTML = '<i class="fas fa-bars text-base sm:text-xl"></i><span class="text-xs sm:text-sm tracking-wider">MENU</span>';
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (fullscreenNav.classList.contains('open')) closeNav();
      else openNav();
    });
    closeNavBtn.addEventListener('click', closeNav);

    // Close nav when any link inside is clicked (optional)
    document.querySelectorAll('#fullscreenNav a').forEach(link => {
      link.addEventListener('click', closeNav);
    });