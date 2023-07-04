import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor('agent', {
    header: 'Agent',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('password', {
    header: 'Password',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('accepted', {
    header: 'Accepted(PST)',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: 'Descripton',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('risk', {
    header: 'Accepted(PST)',
    cell: (info) => {
      const value = info.getValue();
      const textColor = 'red';
      return <span style={{ color: textColor }}>${value}</span>;
    },
  }),
  columnHelper.accessor('win', {
    header: 'Accepted(PST)',
    cell: (info) => {
      const value = info.getValue();
      const textColor = 'green';
      return <span style={{ color: textColor }}>${value}</span>;
    },
  }),
];

export const data = [
  {
    agent: 'JAV1123',
    customer: 'BALL890',
    password: 'Gryboski24',
    accepted: 'June 5, 2023 6:00 AM',
    description: 'Parlay -3 Teams',
    risk: 99,
    win: 385,
  },
  {
    agent: 'XKJ5432',
    customer: 'PLAY456',
    password: 'Smith2023',
    accepted: 'July 10, 2023 2:30 PM',
    risk: 75,
    win: 225,
    description: 'Parlay -3 Teams',
  },
  {
    agent: 'QWE7890',
    customer: 'SPIN123',
    password: 'Johnson777',
    accepted: 'May 15, 2023 9:45 AM',
    risk: 80,
    win: 320,
    description: 'Parlay -3 Teams',
  },
  {
    agent: 'ABC4567',
    customer: 'BET890',
    password: 'Thompson123',
    accepted: 'April 25, 2023 8:15 AM',
    risk: 60,
    win: 180,
    description: 'Parlay -3 Teams',
  },
  {
    agent: 'XYZ3210',
    customer: 'WIN777',
    password: 'Davis2023',
    accepted: 'August 2, 2023 1:20 PM',
    risk: 70,
    win: 280,
    description: 'Parlay -3 Teams',
  },
  {
    agent: 'PLM9876',
    customer: 'LUCK222',
    password: 'Harris456',
    accepted: 'July 17, 2023 11:10 AM',
    risk: 85,
    win: 255,
    description: 'Parlay -3 Teams',
  },
  {
    agent: 'DEF6543',
    customer: 'BET456',
    password: 'Clark888',
    accepted: 'June 20, 2023 3:40 PM',
    risk: 95,
    win: 475,
    description: 'Parlay -3 Teams',
  },
  {
    agent: 'MNO4321',
    customer: 'SPIN789',
    password: 'Adams555',
    accepted: 'May 8, 2023 7:55 AM',
    risk: 65,
    win: 195,
    description: 'Parlay -3 Teams',
  },
  {
    agent: 'RST0987',
    customer: 'PLAY321',
    password: 'Walker2023',
    accepted: 'August 15, 2023 4:30 PM',
    risk: 90,
    win: 450,
    description: 'Parlay -3 Teams',
  },
];
