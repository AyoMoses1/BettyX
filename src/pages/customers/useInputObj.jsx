import { useGetAllAgents } from 'pages/agents/queryHooks';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useInputObj = () => {
  const { data } = useGetAllAgents();
  const [agents, setAgents] = useState([]);

  const getArray = () => {
    const ret = data?.map((item) => ({
      value:  item?.accountId,
      name: item?.accountId,
      key: item?._id
    }));
    setAgents(ret ?? []);
  };

  useEffect(() => {
    getArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const inputObjList = (register, handleChange, state, agentDetails,  errors) => [
    {
      name: 'numberOfAccounts',
      label: 'How many accounts to add?',
      type: 'number',
      value: state?.numberOfAccounts,
      onChange: handleChange,
      register: register('numberOfAccounts', {
        required: 'Please enter a valid number of accounts',
      }),
      // isInvalid: !!errors?.accountId,
      // error: errors?.accountId,
    },
    {
      name: 'agent',
      label: 'Under which agent',
      placeholder: 'Search Accounts...',
      type: 'select',
      value: agentDetails?.agent,
      onChange: handleChange,
      options: agents,
      register: register('agent', {
        required: 'Please select a parent agent',
      }),
      isInvalid: !!errors?.agent,
      error: errors?.agent,
    },
    {
      name: 'prefix',
      label: 'Agent Prefix',
      type: 'text',
      onChange: handleChange,
      value: agentDetails.prefix,
      register: register('prefix', {
        required: 'Please enter a valid prefix',
      }),
    },
    {
      name: 'nextAccountStart',
      label: 'Next Account Start',
      type: 'number',
      onChange: handleChange,
      value: agentDetails.nextAccountStart,
      register: register('nextAccountStart'),
    },
  ];

  return {
    inputObjList: inputObjList,
  };
};

export default useInputObj;
