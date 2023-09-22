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

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const decimalToFractionForSpread = (decimal) => {
  if (isNaN(decimal)) {
    return 'Invalid input';
  }

  if (decimal === 0) {
    return '0';
  }

  let wholePart = Math.floor(decimal);
  decimal -= wholePart;

  let numerator, denominator;

  if (decimal !== 0) {
    const gcd = greatestCommonDivisor(decimal * 10000, 10000);
    numerator = (decimal * 10000) / gcd;
    denominator = 10000 / gcd;
  } else {
    numerator = 0;
    denominator = 1;
  }

  if (numerator === 0) {
    return wholePart.toString();
  } else if (wholePart === 0) {
    return `${numerator}/${denominator}`;
  } else {
    return `${wholePart} ${numerator}/${denominator}`;
  }
};

export const calculateSpreadHandicap = (team, handicap) => {
  const parts = handicap.split(',');

  // If there's only one part and it's "0" or "0.0", return "PK"
  if (parts.length === 1 && parseFloat(parts[0]) === 0) {
    return team === 'home' ? '+PK' : '-PK';
  } else if (parts.length === 2 && parseFloat(parts[0]) === 0) {
    return team === 'home'
      ? `+PK,${decimalToFractionForSpread(parseFloat(parts[1]))}`
      : `-PK,${decimalToFractionForSpread(parseFloat(parts[1]))}`;
  }

  // Check if the handicap has a negative sign
  const hasNegativeSign = handicap.includes('-');

  // Determine the sign for home and away based on team
  const homeSign = hasNegativeSign ? '-' : '';
  const awaySign = hasNegativeSign ? '' : '-';

  // Construct the result based on the number of parts
  let result = '';
  if (parts.length === 1 && team === 'home') {
    if (parts[0].includes('-')) {
      const choppedString = parts[0].slice(1);
      result = `${homeSign}${decimalToFractionForSpread(choppedString)}`;
    } else {
      result = `${homeSign}${decimalToFractionForSpread(parts[0])}`;
    }
  } else if (parts.length === 1 && team === 'away') {
    if (parts[0].includes('-')) {
      const choppedString = parts[0].slice(1);
      result = `${awaySign}${decimalToFractionForSpread(choppedString)}`;
    } else {
      result = `${awaySign}${decimalToFractionForSpread(parts[0])}`;
    }
  } else if (parts.length === 2 && team === 'home') {
    if (parts[0].includes('-')) {
      const choppedString = parts[0].slice(1);
      result = `${homeSign}${decimalToFractionForSpread(
        choppedString
      )},${decimalToFractionForSpread(parts[1])}`;
    } else {
      result = `${homeSign}${decimalToFractionForSpread(
        parts[0]
      )},${decimalToFractionForSpread(parts[1])}`;
    }
  } else if (parts.length === 2 && team === 'away') {
    if (parts[0].includes('-')) {
      const choppedString = parts[0].slice(1);
      result = `${awaySign}${decimalToFractionForSpread(
        choppedString
      )},${decimalToFractionForSpread(parts[1])}`;
    } else {
      result = `${awaySign}${decimalToFractionForSpread(
        parts[0]
      )},${decimalToFractionForSpread(parts[1])}`;
    }
  }

  return result;
};

const dTF = (decimal) => {
  if (typeof decimal !== 'string' || !decimal.includes('.')) {
    return decimal; // Return as is if it's not a decimal or doesn't contain a period.
  }

  const [wholePart, decimalPart] = decimal.split('.');
  const integerPart = parseInt(wholePart, 10);

  if (decimalPart === '0') {
    return integerPart.toString(); // Return the whole number if the decimal part is "0".
  }

  const decimalValue = parseFloat(`0.${decimalPart}`);

  if (!isNaN(integerPart) && !isNaN(decimalValue)) {
    const gcd = greatestCommonDivisor(decimalValue * 10000, 10000);
    const numerator = (decimalValue * 10000) / gcd;
    const denominator = 10000 / gcd;

    if (integerPart === 0) {
      return `${numerator}/${denominator}`;
    } else {
      return `${integerPart} ${numerator}/${denominator}`;
    }
  }

  return decimal;
};

// Output: "3" (no change)

export const calculateSpreadHandicapForParlay = (team, handicap) => {
  const parts = handicap.split(',');

  // If there's only one part and it's "0" or "0.0", return "PK"
  if (parts.length === 1 && parseFloat(parts[0]) === 0) {
    return team === 'home' ? '+PK' : '-PK';
  } else if (parts.length === 2 && parseFloat(parts[0]) === 0) {
    return team === 'home'
      ? `+${decimalToFractionForSpread(parseFloat(parts[1]))}`
      : `-${decimalToFractionForSpread(parseFloat(parts[1]))}`;
  }

  // Check if the handicap has a negative sign
  const hasNegativeSign = handicap.includes('-');

  // Determine the sign for home and away based on team
  const homeSign = hasNegativeSign ? '-' : '';
  const awaySign = hasNegativeSign ? '' : '-';

  // Construct the result based on the number of parts
  let result = '';
  if (parts.length === 1 && team === 'home') {
    if (parts[0].includes('-')) {
      const choppedString = parts[0].slice(1);
      result = `${homeSign}${decimalToFractionForSpread(choppedString)}`;
    } else {
      result = `${homeSign}${decimalToFractionForSpread(parts[0])}`;
    }
  } else if (parts.length === 1 && team === 'away') {
    if (parts[0].includes('-')) {
      const choppedString = parts[0].slice(1);
      result = `${awaySign}${decimalToFractionForSpread(choppedString)}`;
    } else {
      result = `${awaySign}${decimalToFractionForSpread(parts[0])}`;
    }
  } else if (parts.length === 2 && team === 'home') {
    if (parts[0].includes('-')) {
      result = `${homeSign}${dTF(parts[1])}`;
    } else {
      result = `${homeSign}${dTF(parts[1])}`;
    }
  } else if (parts.length === 2 && team === 'away') {
    if (parts[0].includes('-')) {
      result = `${awaySign}${dTF(parts[1])}`;
    } else {
      result = `${awaySign}${dTF(parts[1])}`;
    }
  }

  return result;
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
          wholeFraction:
            fractionPart === 0
              ? sign + wholePart
              : sign +
                wholePart +
                ' ' +
                wholePart +
                ' ' +
                fractionPart.toFixed(1),
          decimal: numbers[0].toFixed(1),
        };
      }

      const maxDenominator = 10000;

      for (let denominator = 2; denominator <= maxDenominator; denominator++) {
        const numerator = Math.round(fractionPart * denominator);
        if (Math.abs(numerator / denominator - fractionPart) < tolerance) {
          return {
            wholeFraction:
              sign + wholePart + ' ' + numerator + '/' + denominator,
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
          wholeFraction:
            fractionPart === 0
              ? sign + wholePart
              : sign +
                wholePart +
                ' ' +
                wholePart +
                ' ' +
                fractionPart.toFixed(1),
          decimal: numbers[1].toFixed(1),
        };
      }

      const maxDenominator = 10000;

      for (let denominator = 2; denominator <= maxDenominator; denominator++) {
        const numerator = Math.round(fractionPart * denominator);
        if (Math.abs(numerator / denominator - fractionPart) < tolerance) {
          return {
            wholeFraction:
              sign + wholePart + ' ' + numerator + '/' + denominator,
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
