const generateRandomPassword = () => {
  const length = 8;
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

const createArrayOfObjects = (num, startIndex, prefix) => {
  // if (typeof num !== 'number' || num < 0) {
  //   throw new Error('Input must be a non-negative number');
  // }

  return Array.from({ length: Number(num) }, (_, index) => ({
    accountId: `${prefix}${index + startIndex}`,
    password: generateRandomPassword(),
  }));
};

// const randomPassword = generateRandomPassword();

export const handleCustomerPayload = (data) => {
  const array = createArrayOfObjects(
    data.numberOfAccounts,
    data.nextAccountStart,
    data.prefix
  );
  return array;
};

export const formatDateAndTime = (timestamp) => {
  const timestampInMilliseconds = timestamp * 1000;
  const date = new Date(timestampInMilliseconds);
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
  return formattedTime;
};

export const formatDateAndTimeTwo = (timestamp) => {
  const timestampInMilliseconds = timestamp * 1000;
  const date = new Date(timestampInMilliseconds);

  // Define an array of day names in the desired format
  const dayNames = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];

  // Get the day of the week and month using the arrays
  const dayOfWeek = dayNames[date.getDay()];
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();

  const formattedDate = `${dayOfWeek}, ${month.toUpperCase()} ${day}`;
  return formattedDate;
};

export const callApi = () => {
  fetch(
    'https://habibet-ag.onrender.com/api/events/view-leagues?sport_id=1&page=2'
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('API call error:', error);
    });
};
