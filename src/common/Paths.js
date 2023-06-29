import { BiTimeFive } from "react-icons/bi";
import { FiHome, FiUser, FiLogOut } from "react-icons/fi";


export const paths= {
  home: '/',
  login: '/login',
  games: '/games',
  messages: '/messages',
  rules: '/rules',
  settings: '/settings',
  statistics: '/statistics',
  agents: '/agents',
}


export const pageTitles = {
  dashboard: 'Dashboard',
  timeclock: 'Time Clock',
  profile: 'Profile',
}


export const NavNames = {
  dashboard: 'Dashboard',
  profile: 'Profile',
  timeclock: 'Time Clock',
  logout: "Log Out"
}

export const pathObject = [
  { icon: FiHome, name: NavNames.dashboard, route: paths.home },
  { icon: FiUser, name: NavNames.profile, route: paths.profile },
  { icon: BiTimeFive, name: NavNames.timeclock, route: paths.timeclock },
  { icon: FiLogOut, name: NavNames.logout, route: paths.login },
];


export default paths;
