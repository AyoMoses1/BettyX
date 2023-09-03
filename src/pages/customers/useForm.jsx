import React from 'react';
import { useGetPlayerDetails } from './queryHooks';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useForm = () => {
  const params = useParams();
  const { data } = useGetPlayerDetails(params.customerId);
  const [state, setState] = useState(data);

  const handleChange = (e, section) => {
    if (section === 'switch') {
      const { name, checked } = e.target;
      setState((prev) => ({ ...prev, [name]: checked }));
    } else {
      const { name, value } = e.target;
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    setState(data);
  }, [data]);

  const formData = [
    {
      name: 'password',
      label: 'Password',
      value: state?.password,
    },
    {
      name: 'name',
      label: 'Name',
      value: state?.name ?? 'null',
    },
    {
      name: 'agentId',
      label: 'Agent',
      value: state?.agentId,
    },
    {
      name: 'accountStatus',
      label: 'accountStatus',
      value: state?.accountStatus,
    },
    {
      name: 'available',
      label: 'Available',
      value: state?.available,
    },
    {
      name: 'balance',
      label: 'Balance',
      value: state?.balance,
    },
  ];

  const formDataTwo = [
    {
      label: 'Max Straight Bet',
      value: 500,
    },
    {
      label: 'Max Per Offering',
      value: 500,
    },
    {
      label: 'Min Straight Bet',
      value: 10,
    },
    {
      label: 'Max Straight Bet',
      value: 500,
    },
    {
      label: 'Max Straight Bet',
      value: 500,
    },
    {
      label: 'Max Per Offering',
      value: 500,
    },
    {
      label: 'Min Straight Bet',
      value: 10,
    },
    {
      label: 'Max Straight Bet',
      value: 500,
    },
  ];

  const formSwitch = [
    { name: 'sportbook', label: 'Sportbook:', isChecked: state?.sportbook },
    { name: 'reportCasino', label: 'Casino', isChecked: state?.reportCasino },
    { name: 'racebook', label: 'Racebook:', isChecked: state?.racebook },
    { name: 'messaging', label: 'Messaging:', isChecked: state?.messaging },
    {
      name: 'dynamicLive',
      label: 'Dynamic Live:',
      isChecked: state?.dynamicLive,
    },
    // { name: '', label: 'Prop Plus:', isChecked: true },
    { name: 'lottery', label: 'Lottery', isChecked: state?.lottery },
  ];

  return {
    formData,
    formDataTwo,
    formSwitch,
    handleChange,
    state,
  };
};

export default useForm;
