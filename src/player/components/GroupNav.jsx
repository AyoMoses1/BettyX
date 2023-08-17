import {
  useDisclosure,
  Text,
  // Link,
  Icon,
  Collapse,
  Box,
  HStack,
} from '@chakra-ui/react';
import Clickable from './Clickable';
import NavMole from './NavMole';
import { NavLink } from 'react-router-dom';
import { VscTriangleDown, VscTriangleRight } from 'react-icons/vsc';

const GroupNav = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const navs = props.sub.map((item) => <SingleNav {...item} key={item.path} />);

  return (
    <Box mb={3} pl="4">
      <Clickable height="auto" onClick={onToggle}>
        <HStack mb={2}>
          <Icon as={props.main?.icon} color="white" />
          <Text variant="nav">{props.main.name}</Text>
        </HStack>
      </Clickable>
      <HStack>
        <Collapse in={isOpen} animateOpacity>
          {navs}
        </Collapse>
      </HStack>
    </Box>
  );
};

export const SingleNav = ({ path, name, icon, isSub }) => {
  return (
    <NavLink to={path}>
      <NavMole name={name} icon={icon} isSub={isSub} />
    </NavLink>
  );
};

export default GroupNav;
