# search-things-near-you

## About
This is made using [Tomtom's Maps SDK for Web (v6)](https://developer.tomtom.com/maps-sdk-web-js).

I decided to use Tomtom's sdk since it doesn't require a credit card.

### Purpose: Search things( places || restaurants || businesses ) near your location.

### Current progress: 
- [x] Research 
 - [x] Look for resources
  Resources found:
   - ~~ google API : Maps javascript API / Places API / Maps Embed API ~~
   - ~~ manticoresearch ~~
   - tomtom

 - [x] determine the best resources to implement
 - [x] learning how to implement

-[x] implementation

### Quick start 

1. Sign-up to [tomtom](https://developer.tomtom.com/) to get your free API.
2. After acquiring your API key, go to index.js and place your API key inside this variable `const myKey = "<your-tomtom-API-Key>";` 
3. You can add more map controller by using the `map.adController()` function
ex.

`
    var scale = new tt.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
    });
    map.addControl(scale);
`

or

`
    map.addControl(new tt.FullscreenControl({
        container: document.querySelector('body')
    }));

`

or 

`
    var nav = new tt.NavigationControl({});
    map.addControl(nav, 'bottom-right');

`