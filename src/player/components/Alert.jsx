import {
  Alert as AlertContainer,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const Alert = ({ title, description, status }) => {
  return (
    <AlertContainer status={status}>
      <AlertIcon />
      <AlertTitle color="black">{title}</AlertTitle>
      <AlertDescription color="black">{description}</AlertDescription>
    </AlertContainer>
  );
};

export default Alert;
