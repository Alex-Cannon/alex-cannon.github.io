const fontAwesomeSolidFonts = '<link href="/assets/lib/fontawesome-free-5.15.3-web/css/solid.min.css" rel="stylesheet">';

export const loadDeferredAssets = () => {
    alert('hi');
    document.getElementsByTagName('head')[0].append(fontAwesomeSolidFonts);
}