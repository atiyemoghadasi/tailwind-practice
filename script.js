

const sidebar = document.getElementById('sidebar'),
    sidebarOpenIcon = document.getElementById('sidebar-open-icon'),
    sidebarCloseIcon = document.getElementById('sidebar-close-icon'),
    overlay = document.getElementById('overlay');

function openSidebar() {
    sidebar.classlist.remove('hidden');
    sidebar.classlist.add('flex', 'absolute', 'z-50', 'flex-row-reverse');

    sidebarCloseIcon.classlist.remove('hidden');
    sidebarCloseIcon.classlist.add('flex');

    document.body.classlist.add('overflow-hidden')
    overlay.classlist.remove('hidden');
}

function closeSidebar() {
    sidebar.classlist.remove('absolute', 'z-50', 'flex', 'flex-row-reverse');
    sidebar.classlist.add('hidden');

    sidebarCloseIcon.classlist.add('hidden');
    sidebarCloseIcon.classlist.remove('flex');

    document.body.classList.remove('overflow-hidden')

    overlay.classList.add('hidden')
}

sidebarOpenIcon.addEventListener('click', () => openSidebar())
sidebarCloseIcon.addEventListener('click', () => closeSidebar())
overlay.addEventListener('click', () => closeSidebar())
window.addEventListener('resize', () => closeSidebar())
