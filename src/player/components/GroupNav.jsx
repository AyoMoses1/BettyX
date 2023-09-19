import {
  useDisclosure,
  Text,
  Icon,
  Collapse,
  Box,
  HStack,
} from '@chakra-ui/react';
import Clickable from './Clickable';
import NavMole from './NavMole';
import { NavLink } from 'react-router-dom';

const GroupNav = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const navs = props.sub.map((item) => (
    <SingleNav {...item} key={item.id} isOpen={isOpen} />
  ));

  return (
    <Box mb={3}  borderTop="1px solid" borderColor="#393838">
      <Clickable height="auto" onClick={onToggle}>
        <HStack mt={2} mb={isOpen ? 4 : ''} pl="4">
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

export const SingleNav = ({
  path,
  name,
  icon,
  isSub,
  leagueId,
  sport_id,
  isOpen,
}) => {
  return (
    <NavLink to={path} width="100%">
      <NavMole
        name={name}
        icon={icon}
        isSub={isSub}
        path={path}
        id={leagueId}
        sportId={sport_id}
        isOpen={isOpen}
      />
    </NavLink>
  );
};

export default GroupNav;
