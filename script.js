// your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Remove leading A, An, The
function strip(band) {
    return band.replace(/^(a |an |the )/i, '').trim();
}

// Sort alphabetically ignoring articles
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Insert list items into #bands
document.getElementById('bands').innerHTML =
    sortedBands.map(b => `<li>${b}</li>`).join('');
