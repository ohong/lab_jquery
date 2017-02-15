/*
 * Simple version of the classic game consisting of a grid of numbered squares
 * with one square missing. The object of the game is to arrange the tiles back
 * into numerical order by repeatedly sliding a square that neighbors the blank
 * square into its empty space.
 *
 * @author Robert C. Duvall
 * @author YOUR NAME HERE
 */

var numPieces = 16,  // number of pieces to display (should be a square number)
    puzzle = null;   // an array of DIV elements representing the puzzle pieces


/*
 * make these functions global so we can test them in the Console
 */

// returns array of numbers in shuffled order
function makeShuffledArray(size) {
    // note, this is not the most efficient algorithm,
    // but it shows off some interesting features of JavaScript
    return Array
        .apply(null, Array(size))
        .map(function (e, n) { return n; })
        .map(function (e) { return [ Math.random(), e ]; })
        .sort()
        .map(function (e) { return e[1]; });
}

// return offsets for background image based on piece's number
function getOffsets(index) {
    var right = (index % 4) * 100,
        top = Math.floor(index / 4) * 100;
    return '-' + right + 'px -' + top + 'px';
}

// returns true if the given index is a valid piece
function isInBounds(index) {
    return 0 <= index && index < numPieces;
}

// returns array index where the blank piece in the puzzle
function getBlankIndex() {
    for (var k = 0; k < numPieces; k += 1) {
        if ($(puzzle[k]).html() === '') {
            return k;
        }
    }
    // should never get here
    return 0;
}

// apply uniform puzzle style to given piece
function stylePiece (piece, index) {
    piece.css({
        backgroundPosition: getOffsets(index),
        width: '96px',       // subtract off the border
        height: '96px',
        lineHeight: '96px',  // for centering
        fontSize: '32pt'     // when pieces get small, the text should too
    });
}

// change the given piece into a blank piece
function makeBlankPiece(piece) {
    piece.html('');
    piece.removeClass('movable-piece');
    piece.addClass('puzzle-piece blank-piece');
    stylePiece(piece, 0);
}

// change the given piece into the given numbered piece
function makeRegularPiece(piece, index) {
    piece.html(index);
    piece.removeClass('blank-piece');
    piece.addClass('puzzle-piece');
    stylePiece(piece, index);
}

// change the given piece into a movable piece (i.e., something that can slide into the blank spot)
function makeMovablePiece(piece) {
    piece.addClass('movable-piece');
    piece.on('click', movePiece);
}

// remove "movability" from the given piece
function makeUnmovablePiece(piece) {
    piece.removeClass('movable-piece');
    piece.off('click', movePiece);
}

// change pieces beside the blank piece into movable pieces
//   and removes movability from those that are not
function setMovablePieces() {
    // TODO: complete this function
}

// move piece that is clicked into the blank space
//   i.e., swap the blank piece with the clicked on piece ("this")
function movePiece() {
    // TODO: complete this function
}

// shuffle all the pieces of the puzzle
//   i.e., assign pieces their numbers based on shuffled array, with 0 being the blank piece
function shufflePuzzle() {
    var shuffledNums = makeShuffledArray(numPieces);
    // TODO: complete this function
}

// create DIV elements for each piece of the puzzle in order
function setupPuzzle() {
    var puzzleArea = $('#puzzlearea');
    for (var k = 0; k < numPieces; k += 1) {
        var piece = $('<div>').appendTo(puzzleArea);
        if (k === 0) {
            makeBlankPiece(piece);
        } else {
            makeRegularPiece(piece, k);
        }
    }
    // remember DIVs for future functions
    puzzle = puzzleArea.children();
}


// load the puzzle when the page has been loaded and activate the interaction
$(function () {
    setupPuzzle();
    $('#shufflebutton').on('click', shufflePuzzle);
});
