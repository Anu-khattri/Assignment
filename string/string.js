function search() {
    var searchText = document.getElementById('searchinput').value.toLowerCase();
    var paragraph = document.getElementById('par');
    var originalText = paragraph.textContent;

    // Reset paragraph content
    paragraph.innerHTML = originalText;

    if (searchText) {
        var regex = new RegExp(searchText, 'gi');
        var newText = originalText.replace(regex, function(match) {
            return '<span class="highlight">' + match + '</span>';
        });
        paragraph.innerHTML = newText;
    }
}
