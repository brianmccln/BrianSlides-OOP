# BrianSlider Class
## no-jquery slideshow
- This BrianSlider Class by Brian McClain (me) works with your images, captions and even audio. 
- I made it with images, captions and mp3 audio files a History of Coffee slideshow, but of course you can just use your own data.
- I coded it from the "ground up" (no pun intended), using OOP (Object Oriented Programming)/
- I did this project to help me and my students better understand how JS libraries, such Splide() and Tabby() work.
- Unlike so many Class files, BrianSlider.js is NOT minified, so programmers can analyze the code.
- I made this without jQuery -- just pure Vanilla JS. It is therefore extemely lightweight: the BrianSlider.js file is a mere 3 kb; the css, only 2 kb. The brian-slider-data.js file is 7 kb. It includes an array of 15 objects of 5 properties each: year, img, alt, snd (sound file) and capt (caption). The html file that holds the slideshow is 1 kb.
- In addition to images, the slideshow supports captions and mp3 audio files.
- Load brian-slider.html in the browser to get a 15-slide History of Coffee slideshow, no configuring required.
- An "ended" event on the Audio object cue up the next slide if Autoplay is enabled.
- In this example, the audio consists of my voiceover, reading the captions aloud.
- The data is of an array of objects called objArr, which is the only thing in brian-slider-data.js. 
- The BrianSlides OOP Class is written in BrianSlides.js.
- An object instance of the class needs to be instantiated in the HTML, where '.slideshow' is the ul where the images will appear as li (list items).

```js
const slideshow = new BrianSlider(objArr, '.slideshow');
slideshow.load();

// Demo:
// https://guesstimation.net/BrianSlider/brian-slider.html
```

- The slideshow has Next >> and Prev << buttons, as well as an Autoplay option.
- Click >> to hear the first slide play, then >> to get the next slide.
- Click << for the previous slide.
- Click AUTO for autoplay (the button says STOP while autoplay is in progress).
<<<<<<< HEAD
- Click STOP to stop autoplay and go back to using the >> and << buttons.
=======
- Click STOP to stop autoplay and go back to using the >> and << buttons.
>>>>>>> 4c04cc5982e8329350186c86dd4820211b75e8ce
