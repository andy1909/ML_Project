// Index page interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Index page loaded');
    const btn = document.querySelector('.btn-get-started');
    
    if (btn) {
        btn.addEventListener('mouseenter', () => {
            btn.style.letterSpacing = '1px';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.letterSpacing = 'normal';
        });
    }
});
