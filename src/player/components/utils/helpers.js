import {
  BiArrowToTop,
  BiCalendarStar,
  BiEnvelope,
  BiGlobe,
  BiLogoWikipedia,
  BiPowerOff,
  BiShuffle,
} from 'react-icons/bi';
import { FaPaintBrush } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

export const menuItems = [
  {
    name: 'Language',
    icon: BiGlobe,
  },
  {
    name: 'Odds Display',
    icon: BiArrowToTop,
  },
  {
    name: 'Betting Style',
    icon: BiShuffle,
  },
  {
    name: 'Scores',
    icon: BiCalendarStar,
  },
  {
    name: 'Rules',
    icon: BiLogoWikipedia,
  },
  {
    name: 'Mail',
    icon: BiEnvelope,
  },
  {
    name: 'Settings',
    icon: FiSettings,
  },
  {
    name: 'Personalize It',
    icon: FaPaintBrush,
  },
];

export const decimalToAmericanOdds = (input) => {
  let americanOdds;
  if(!input){
    return "no odd"
  }
  if (input >= 2) {
    americanOdds = Math.round((input - 1) * 100);
    if (americanOdds >= 0) {
      return `+${americanOdds}`;
    } else {
      return americanOdds.toString(); // No plus sign for negative numbers
    }
  } else {
    americanOdds = Math.round(-100 / (input - 1));
    return americanOdds.toString(); // No plus sign for negative numbers
  }
};


export const decimalToFraction = (input) => {
  if (input) {
    const numbers = input.split(',').map(Number);
    const tolerance = 1.0e-6;
    let results = [];

    for (const decimal of numbers) {
      const sign = decimal < 0 ? '-' : '';
      const absDecimal = Math.abs(decimal);
      let wholePart = Math.floor(absDecimal);
      let fractionPart = absDecimal - wholePart;

      if (Math.abs(fractionPart) < tolerance) {
        results.push(sign + wholePart);
        continue;
      }

      const maxDenominator = 10000; // Adjust as needed for precision

      for (let denominator = 2; denominator <= maxDenominator; denominator++) {
        const numerator = Math.round(fractionPart * denominator);
        if (Math.abs(numerator / denominator - fractionPart) < tolerance) {
          if (wholePart === 0) {
            results.push(sign + numerator + '/' + denominator);
          } else {
            results.push(
              sign + wholePart + ' ' + numerator + '/' + denominator
            );
          }
          break;
        }
      }
    }

    return results.join(', ');
  }
};
