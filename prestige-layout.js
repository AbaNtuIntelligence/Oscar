// layout.js – initialises sidebar toggling and saves state
(function() {
    // Ensure the script runs after DOM is fully loaded
    function initLayout() {
        const hamburger = document.getElementById('hamburgerBtn');
        const sidebar = document.getElementById('prestigeSidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const closeBtn = document.getElementById('closeSidebar');

        // If any required element is missing, abort (page might not have layout)
        if (!hamburger || !sidebar || !overlay || !closeBtn) return;

        const STORAGE_KEY = 'prestige_sidebar_open';

        function openSidebar() {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            localStorage.setItem(STORAGE_KEY, 'true');
        }

        function closeSidebar() {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            localStorage.setItem(STORAGE_KEY, 'false');
        }

        function toggleSidebar() {
            if (sidebar.classList.contains('open')) closeSidebar();
            else openSidebar();
        }

        // Restore state
        if (localStorage.getItem(STORAGE_KEY) === 'true') openSidebar();
        else closeSidebar();

        // Remove any previous listeners to avoid duplicates, then add new ones
        hamburger.removeEventListener('click', toggleSidebar);
        closeBtn.removeEventListener('click', closeSidebar);
        overlay.removeEventListener('click', closeSidebar);

        hamburger.addEventListener('click', toggleSidebar);
        closeBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLayout);
    } else {
        initLayout();
    }
})();