function toggleDark() {
  document.body.classList.toggle("dark");
}
const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', () => {
  projects.forEach(project => {
    const posisi = project.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;

    if (posisi < tinggiLayar - 50) {
      project.classList.add('show');
    }
  });
});
