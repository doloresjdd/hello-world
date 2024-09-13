document.addEventListener('DOMContentLoaded', function() {
    const toggleHobbiesButton = document.getElementById('toggleHobbiesButton');
    const hobbiesSection = document.getElementById('hobbiesSection');

    toggleHobbiesButton.addEventListener('click', function() {
        if (hobbiesSection.style.display === 'none') {
            hobbiesSection.style.display = 'block';
            toggleHobbiesButton.textContent = '隐藏爱好';
        } else {
            hobbiesSection.style.display = 'none';
            toggleHobbiesButton.textContent = '显示爱好';
        }
    });
});




