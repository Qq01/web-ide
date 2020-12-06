// import './dropdown.js';
import { CodeMirror, themes } from './lib-link/codemirror.js';
import './components/dropdown/dropdown.comp.js';
import './components/dropdownlist/dropdownlist.comp.js';

const $codeEditor = document.getElementById('code-editor');
const cm = CodeMirror($codeEditor, {
    mode: 'javascript',
    theme: themes.material_darker,
    lineNumbers: true,
    // gutters: true,
    // value: ''
});
setTimeout(() => {cm.refresh()}, 100);

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('src/service-worker/service-worker.js').then(reg => {
        if(reg.installing) {
        console.log('Service worker installing');
        } else if(reg.waiting) {
        console.log('Service worker installed');
        } else if(reg.active) {
        console.log('Service worker active');
        }
    }).catch( err => {
        console.log(`Registration failed with ${err}`);
    });
}