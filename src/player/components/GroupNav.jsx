import {
  useDisclosure,
  Text,
  // Link,
  Collapse,
  Box,
  HStack,
} from "@chakra-ui/react";
import Clickable from "./Clickable";
import NavMole from "./NavMole";
import { NavLink } from "react-router-dom";
import { VscTriangleDown, VscTriangleRight } from "react-icons/vsc";

const GroupNav = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const navs = props.sub.map((item) => <SingleNav {...item} key={item.path} />);

  return (
    <Box mb={3} pl="4">
      <Clickable height="auto" onClick={onToggle}>
        <HStack mb={2} ml={6}>
          <Text variant="navLink">{props.main.name}</Text>
          {isOpen ? <VscTriangleDown /> : <VscTriangleRight />}
        </HStack>
      </Clickable>
      <HStack ml={2}>
        <Collapse in={isOpen} animateOpacity>
          {navs}
        </Collapse>
      </HStack>
    </Box>
  );
};

export const SingleNav = ({ path, name, icon }) => {
  return (
    <NavLink to={path}>
      <NavMole name={name} icon={icon} />
    </NavLink>
  );
};

export default GroupNav;
