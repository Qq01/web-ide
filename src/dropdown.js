// document.body.addEventListener('mouseenter', e => {
//     const id = e.target.dataset.dropdown;
//     if (id) {
//         const $dropdown = document.getElementById(id);
//         if ($dropdown) {
//             const rect = e.target.getBoundingClientRect();
//             $dropdown.style.top = `${rect.bottom}px`;
//             $dropdown.style.left = `${rect.left}px`;
//             $dropdown.classList.add('--visible');
//         }
//     }
// }, { capture: true, passive: true});
// document.body.addEventListener('mouseleave', e => {
//     const id = e.target.dataset.dropdown;
//     if (id) {
//         const $dropdown = document.getElementById(id);
//         if ($dropdown) {
//             $dropdown.classList.remove('--visible');
//         }
//     }
// }, { capture: true, passive: true});


addEventListener('click', e => {
    console.log('click');
    const $dropdown = e.target;
    console.log($dropdown);
    if ($dropdown.classList.contains('dropdown')) {
        console.log('remove');
        $dropdown.classList.remove('--visible');
    }
}, { capture: true, passive: true});