# beforeafter - Meteor Smart Package
This is a Meteor smart package for [JQuery Before/After Plugin ](http://www.catchmyfame.com/catchmyfame-jquery-plugins/jquery-beforeafter-plugin/).

# How to use
- `meteor add lawshe:before-after`
- add lt-small.png,lt-small.png,handle.gif to /public/img/before-after 
- add images to template
```html
<div id="container">
 <div><img alt="before" src="before.jpg" width="600" height="366" /></div>
 <div><img alt="after" src="after.jpg" width="600" height="366" /></div>
</div>
```
- after template renders:
```html
			$('.before-after').beforeAfter({
				imagePath : '/img/before-after/'
			}); 
```