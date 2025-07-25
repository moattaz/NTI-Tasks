  document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-buttons .nav-link');
            const cards = document.querySelectorAll('.card-container .col-lg-4');

            filterButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();

                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    const filterValue = this.dataset.filter; 

                    // تصفية الكروت
                    cards.forEach(card => {
                        const category = card.dataset.category; 
                        if (filterValue === 'all' || category === filterValue) {
                            card.style.display = 'block'; 
                        } else {
                            card.style.display = 'none'; 
                        }
                    });
                });
            });
        });

            document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-buttons .nav-link');
            const cards = document.querySelectorAll('.card-container .col-lg-4'); 

            filterButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();


                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    const filterValue = this.dataset.filter; 

                    cards.forEach(card => {
                        const category = card.dataset.category; 
                        if (filterValue === 'all' || category === filterValue) {
                            card.style.display = 'block'; 
                        } else {
                            card.style.display = 'none'; 
                        }
                    });
                });
            });
        });

          function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in-up, .scale-in');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('animate');
                }
            });
        }

        function selectPlan(planName, price) {
            const button = event.target;
            const originalText = button.innerHTML;
            
            button.classList.add('btn-loading');
            button.disabled = true;
            setTimeout(() => {
                button.classList.remove('btn-loading');
                button.innerHTML = '<i class="fas fa-check me-2"></i>Selected!';
                button.style.background = 'linear-gradient(135deg, #10b981, #047857)';
                
                showNotification(`${planName} plan selected successfully! Price: $${price}`, 'success');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    button.style.background = '';
                }, 3000);
            }, 2000);
        }
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `alert alert-${type === 'success' ? 'success' : 'info'} position-fixed`;
            notification.style.cssText = `
                top: 20px;
                right: 20px;
                z-index: 9999;
                min-width: 300px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                border: none;
                border-radius: 10px;
                animation: slideInRight 0.5s ease;
            `;
            notification.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
                    <span>${message}</span>
                </div>
            `;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideInRight 0.5s ease reverse';
                setTimeout(() => {
                    notification.remove();
                    style.remove();
                }, 500);
            }, 4000);
        }

        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
            const features = card.querySelectorAll('.feature-item');
            
            card.addEventListener('mouseenter', function() {
                features.forEach((feature, index) => {
                    setTimeout(() => {
                        feature.style.transform = 'translateX(5px)';
                        feature.style.backgroundColor = 'rgba(37, 99, 235, 0.05)';
                    }, index * 100);
                });
            });
            
            card.addEventListener('mouseleave', function() {
                features.forEach(feature => {
                    feature.style.transform = 'translateX(0)';
                    feature.style.backgroundColor = 'transparent';
                });
            });
        });

        const buttons = document.querySelectorAll('.btn-select-plan');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', function() {
                if (!this.disabled) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });

        function compareFeatures() {
            const cards = document.querySelectorAll('.pricing-card');
            cards.forEach(card => {
                card.style.border = '2px solid var(--primary-color)';
                card.style.background = 'rgba(37, 99, 235, 0.02)';
            });
            
            setTimeout(() => {
                cards.forEach(card => {
                    card.style.border = '2px solid transparent';
                    card.style.background = 'white';
                });
            }, 2000);
        }

        window.addEventListener('load', () => {
            animateOnScroll();
        });

        window.addEventListener('scroll', animateOnScroll);

        
        document.addEventListener('DOMContentLoaded', function() {
            const priceAmounts = document.querySelectorAll('.price-amount');
            priceAmounts.forEach(price => {
                const originalPrice = price.textContent;
                price.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1)';
                    this.style.color = 'var(--secondary-color)';
                });
                
                price.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                    this.style.color = 'var(--primary-color)';
                });
            });
            
            // Show welcome message
            setTimeout(() => {
                showNotification('Choose the perfect plan for your needs!', 'info');
            }, 1000);
        });

          document.addEventListener('DOMContentLoaded', function () {
        var myCarousel = document.querySelector('#multiCardCarousel');
        if (myCarousel) {
            var carousel = new bootstrap.Carousel(myCarousel, {
                interval: 5000, 
                wrap: true      
            });
        }
    });