#Shuffle Images by Pete R.
Shuffle Images let you display and shuffle multiple images by moving cursor around or several other ways to trigger.This plugin is perfect for when you want to save space while allowing users to take a peak at what other images are related to the one displayed. It can also be used to create an interactive animation on multiple static images at once.


Created by [Pete R.](http://www.thepetedesign.com), Founder of [Travelistly](http://www.travelistly.com) and [BucketListly](http://www.bucketlistly.com)

License: [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)

[![Shuffle Images](http://www.thepetedesign.com/images/shuffle-images_image.jpg "Shuffle Images")](http://www.thepetedesign.com/demos/shuffle-images_demo.html)


## Demo
[View demo](http://www.thepetedesign.com/demos/shuffle-images_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on desktop have been tested. Not tested on IE. Since the nature of this plugin requires mouse input, it may not work as expected on mobile.

## Basic Usage
To use this plugin, simply include the latest jQuery library (preferably version 2.0.0 or higher) together with `jquery.shuffle-images.js` into your document's `<head>` follow by an HTML markup as follows:

````html
<body>
  ..
  <div class="shuffle-me">
    <img src="images/1.jpg">
    <img src="images/2.jpg">
    <img src="images/3.jpg">
    ..
  </div>
  ..
</body>

````
Make sure all the images you want to shuffle are wrapped within a container where we will call the function on.

Once that is set up, simply call the plugin like this:

````javascript
 $(".shuffle-me").shuffleImages({
   trigger: "imageMouseMove",     // Choose which type of trigger you want here. Available options are "imageMouseMove", "imageHover", "documentMouseMove", and "documentScroll". "imageMouseMove" will trigger when your mouse over the image and move your cursor. "imageHover" will trigger when you mouse over without moving your cursor. "documentMouseMove" will trigger when cursor is being moved anywhere on the page. "documentScroll" will trigger when you scroll the page. The default value is "imageMouseMove"
   triggerTarget: false,          // For "imageMouseMove", and "imageHover" only, you can set which element to trigger the image shuffle when mouse over. For example, if you want a container ".main" to trigger an image shuffle instead of the image itself, put $(".main") for this option. Default value is false.
   mouseMoveTrigger: 50,          // For "imageMouseMove" only, you can set how many pixels you have to move in order to trigger one image shuffle. The lower the faster. The default value is 50.
   hoverTrigger: 200,             // For "imageHover" only, you can set how long you have to hover the image until it shuffles to other images. The option accepts milliseconds without unit. The default value is 200.
   scrollTrigger: 100,          // For "documentScroll" only, you can set how many pixels you have to scroll to see the image shuffle. The default value is 100.
   target: "> img"              // In case you have a complete HTML structure, you can set your own custom selector to your images here. The default value is "> img" which means images that are directly under the "shuffle-me" will be used to shuffle.
 });
````
With the setup above, your images will be shuffled when you mouse over that particular image and you move around your cursor more than 50 pixels away from previous location.

## Markups
You can individually assign each shuffle with its own trigger timing. Available markup are:


### data-si-mousemove-trigger
You can define a custom mouseMoveTrigger option with this data attribute:

````html
  <div class="shuffle-me" data-si-mousemove-trigger="100">
    <img src="images/1.jpg">
    ...
  </div>
````

### data-si-hover-trigger
You can define a custom hoverTrigger option with this data attribute:

````html
  <div class="shuffle-me" data-si-hover-trigger="1000">
    <img src="images/1.jpg">
    ...
  </div>
````

### data-si-scroll-trigger
You can define a custom scrollTrigger option with this data attribute:

````html
  <div class="shuffle-me" data-si-scroll-trigger="200">
    <img src="images/1.jpg">
    ...
  </div>
````

Now your users can see several images while moving their cursor when they interact with the first image on your website. 

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#plugins), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- Tutorial (Coming Soon)