function toggleColors() {
    // toggle background color
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('bg-red');
    // toggle PED Academy logo color scheme
    const logo = document.getElementById('ped-logo');
    if (logo.src.includes("academy.png")) {
        logo.src = 'academy_white.png';
    } else {
        logo.src = 'academy.png';
    }
}