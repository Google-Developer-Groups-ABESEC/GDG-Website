document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const prevButton = document.querySelector('.slider-nav.prev');
    const nextButton = document.querySelector('.slider-nav.next');
    const items = document.querySelectorAll('.slider-item');
    
    let currentIndex = 0;
    let itemsPerView = window.innerWidth <= 576 ? 1 : window.innerWidth <= 768 ? 2 : 3;
    const totalItems = items.length;
    
    function getItemWidth() {
        return items[0].offsetWidth + 32;
    }
    
    function updateSlider() {
        const itemWidth = getItemWidth();
        const offset = -currentIndex * itemWidth;
        sliderTrack.style.transform = `translateX(${offset}px)`;
        
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex >= totalItems - itemsPerView ? '0.5' : '1';
    }
    
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsPerView) {
            currentIndex++;
            updateSlider();
        }
    });
    
    window.addEventListener('resize', () => {
        const newItemsPerView = window.innerWidth <= 576 ? 1 : window.innerWidth <= 768 ? 2 : 3;
        
        if (newItemsPerView !== itemsPerView) {
            itemsPerView = newItemsPerView;
            if (currentIndex > totalItems - itemsPerView) {
                currentIndex = totalItems - itemsPerView;
            }
        }
        
        updateSlider();
    });
    
    updateSlider();

    const showMoreBtn = document.querySelector('.show-more-btn');
    const hiddenCards = document.querySelectorAll('.event-card.hidden');
    const eventsGrid = document.querySelector('.events-grid');
    let isExpanded = false;

    hiddenCards.forEach(card => {
        gsap.set(card, { opacity: 0, scale: 0.95 });
    });

    showMoreBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            showMoreBtn.textContent = 'Show Less';
            
            const gridHeightBefore = eventsGrid.offsetHeight;
            
            hiddenCards.forEach(card => {
                card.style.display = 'block';
                card.classList.remove('hidden');
            });
            
            const gridHeightAfter = eventsGrid.offsetHeight;
            
            gsap.fromTo(eventsGrid, 
                { height: gridHeightBefore },
                { 
                    height: gridHeightAfter,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.set(eventsGrid, { clearProps: 'height' });
                    }
                }
            );
            
            gsap.to(hiddenCards, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out'
            });
        } else {
            showMoreBtn.textContent = 'Show More';
            
            const reverseCards = Array.from(hiddenCards).reverse();
            const gridHeightBefore = eventsGrid.offsetHeight;
            
            gsap.to(reverseCards, {
                opacity: 0,
                scale: 0.95,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power3.in'
            });
            
            setTimeout(() => {
                hiddenCards.forEach(card => {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                });
                
                const gridHeightAfter = eventsGrid.offsetHeight;
                
                gsap.fromTo(eventsGrid, 
                    { height: gridHeightBefore },
                    { 
                        height: gridHeightAfter,
                        duration: 0.6,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            gsap.set(eventsGrid, { clearProps: 'height' });
                        }
                    }
                );
            }, 400);
        }
    });

    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
});
