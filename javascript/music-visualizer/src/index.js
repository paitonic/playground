import './styles.css';
import World from './World';
import AudioAnalyser from './audio/AudioAnalyser';
import AudioPlayer from './audio/AudioPlayer';
import Cubes from './effects/Cubes';
import config from '../config.json';


const audioPlayer = new AudioPlayer();
audioPlayer.mount(document.body);

const fftSize = 256;
const audioAnalyser = new AudioAnalyser(audioPlayer.audioElement, fftSize);

const world = new World(audioAnalyser);

// effects
const cubesEffect = new Cubes(audioAnalyser.getFrequencyBinCount());
world.addEffect(cubesEffect);

audioPlayer.play(
    `https://api.soundcloud.com/tracks/${config.TRACK_ID}/stream?client_id=${config.SOUNDCLOUD_API_KEY}`
);

world.render();