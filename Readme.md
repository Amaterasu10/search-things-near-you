# search-things-near-you

## About
This is made using [Tomtom's Maps SDK for Web (v6)](https://developer.tomtom.com/maps-sdk-web-js).

I decided to use Tomtom's sdk since it doesn't require a credit card.

Purpose
: Search things( places || restaurants || businesses ) near your location.

### Current progress: 
- [x] Research 
 - [x] Look for resources
 
  Resources found:
   - google API : Maps javascript API / Places API / Maps Embed API
   - manticoresearch
   - tomtom

 - [x] determine the best resources to implement
   - ~~google API : Maps javascript API / Places API / Maps Embed API~~
   - ~~manticoresearch~~
   - tomtom
 - [x] learning how to implement

- [x] implementation

### Quick start 

1. Sign-up to [tomtom](https://developer.tomtom.com/) to get your free API key.
2. After acquiring your API key, go to **index.js** and place your **API key** inside this variable 
```js 
const myKey = "<your-tomtom-API-Key>";
``` 
3. You can add more map controller by using the this function
```js
 map.addControl() 
```
**ex**.

```js
//Creating a new instance of a controller and setting its options. Then, assigning it to a variable like this:
 var scale = new tt.ScaleControl({
     maxWidth: 80,
     unit: 'metric'
 });
   map.addControl(scale);



// You can set the position of the controller relative to the map, like this:

map.addControl(scale, 'bottom-left')` 

// you can also use this on plugins, Though I only tested it on this particular plugin.

var ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
var searchBoxHTML = ttSearchBox.getSearchBoxHTML();
map.addControl(ttSearchBox, 'top-left');

//this might only work on plugins, I havent tested this on controllers. 
document.body.appendChild(searchBoxHTML);

```
