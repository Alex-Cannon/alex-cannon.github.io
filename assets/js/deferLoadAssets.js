export const loadDeferredAssets = () => {
    const fontAwesomeSolidFonts = document.createElement('LINK');
    fontAwesomeSolidFonts.setAttribute('href', '/assets/lib/fontawesome-free-5.15.3-web/css/solid.min.css');
    fontAwesomeSolidFonts.setAttribute('rel', 'stylesheet');

    document.getElementsByTagName('head')[0].append(fontAwesomeSolidFonts);
}