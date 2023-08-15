import { VscFileMedia } from 'react-icons/vsc';
import {
  FaCar,
  FaClock,
  FaFootballBall,
  FaGolfBall,
  FaRunning,
  FaStackOverflow,
  FaStar,
  FaWarehouse,
} from 'react-icons/fa';
import { FiClock, FiGlobe, FiUsers } from 'react-icons/fi';
import { GrClock, GrUserWorker } from 'react-icons/gr';
import {
  BiBaseball,
  BiBasketball,
  BiCameraMovie,
  BiCricketBall,
  BiFootball,
  BiLogoXing,
  BiSolidCameraMovie,
  BiStar,
  BiTennisBall,
  BiTv,
  BiWallet,
} from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdSportsMartialArts } from 'react-icons/md';

const paths = {
  home: '/',
  login: '/login',
  upNext: 'up-next',
  featured: 'featured',
  liveStreaming: 'live-streaming',
  commercialLive: 'commercial-live',
  baseball: 'baseball',
  football: 'football',
  basketball: 'basketball',
  soccer: 'soccer',
  golf: 'golf',
  martialArts: 'martial-arts',
  boxing: 'boxing',
  tennis: 'tennis',
  autoRacing: 'auto-racing',
  cricket: 'cricket',
};

export const NavNames = {
  upNext: 'Up Next',
  featured: 'Feaured',
  liveStreaming: 'Live Streaming',
  commercialLive: 'Commercial Live',
  baseball: 'Baseball',
  football: 'Football',
  basketball: 'Basketball',
  soccer: 'Soccer',
  golf: 'Golf',
  martialArts: 'Martial Arts',
  boxing: 'Boxing',
  tennis: 'Tennis',
  autoRacing: 'Auto Racing',
  cricket: 'Cricket',
};
export const PageTitles = {
  upNext: 'Up Next',
  featured: 'Feaured',
  liveStreaming: 'Live Streaming',
  baseball: 'Baseball',
  football: 'Football',
  basketball: 'Basketball',
  soccer: 'Soccer',
  golf: 'Golf',
  martialArts: 'Martial Arts',
  boxing: 'Boxing',
  tennis: 'Tennis',
  autoRacing: 'Auto Racing',
  cricket: 'Cricket',
};

export const pathObject = [
  {
    main: { name: NavNames.upNext, path: paths.upNext, icon: FiClock },
    sub: [],
  },
  {
    main: {
      name: NavNames.featured,
      path: paths.featured,
      icon: BiStar,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.liveStreaming,
      path: paths.liveStreaming,
      icon: BiTv,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.commercialLive,
      path: paths.commercialLive,
      icon: BiSolidCameraMovie,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.basketball,
      path: paths.basketball,
      icon: BiBasketball,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.baseball,
      path: paths.baseball,
      icon: BiBaseball,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.football,
      path: paths.football,
      icon: FaFootballBall,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.soccer,
      path: paths.soccer,
      icon: BiFootball,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.golf,
      path: paths.golf,
      icon: FaGolfBall,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.martialArts,
      path: paths.martialArts,
      icon: MdSportsMartialArts,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.boxing,
      path: paths.boxing,
      icon: FiGlobe,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.tennis,
      path: paths.tennis,
      icon: BiTennisBall,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.autoRacing,
      path: paths.autoRacing,
      icon: FaCar,
    },
    sub: [],
  },
  {
    main: {
      name: NavNames.cricket,
      path: paths.cricket,
      icon: BiCricketBall,
    },
    sub: [],
  },
];

export default paths;
