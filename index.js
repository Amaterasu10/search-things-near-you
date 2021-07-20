const myKey = "PPHy2r3we6c0CYPT7w75ujdrrxZcaQ0X";

var map = tt.map({
    key: myKey,
    container: "mapContainer"
});

var options = {
    searchOptions: {
        key: myKey,
        language: 'en-GB',
        limit: 5
    },
    autocompleteOptions: {
        key: myKey,
        language: 'en-GB'
    }
};

var ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
var searchBoxHTML = ttSearchBox.getSearchBoxHTML();
//document.body.append();
document.querySelector('.searchBox').append(searchBoxHTML)