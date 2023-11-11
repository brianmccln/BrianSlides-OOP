# BrianSlider Class
## no-jquery slideshow
- This BrianSlider Class by Brian McClain (me) works with your images, captions and even audio. 
- I made it with images, captions and mp3 audio files a History of Coffee slideshow, but of course you can just use your own data.
- I coded it from the "ground up" (no pun intended), using OOP (Object Oriented Programming)/
- I did this project to help me and my students better understand how JS libraries, such Splide() and Tabby() work. 
- I made this without jQuery -- just pure Vanilla JS. It is therefore extemely lightweight: the BrianSlider.js file is a mere 3 kb; the css, only 2 kb. The brian-slider-data.js file is 7 kb. It includes an array of 15 objects of 5 properties each: year, img, alt, snd (sound file) and capt (caption). The html file that holds the slideshow is 1 kb.
- In addition to images, the slideshow supports captions and mp3 audio files. All files are provided for the default 15-slide presentation (History of Coffee). The sample sl
- The slideshow has Next >> and Prev << buttons, as well as an Autoplay option. Click AUTO to have the slideshow run automatically. 
- It uses an "ended" event on the Audio object to cue up the next slide by calling the next() function, recursively. 
- In this example, the audio consists of my voiceover, reading the captions aloud.
The data consists of an array of objects called coffeeHistArray, which is the only thing in coffee-data.js. 
- The OOP Class is the BrianSlides.js, an object of which needs to be instantiated in the HTML, where '.slideshow' is some ul you choose to receive the slides as li tags.

```js
const slideshow = new BrianSlider(objArr, '.slideshow');
slideshow.load();
```

- Click >> to hear the first slide play, then >> to get the next slide.
- Click << for the previous slide.
- Click AUTO for autoplay (the button says STOP while autoplay is in progress).
- Click STOP to stop autoplay and go back to using the >> and << buttons.
- Unlike so many Class files, BrianSlider.js is NOT minified, so programmers can analyze the code.
