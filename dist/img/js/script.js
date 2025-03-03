
//NAVBAR
window.onscroll = function() {
const header = document.querySelector('header');
const fixedNav = header.offsetTop;


if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// HAMBURGER //
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    
});

// TABS //
const tabs = document.querySelectorAll('[data-tab-target]');
const activeClass = 'bg-indigo-200';

// Select first tab by default
tabs[0].classList.add(activeClass);
document.querySelector('#tab1').classList.remove('hidden');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetContent = document.querySelector(tab.dataset.tabTarget);
    // console.log(targetContent)

    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    targetContent.classList.remove('hidden');

    // Remove active class from all tabs
    document.querySelectorAll('.bg-indigo-200').forEach(activeTab => activeTab.classList.remove(activeClass));

    // Add active class to clicked tab
    console.log(tab)
    tab.classList.add(activeClass);
  });
});

