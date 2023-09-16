import {
  BiArrowToTop,
  BiCalendarStar,
  BiEnvelope,
  BiGlobe,
  BiLogoWikipedia,
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
  if (!input) {
    return 'no odd';
  }
  if (input >= 2) {
    americanOdds = Math.round((input - 1) * 100);
    if (americanOdds >= 0) {
      return `+${americanOdds}`;
    } else {
      return americanOdds.toString();
    }
  } else {
    americanOdds = Math.round(-100 / (input - 1));
    return americanOdds.toString();
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

      const maxDenominator = 10000;

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

export const decimalToFractionForParlay = (input) => {
  if (input) {
    const numbers = input.split(',').map(Number);
    const tolerance = 1.0e-6;

    if (numbers.length === 1) {
      const sign = numbers[0] < 0 ? '-' : '';
      const absDecimal = Math.abs(numbers[0]);
      let wholePart = Math.floor(absDecimal);
      let fractionPart = absDecimal - wholePart;

      if (Math.abs(fractionPart) < tolerance) {
        return {
          wholeFraction: (fractionPart === 0 ? sign + wholePart : sign + wholePart + ' ' + wholePart + ' ' + fractionPart.toFixed(1)),
          decimal: numbers[0].toFixed(1),
        };
      }

      const maxDenominator = 10000;

      for (let denominator = 2; denominator <= maxDenominator; denominator++) {
        const numerator = Math.round(fractionPart * denominator);
        if (Math.abs(numerator / denominator - fractionPart) < tolerance) {
          return {
            wholeFraction: sign + wholePart + ' ' + numerator + '/' + denominator,
            decimal: numbers[0].toFixed(1),
          };
        }
      }
    } else if (numbers.length === 2) {
      const wholePart = Math.floor(numbers[0]);
      const sign = numbers[1] < 0 ? '-' : '';
      const absDecimal = Math.abs(numbers[1]);
      let fractionPart = absDecimal - Math.floor(absDecimal);

      if (Math.abs(fractionPart) < tolerance) {
        return {
          wholeFraction: (fractionPart === 0 ? sign + wholePart : sign + wholePart + ' ' + wholePart + ' ' + fractionPart.toFixed(1)),
          decimal: numbers[1].toFixed(1),
        };
      }

      const maxDenominator = 10000;

      for (let denominator = 2; denominator <= maxDenominator; denominator++) {
        const numerator = Math.round(fractionPart * denominator);
        if (Math.abs(numerator / denominator - fractionPart) < tolerance) {
          return {
            wholeFraction: sign + wholePart + ' ' + numerator + '/' + denominator,
            decimal: numbers[1].toFixed(1),
          };
        }
      }
    }
  }

  return ''; // Return an empty string for invalid input
};



export const calculatePotentialWin = (odd, betAmount) => {
  const oddNumber = parseFloat(odd);
  if (isNaN(oddNumber)) {
    return 0;
  }
  if (oddNumber > 0) {
    return (betAmount / 100) * oddNumber;
  } else if (oddNumber < 0) {
    return betAmount / (Math.abs(oddNumber) / 100);
  } else {
    return 0;
  }
};

export const roundUpToTwoDecimalPlaces = (number) => {
  return Math.ceil(number * 100) / 100;
};

export const transformString = (inputString) => {
  // Replace commas with periods
  const stringWithPeriods = inputString.replace(/,/g, ',');

  // Split the string by space to separate the integer and fraction parts
  const parts = stringWithPeriods.split(' ');

  // Check if there is a fraction part
  if (parts.length === 2) {
    const fraction = parts[1].split('/');
    if (fraction.length === 2) {
      const numerator = parseFloat(fraction[0]);
      const denominator = parseFloat(fraction[1]);
      if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
        const decimalFraction = numerator / denominator;
        // Replace the fraction part with the decimal representation
        parts[1] = decimalFraction.toFixed(1);
      }
    }
  }

  // Join the parts back together with a comma
  const transformedString = parts.join(',');

  return transformedString;
};

const inputString = '2,2 1/2';
const transformedString = transformString(inputString);
console.log(transformedString); // Output: "2.0,2.5"

export const refineParlayPayload = (data) => {
  const editedArrayOfGames = data.games.map((item) => {
    const { predictedLogo, label, gameInfo, ...others } = item;
    return others;
  });
  let accumulatedOdds = 1;
  data.games.forEach((item) => {
    accumulatedOdds = item.odd * accumulatedOdds;
  });
  return {
    ...data,
    games: editedArrayOfGames,
    accumulatedOdds: roundUpToTwoDecimalPlaces(accumulatedOdds),
  };
};

export const deleteNestedProperty = (obj, propertiesToDelete) => {
  for (const propToDelete of propertiesToDelete) {
    const parts = propToDelete.split('.');
    let currentObj = obj;

    for (let i = 0; i < parts.length - 1; i++) {
      currentObj = currentObj[parts[i]];
      if (!currentObj) return;
    }

    delete currentObj[parts[parts.length - 1]];
  }
};
