import './styles.css';
import { getWeatherData , generateLink} from './Modules/vCrossingApi';
console.log(`running program...!`);

const main = document.querySelector('.main-container');

const link =generateLink('london');

getWeatherData(link);

