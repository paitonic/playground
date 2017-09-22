class AudioPlayer {
    constructor() {
        const audioElement = new Audio();
        audioElement.controls = true;
        audioElement.hidden = false;
        audioElement.crossOrigin = 'anonymous';

        this.audioElement = audioElement;
    }

    play(url) {
        this.audioElement.src = url;
        this.audioElement.play();
    }

    mount(domElement) {
        domElement.appendChild(this.audioElement);
    }
}


export default AudioPlayer;