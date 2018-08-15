let box = document.querySelectorAll('.box');

box.forEach(element => element.addEventListener('mouseenter', (e) => {
    e.target.classList.add('box-hover-on');
    e.target.classList.remove('box-hover-off');
}));

box.forEach(element => element.addEventListener('mouseleave', (e) => {
    e.target.classList.add('box-hover-off');
    e.target.classList.remove('box-hover-on');
}));
