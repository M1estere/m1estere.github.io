const navBar = document.getElementById("navbar");

addEventListener("scroll", changeHeader);

function changeHeader() {
    if (window.scrollY > 20) {
        navBar.classList.add("navbar-active");
    } else if (window.scrollY <= 20) {
        navBar.classList.remove("navbar-active");
    }
}

const startButtons = document.querySelectorAll(".start-button");
for (let i = 0; i < startButtons.length; i++) {
    const button = startButtons[i];

    button.addEventListener('mouseenter', function (e) {
        var parentOffset = button.getBoundingClientRect(),
            relX = e.clientX - parentOffset.left,
            relY = e.clientY - parentOffset.top;

        console.log(relX, relY);

        button.querySelector('.circle-fill').style.top = relY + 'px';
        button.querySelector('.circle-fill').style.left = relX + 'px';
    });

    button.addEventListener('mouseout', function (e) {
        var parentOffset = button.getBoundingClientRect(),
            relX = e.clientX - parentOffset.left,
            relY = e.clientY - parentOffset.top;

        button.querySelector('.circle-fill').style.top = relY + 'px';
        button.querySelector('.circle-fill').style.left = relX + 'px';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    if (burgerMenu && mobileMenu) {
        burgerMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        document.querySelectorAll('.mobile-menu-item a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                burgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = 'auto';

                if (targetSection) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            });
        });

        mobileMenu.addEventListener('click', function (e) {
            if (e.target === this) {
                burgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    }

    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            navbar.classList.add('navbar-active');
        } else {
            navbar.classList.remove('navbar-active');
        }

        lastScrollY = currentScrollY;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('skillTooltip');
    const tooltipIcon = document.getElementById('tooltipIcon');
    const tooltipTitle = document.getElementById('tooltipTitle');
    const tooltipSubtitle = document.getElementById('tooltipSubtitle');
    const tooltipDescription = document.getElementById('tooltipDescription');
    const tooltipLevel = document.getElementById('tooltipLevel');

    const skillsData = {
        'php': {
            title: 'PHP',
            subtitle: 'Programming language',
            description: 'Worked with raw php, Symfony, Laravel, developed APIs, worked with databases, created different web apps',
            level: 'Confident level'
        },
        'html': {
            title: 'HTML',
            subtitle: 'Layout',
            description: 'Worked with layouts, adaptive, SEO optimization and ARIA',
            level: 'Confident level'
        },
        'js': {
            title: 'JavaScript',
            subtitle: 'Programming language',
            description: 'Worked with vanilla JS, DOM manipulation, event handling, fetch API, ES6+, also worked with React, basic Node.js, created interactive interfaces and dynamic web applications',
            level: 'Confident level'
        },
        'python': {
            title: 'Python',
            subtitle: 'Programming language',
            description: 'Worked with scripts, automatizations, integrations, studied data analytics, created backend services',
            level: 'Good level'
        },
        'git': {
            title: 'Git',
            subtitle: 'Version control system',
            description: 'Worked with repositories, branches, merges, conflict resolving, worked in different teams using git flow',
            level: 'Good level'
        },
        'laravel': {
            title: 'Laravel',
            subtitle: 'PHP framework',
            description: 'Created web apps, worked with Eloquent, routing, migrations, artisan, authorization',
            level: 'Confident level'
        },
        'sql': {
            title: 'SQL',
            subtitle: 'Database',
            description: 'Worked with mysql, sqlite, mssql, postgressql, worked with simple queries, joins, count, sum, avg, etc',
            level: 'Good level'
        },
        'csharp': {
            title: 'C#',
            subtitle: 'Programming language',
            description: 'Developed games with Unity, created desktop + web apps, .net, async programming',
            level: 'Good level'
        },
        'unity': {
            title: 'Unity',
            subtitle: 'Game engine',
            description: 'Developed 2D and 3D games, worked with physics, animations, UI, optimization with profiler, created different game mechanics',
            level: 'Confident level'
        },
        'android_studio': {
            title: 'Android Studio',
            subtitle: 'Android development IDE',
            description: 'Created native Android apps, worked with Android SDK, emulators, debugging, optimization',
            level: 'Good level'
        }
    };

    const skillItems = document.querySelectorAll('.skills-block > div');

    skillItems.forEach(item => {
        const img = item.querySelector('img');
        if (!img) return;

        const alt = img.getAttribute('alt') || '';
        const skillKey = alt.toLowerCase().replace(/\s+/g, '_');
        const data = skillsData[skillKey];

        if (!data) return;

        item.addEventListener('mouseenter', function (e) {
            tooltipIcon.src = img.src;
            tooltipIcon.alt = data.title;
            tooltipTitle.textContent = data.title;
            tooltipSubtitle.textContent = data.subtitle;
            tooltipDescription.textContent = data.description;
            tooltipLevel.textContent = data.level;

            const rect = item.getBoundingClientRect();
            const tooltipWidth = 320;
            const tooltipHeight = 280;

            let left = rect.right + 20;
            let top = rect.top + (rect.height / 2) - (tooltipHeight / 2);

            if (left + tooltipWidth > window.innerWidth) {
                left = rect.left - tooltipWidth - 20;
            }

            if (top < 10) {
                top = 10;
            }
            if (top + tooltipHeight > window.innerHeight - 10) {
                top = window.innerHeight - tooltipHeight - 10;
            }

            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.classList.add('visible');
        });

        item.addEventListener('mouseleave', function () {
            tooltip.classList.remove('visible');
        });
    });

    window.addEventListener('scroll', function () {
        tooltip.classList.remove('visible');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = `${currentYear}`;
    }
});
