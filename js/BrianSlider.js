class BrianSlider {

    constructor(objArr, slider) {

        this.objArr = objArr;
        this.len = objArr.length; // total number of slides
        this.i = -1; // index of objArr
        this.slider = document.querySelector(slider); // ul
        this.prevBtn = document.querySelector('#prev');
        this.prevBtn.addEventListener('click', this.prev.bind(this));
        this.nextBtn = document.querySelector('#next');
        this.nextBtn.addEventListener('click', this.next.bind(this));
        this.autoBtn = document.querySelector('#auto');
        this.autoBtn.addEventListener('click', this.auto.bind(this));
        this.rwndBtn = document.querySelector('#rwnd');
        this.rwndBtn.addEventListener('click', this.rewind.bind(this));
        this.leftPos = 0; // slider start position
        this.sound = new Audio();
        this.autoPlay = false;
    }

    rewind() {
        this.sound.pause();
        this.i = -1;
        let intrvl = setInterval(() => {
            if(this.leftPos <= 90) {
                this.leftPos += 30;
                this.slider.style.left = this.leftPos + "px";
            } else {
                clearInterval(intrvl);
                this.slider.style.left = "5px";
                this.leftPos = 5;
            }
        }, 15);
    }

    auto() {
        console.log('auto() AUTO');
        this.autoBtn.textContent = !this.autoPlay ? 'STOP' : 'AUTO';
        this.autoPlay = !this.autoPlay;
        this.autoPlay ? this.next() : this.sound.pause();
        console.log('auto() this.autoPlay:', this.autoPlay);
    }

    load() {
        this.objArr.forEach(obj => {
            this.slider.innerHTML += `<li class="slide">
            <img src="./images/${obj.img}" alt="${obj.alt} onclick="read()">
            <div>${obj.capt}</div></li>`;
        });        
    }

    prev() {
        if(this.i > 0) this.i--; // if i is not already 0, subtract 1
        let dist = 0; // slider distance moved
        let intrvl = setInterval(() => {
            if(dist <= 333 && this.leftPos <= 0) {
                dist += 11;
                this.leftPos += 11;
                this.slider.style.left = this.leftPos + "px";
                if(this.objArr[this.i].mp3) {
                    this.sound.pause();
                    this.sound.src = `./audio/${this.objArr[this.i].snd}`;
                    this.sound.play();
                }
            } else {
               clearInterval(intrvl); 
            }
        }, 15);
        if(this.objArr[this.i].snd) {
            this.sound.src = `./audio/${this.objArr[this.i].snd}`;
            this.sound.play();
        }
    }

    next() {
        console.log('next() this.autoPlay', this.autoPlay);
        let dist = 0;
        this.i++;
        if(this.i == this.len) {
            this.i = 1;
            this.leftPos = 0;
            this.slider.style.left = this.leftPos + "px";
        }
        let intrvl = setInterval(() => {
            if(this.i > 1 && dist <= 333 && this.leftPos >= -((this.len-1)*405-110)) {
                dist += 11;
                this.leftPos -= 11; 
                this.slider.style.left = this.leftPos + "px";
            } else {
                clearInterval(intrvl); 
            }
        }, 15); 
        if(this.objArr[this.i].snd) { // if snd not null, there's a sound file
            this.sound.pause();
            this.sound.src = `./audio/${this.objArr[this.i].snd}`;
            this.sound.play();
            if(this.autoPlay) { // if autoPlay is true
                this.sound.onended = () => { // when the sound ends
                    console.log(`sound ${this.i} ended -- this.next()`);
                    this.next(); // call the next() function again, recursively
                }
            }
        } else { // no sound, yet autoplay, so wait 10 seconds before next slide
            console.log('no sound, yet autoplay, so wait 10 seconds before next slide');
            setTimeout(() => this.next(), 10000);
        }
    }
}