const templateCache = {};
export async function loadTemplate(baseUrl, templateFileName, styleFileName) {
    const templateURL = new URL(templateFileName, baseUrl);
    const styleURL = styleFileName ? new URL(styleFileName, baseUrl) : null;
    if (!templateCache[templateFileName]) {
        const response = await fetch(templateURL);
        let template = await response.text();
        if (styleURL) {
            template = `<link rel="stylesheet" href="${styleURL}" />${template}`;
        }
        templateCache[templateFileName] = template;
    }
    return templateCache[templateFileName];
}