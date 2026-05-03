/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
sr.reveal('.timeline-item',{ interval: 150, delay: 200 }); 

/*===== WORK SEARCH & FILTER =====*/
const workSearchInit = () => {
    const searchInput = document.getElementById('work-search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    const workContainer = document.querySelector('.work__container');
    const itemsPerPage = 9;

    let currentFilter = 'all';
    let currentPage = 1;
    let visibleCardsArray = [];

    function filterWorkCards() {
        const searchTerm = searchInput.value.toLowerCase();
        visibleCardsArray = [];
        
        workCards.forEach(card => {
            const category = card.dataset.category || '';
            const tags = card.dataset.tags || '';
            const title = card.querySelector('h3').textContent.toLowerCase();
            
            const matchesFilter = currentFilter === 'all' || category.includes(currentFilter);
            const matchesSearch = searchTerm === '' || 
                title.includes(searchTerm) || 
                tags.includes(searchTerm);
            
            if (matchesFilter && matchesSearch) {
                card.classList.remove('hidden');
                visibleCardsArray.push(card);
            } else {
                card.classList.add('hidden');
            }
        });
        
        currentPage = 1;
        renderPage();
    }

    function renderPage() {
        const totalPages = Math.ceil(visibleCardsArray.length / itemsPerPage) || 1;
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        
        visibleCardsArray.forEach((card, index) => {
            if (index >= start && index < end) {
                card.classList.remove('hidden');
                card.style.display = '';
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
        
        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        let pagination = document.querySelector('.work-pagination');
        if (!pagination) {
            pagination = document.createElement('div');
            pagination.className = 'work-pagination';
            workContainer.appendChild(pagination);
        }
        
        if (totalPages <= 1 || visibleCardsArray.length === 0) {
            pagination.innerHTML = '';
            if (visibleCardsArray.length === 0) {
                pagination.innerHTML = '<p style="text-align:center;color:#666;">Aucun projet trouvé</p>';
            }
            return;
        }
        
        const prevDisabled = currentPage === 1 ? 'disabled' : '';
        const nextDisabled = currentPage === totalPages ? 'disabled' : '';
        
        pagination.innerHTML = 
            '<button class="page-btn prev" ' + prevDisabled + '>Précédent</button>' +
            '<span class="page-info">' + currentPage + ' / ' + totalPages + '</span>' +
            '<button class="page-btn next" ' + nextDisabled + '>Suivant</button>';
        
        const btnPrev = pagination.querySelector('.page-btn.prev');
        const btnNext = pagination.querySelector('.page-btn.next');
        
        if (btnPrev && !btnPrev.disabled) {
            btnPrev.onclick = () => {
                currentPage--;
                renderPage();
            };
        }
        
        if (btnNext && !btnNext.disabled) {
            btnNext.onclick = () => {
                currentPage++;
                renderPage();
            };
        }
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterWorkCards();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterWorkCards);
    }

    filterWorkCards();
};

/*===== WORK MODAL =====*/
const workModalInit = () => {
    const workModal = document.getElementById('work-modal');
    if (!workModal) return;

    const modalClose = document.querySelector('.work-modal-close');
    const modalTitle = document.querySelector('.work-modal-title');
    const modalDesc = document.querySelector('.work-modal-description');
    const modalGithub = document.querySelector('.work-modal-github');
    const modalDownload = document.querySelector('.work-modal-download');
    const modalImage = document.querySelector('.work-modal-image img');
    const modalProject = document.querySelector('.work-modal-project');
    const modalCategory = document.querySelector('.work-modal-category');
    const workCards = document.querySelectorAll('.work-card');

    const categoryLabels = {
        'data': 'Data',
        'web': 'Web',
        'ml': 'ML / IA',
        'viz': 'Visualisation'
    };

    workCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title || '';
            const description = card.dataset.description || '';
            const github = card.dataset.github || '#';
            const project = card.dataset.project || '';
            const category = card.dataset.category || '';
            const download = card.dataset.download || '';
            const imgSrc = card.querySelector('img').src;

            modalTitle.textContent = title;
            modalDesc.textContent = description;
            modalImage.src = imgSrc;
            
            const tags = (card.dataset.tags || '').split(' ');
            modalCategory.innerHTML = tags.map(tag => `<span>${tag}</span>`).join('');
            
            if (download) {
                modalDownload.href = download;
                modalDownload.style.display = 'inline-flex';
                modalGithub.style.display = 'none';
            } else {
                modalGithub.href = github;
                modalGithub.style.display = 'inline-flex';
                modalDownload.style.display = 'none';
            }
            
            if (project) {
                modalProject.href = project;
                modalProject.style.display = 'inline-block';
            } else {
                modalProject.style.display = 'none';
            }

            workModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            workModal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    workModal.addEventListener('click', (e) => {
        if (e.target === workModal) {
            workModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && workModal.classList.contains('show')) {
            workModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
};

/*===== INIT =====*/
document.addEventListener('DOMContentLoaded', () => {
    workSearchInit();
    workModalInit();
});