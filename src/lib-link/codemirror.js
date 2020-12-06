import '../../libs/codemirror/lib/codemirror.js';
import '../../libs/codemirror/mode/javascript/javascript.js';
{
    const styleURL = new URL('../../libs/codemirror/lib/codemirror.css', import.meta.url);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = styleURL;
    document.head.appendChild(link);
}
export const themes = {material_darker: 'material-darker'};
Object.keys(themes).map(key => themes[key]).forEach(name => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL(`../../libs/codemirror/theme/${name}.css`, import.meta.url);
    document.head.appendChild(link);
});

export const CodeMirror = window.CodeMirror;