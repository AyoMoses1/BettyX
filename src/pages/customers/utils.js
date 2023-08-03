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
  return array
};
