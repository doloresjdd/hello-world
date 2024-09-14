document.addEventListener('DOMContentLoaded', function() {
    const toggleHobbiesButton = document.getElementById('toggleHobbiesButton');
    const hobbiesSection = document.getElementById('hobbiesSection');

    toggleHobbiesButton.addEventListener('click', function() {
        if (hobbiesSection.style.display === 'none') {
            hobbiesSection.style.display = 'block';
            toggleHobbiesButton.textContent = 'hide hobbies';
        } else {
            hobbiesSection.style.display = 'none';
            toggleHobbiesButton.textContent = 'show hobbies';
        }
    });
});




