const getTheTitles = function(books) {
    var length = books.length;
    var titles = [];
    for (var i = 0; i < length; i++){
        titles.push(books[i].title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
