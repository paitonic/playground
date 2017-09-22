class AudioAnalyser {
    constructor(audioElement, fastFourierTransformSize) {
        const audioCtx = new AudioContext();

        // read stream
        const source = audioCtx.createMediaElementSource(audioElement);

        // create analyser
        // all audio data will be passed thru the analyser node
        this.analyser = audioCtx.createAnalyser();
        this.analyser.fftSize = fastFourierTransformSize;

        // source -> analyser -> speakers
        source.connect(this.analyser);
        this.analyser.connect(audioCtx.destination);

        // initialize Uint8 array to store audio data
        this.audioData = new Uint8Array(this.analyser.frequencyBinCount);
    }

    getByteFrequencyData() {
        this.analyser.getByteFrequencyData(this.audioData);
        return this.audioData;
    }

    getFrequencyBinCount() {
        return this.analyser.frequencyBinCount;
    }
}


export default AudioAnalyser;
