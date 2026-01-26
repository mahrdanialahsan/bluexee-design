        // Define all scroll functions first
        function scrollLanguages(direction) {
            const slider = document.getElementById('languageSlider');
            if (!slider) return;
            const firstCard = slider.querySelector('.language-item');
            const scrollAmount = firstCard ? firstCard.offsetWidth + parseInt(getComputedStyle(slider).gap) : 200;
            
            if (direction === 'left') {
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
        
        function scrollProgramming(direction) {
            const slider = document.getElementById('programmingSlider');
            if (!slider) return;
            const firstCard = slider.querySelector('.programming-card');
            const scrollAmount = firstCard ? firstCard.offsetWidth + parseInt(getComputedStyle(slider).gap) : 220;
            
            if (direction === 'left') {
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
        
        function scrollSubjects(direction) {
            const slider = document.getElementById('subjectSlider');
            if (!slider) return;
            const firstCard = slider.querySelector('.subject-card');
            const scrollAmount = firstCard ? firstCard.offsetWidth + parseInt(getComputedStyle(slider).gap) : 220;
            
            if (direction === 'left') {
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
        
        function scrollTutors(direction) {
            const slider = document.getElementById('tutorsSlider');
            if (!slider) return;
            const firstCard = slider.querySelector('.tutor-card');
            const scrollAmount = firstCard ? firstCard.offsetWidth + parseInt(getComputedStyle(slider).gap) : 300;
            
            if (direction === 'left') {
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
        
        function scrollTestimonials(direction) {
            const slider = document.getElementById('testimonialsSlider');
            if (!slider) return;
            const scrollAmount = slider.offsetWidth;
            
            if (direction === 'left') {
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
        
        // Navbar search toggle
        document.addEventListener('DOMContentLoaded', function() {
            const searchWrappers = document.querySelectorAll('.nav-search-wrapper');
            searchWrappers.forEach(function(wrapper) {
                const toggle = wrapper.querySelector('.nav-search-toggle');
                const inputWrap = wrapper.querySelector('.nav-search-input-wrap');
                const input = wrapper.querySelector('.nav-search-input');
                const close = wrapper.querySelector('.nav-search-close');
                
                if (!toggle || !inputWrap || !input) return;
                
                function openSearch() {
                    inputWrap.classList.add('open');
                    input.focus();
                }
                
                function closeSearch() {
                    inputWrap.classList.remove('open');
                    input.value = '';
                    input.blur();
                }
                
                toggle.addEventListener('click', openSearch);
                if (close) close.addEventListener('click', closeSearch);
                
                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') closeSearch();
                });
                
                document.addEventListener('click', function(e) {
                    if (window.innerWidth >= 992 && inputWrap.classList.contains('open') &&
                        !wrapper.contains(e.target)) {
                        closeSearch();
                    }
                });
            });
            
            // On mobile: auto-open search when navbar expands (focus input)
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarToggler && navbarCollapse) {
                navbarCollapse.addEventListener('shown.bs.collapse', function() {
                    if (window.innerWidth < 992) {
                        const searchInput = document.querySelector('.nav-search-input');
                        if (searchInput) {
                            setTimeout(function() { searchInput.focus(); }, 100);
                        }
                    }
                });
            }
        });
        
        // Initialize all sliders with auto-play
        document.addEventListener('DOMContentLoaded', function() {
            // Language Slider Auto-play
            const languageSlider = document.getElementById('languageSlider');
            if (languageSlider) {
                let languageInterval = setInterval(() => {
                    if (languageSlider.scrollLeft >= languageSlider.scrollWidth - languageSlider.clientWidth - 10) {
                        languageSlider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollLanguages('right');
                    }
                }, 3000);
                
                languageSlider.addEventListener('mouseenter', () => clearInterval(languageInterval));
                languageSlider.addEventListener('mouseleave', () => {
                    languageInterval = setInterval(() => {
                        if (languageSlider.scrollLeft >= languageSlider.scrollWidth - languageSlider.clientWidth - 10) {
                            languageSlider.scrollTo({ left: 0, behavior: 'smooth' });
                        } else {
                            scrollLanguages('right');
                        }
                    }, 3000);
                });
            }
            
            // Programming Slider Auto-play
            const programmingSlider = document.getElementById('programmingSlider');
            if (programmingSlider) {
                let programmingInterval = setInterval(() => {
                    if (programmingSlider.scrollLeft >= programmingSlider.scrollWidth - programmingSlider.clientWidth - 10) {
                        programmingSlider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollProgramming('right');
                    }
                }, 3000);
                
                programmingSlider.addEventListener('mouseenter', () => clearInterval(programmingInterval));
                programmingSlider.addEventListener('mouseleave', () => {
                    programmingInterval = setInterval(() => {
                        if (programmingSlider.scrollLeft >= programmingSlider.scrollWidth - programmingSlider.clientWidth - 10) {
                            programmingSlider.scrollTo({ left: 0, behavior: 'smooth' });
                        } else {
                            scrollProgramming('right');
                        }
                    }, 3000);
                });
            }
            
            // Subjects Slider Auto-play
            const subjectSlider = document.getElementById('subjectSlider');
            if (subjectSlider) {
                let subjectInterval = setInterval(() => {
                    if (subjectSlider.scrollLeft >= subjectSlider.scrollWidth - subjectSlider.clientWidth - 10) {
                        subjectSlider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollSubjects('right');
                    }
                }, 3000);
                
                subjectSlider.addEventListener('mouseenter', () => clearInterval(subjectInterval));
                subjectSlider.addEventListener('mouseleave', () => {
                    subjectInterval = setInterval(() => {
                        if (subjectSlider.scrollLeft >= subjectSlider.scrollWidth - subjectSlider.clientWidth - 10) {
                            subjectSlider.scrollTo({ left: 0, behavior: 'smooth' });
                        } else {
                            scrollSubjects('right');
                        }
                    }, 3000);
                });
            }
            
            // Tutors Slider Auto-play
            const tutorsSlider = document.getElementById('tutorsSlider');
            if (tutorsSlider) {
                let tutorsInterval = setInterval(() => {
                    if (tutorsSlider.scrollLeft >= tutorsSlider.scrollWidth - tutorsSlider.clientWidth - 10) {
                        tutorsSlider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollTutors('right');
                    }
                }, 3500);
                
                tutorsSlider.addEventListener('mouseenter', () => clearInterval(tutorsInterval));
                tutorsSlider.addEventListener('mouseleave', () => {
                    tutorsInterval = setInterval(() => {
                        if (tutorsSlider.scrollLeft >= tutorsSlider.scrollWidth - tutorsSlider.clientWidth - 10) {
                            tutorsSlider.scrollTo({ left: 0, behavior: 'smooth' });
                        } else {
                            scrollTutors('right');
                        }
                    }, 3500);
                });
            }
            
            // Testimonials Slider Auto-play
            const testimonialsSlider = document.getElementById('testimonialsSlider');
            if (testimonialsSlider) {
                let testimonialsInterval = setInterval(() => {
                    if (testimonialsSlider.scrollLeft >= testimonialsSlider.scrollWidth - testimonialsSlider.clientWidth - 10) {
                        testimonialsSlider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollTestimonials('right');
                    }
                }, 4000);
                
                testimonialsSlider.addEventListener('mouseenter', () => clearInterval(testimonialsInterval));
                testimonialsSlider.addEventListener('mouseleave', () => {
                    testimonialsInterval = setInterval(() => {
                        if (testimonialsSlider.scrollLeft >= testimonialsSlider.scrollWidth - testimonialsSlider.clientWidth - 10) {
                            testimonialsSlider.scrollTo({ left: 0, behavior: 'smooth' });
                        } else {
                            scrollTestimonials('right');
                        }
                    }, 4000);
                });
            }
        });
