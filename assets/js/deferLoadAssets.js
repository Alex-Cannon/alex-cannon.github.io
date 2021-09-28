const stylesheets = [
    '/assets/lib/fontawesome-free-5.15.3-web/css/all.min.css'
];

export const loadDeferredAssets = () => {
    for (const path of stylesheets) {
        const stylesheetElement = document.createElement('LINK');
        stylesheetElement.setAttribute('href', path);
        stylesheetElement.setAttribute('rel', 'stylesheet');
    
        document.getElementsByTagName('head')[0].append(stylesheetElement);
    }
}