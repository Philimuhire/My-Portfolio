// Array of professions to cycle through
const professions = ['a web developer', 'a data scientist', 'a designer', 'an IT support technician'];
let index = 0;

function updateProfession() {
    document.getElementById('profession').innerText = professions[index];
    index = (index + 1) % professions.length;
}

setInterval(updateProfession, 2000); // Update every second