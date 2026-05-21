// Home page interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Prediction page loaded');
    
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('.form-control');
    
    // Add focus effect to form groups
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('active');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('active');
        });
    });

    // Simple loading state on submit
    if (form) {
        form.addEventListener('submit', () => {
            const btn = document.querySelector('.btn-predict');
            if (btn) {
                btn.value = 'Calculating...';
                btn.disabled = true;
                btn.style.opacity = '0.7';
            }
        });
    }
});
