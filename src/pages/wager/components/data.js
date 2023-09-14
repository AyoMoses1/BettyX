export const wagerData = (gameInfo) => {
  return [
    {
      title: 'Scheduled',
      value: `${gameInfo.date}, ${gameInfo.time}`,
    },
    {
      title: 'Selection',
      value:
        gameInfo.market === 1
          ? 'MoneyLine'
          : gameInfo.market === 2
          ? 'Spread'
          : 'Total',
    },
    {
      title: 'Game Notes',
      value: `${gameInfo.league}`,
    },
  ];
};
