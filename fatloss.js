document.addEventListener('DOMContentLoaded', () => {
    // Initialize localStorage for levels if not set
    if (!localStorage.getItem('levels')) {
        localStorage.setItem('levels', JSON.stringify({ level1: true, level2: false, level3: false, level4: false, level5: false }));
    }

    // Retrieve level data from localStorage
    const levels = JSON.parse(localStorage.getItem('levels'));

    // Enable or disable buttons based on level completion
    document.getElementById('level1-btn').disabled = !levels.level1;
    document.getElementById('level2-btn').disabled = !levels.level2;
    document.getElementById('level3-btn').disabled = !levels.level3;
    document.getElementById('level4-btn').disabled = !levels.level4;
    document.getElementById('level5-btn').disabled = !levels.level5;
});