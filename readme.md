knockout.animate
================

*Animate.css custom binding for Knockout.js*

[animate.css](https://github.com/daneden/animate.css) is a bunch of cool, fun, and cross-browser animations for you to use in your projects `now with support of Knockout.js`. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

Installing
----------

Download `knockout.animate.min.js` and all dependencies (`animate.css`, `knockout.js`) or use `Bower` command:

```
bower install knockout.animate
```

Usage
-----

To use `knockout.animate` in your website, simply drop the `animate.css`, `knockout.js` and `knockout.animate.js` into your document's <head>:

```html
<head>
  <link rel="stylesheet" href="animate.min.css">
  <script type="text/javascript" src="knockout.min.js"></script>
  <script type="text/javascript" src="knockout.animate.min.js"></script>
</head>

```


Then add next data-binding to an element:

```html
<div data-bind="animate:{ animation: 'zoomIn', state: true"></div>
```

That's it! You've got a CSS animated element. Super!

Use observable to control animation
-----------------------------------

You can control when animation is going to happen by assigning `Knockout Observable` to `state` field:

```html
<div data-bind="animate:{ animation: 'zoomIn', state: state"></div>
```

```js
function Viewmodel(){
  this.state = ko.observable(true);
}

ko.applyBindings(new Viewmodel());
```

Animation will be played when observable become `true`.

Assign `in` and `out` states and toggle between them
----------------------------------------------------

You can add `in` and `out` animation this way:

```html
<div data-bind="animate:{ animation: ['zoomIn', 'zoomOut'], state: state"></div>
```

First animation will be played when `state` field become `true` and second when `false`.

Assign custom handler on state change
-------------------------------------

```html
<div data-bind="animate:{ animation: 'zoomIn', state: state, handler: handler"></div>
```

```js
function Viewmodel(){
  this.state = ko.observable(true);
  
  this.handler = function(event, state){
    //do something here
  }
}

ko.applyBindings(new Viewmodel());
```