/*
 * List your favorite URLs.
 *
 * @author Robert C. Duvall
 */

// the links to display
var links = [
    [ 'Duke University', 'http://www.duke.edu/' ],
    [ 'Duke Computer Science', 'http://www.cs.duke.edu/' ],
    [ 'Duke Basketball', 'http://www.goduke.com/SportSelect.dbml?SPID=1846' ],
    [ 'Duke Lemur Center', 'http://lemur.duke.edu/' ],
    [ 'Duke Marine Lab', 'https://nicholas.duke.edu/marinelab' ],
    [ 'Events at Duke', 'http://calendar.duke.edu/events/' ],
    [ 'Duke Chronicle', 'http://www.dukechronicle.com/' ],
    [ 'Duke Chapel', 'https://chapel.duke.edu/' ]
];


// functions that do the actual work
function addLinks() {
    var list = document.getElementById('js-linklist');
    links.forEach(function (l) {
        var toAdd = document.createElement('li');
        toAdd.innerHTML = '<a href="' + l[1] + '">' + l[0] + '</a>';
        list.appendChild(toAdd);
    });
}

// load links as soon as the script loads
addLinks();
