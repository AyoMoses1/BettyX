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
import useGetAllLeagues from 'common/useGetAllLeagues';

const paths = {
  home: '/',
  login: '/login',
  upNext: 'up-next',
  featured: 'featured',
  liveStreaming: 'live-streaming',
  commercialLive: 'commercial-live',
  baseball: 'baseball',
  football: '/football',
  basketball: 'basketball',
  soccer: '/soccer',
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

export const soccerNavs = {
  epl: 'English Premier League',
  fwwc: 'FIFA Women World Cup',
  uefa: 'UEFA Europa Conference League',
  laliga: 'Spain La Liga',
  bundesliga: 'German Bundesliga',
};

export const useNav = () => {
  const { footballLeagues, soccerLeagues } = useGetAllLeagues();
  const pathObject = [
    {
      main: {
        name: NavNames.upNext,
        path: paths.upNext,
        icon: FiClock,
        sport_id: 1,
      },
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
      main: { name: NavNames.soccer, icon: BiFootball, sport_id: 1 },
      sub: soccerLeagues
        ? soccerLeagues?.results?.map((item) => {
            return {
              name: item.name,
              path: paths.soccer,
              icon: CgProfile,
              leagueId: item.id,
              sport_id: 1,
            };
          })
        : [],
    },
    {
      main: {
        name: NavNames.liveStreaming,
        path: paths.liveStreaming,
        icon: BiTv,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.commercialLive,
        path: paths.commercialLive,
        icon: BiSolidCameraMovie,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.basketball,
        path: paths.basketball,
        icon: BiBasketball,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.baseball,
        path: paths.baseball,
        icon: BiBaseball,
        sport_id: 1,
      },
      sub: [],
    },
    {
      main: { name: NavNames.football, icon: FaFootballBall },
      sub: footballLeagues
        ? footballLeagues?.results?.map((item) => {
            return {
              name: item.name,
              path: paths.football,
              icon: CgProfile,
              leagueId: item.id,
              sport_id: 12,
            };
          })
        : [],
    },
    {
      main: {
        name: NavNames.golf,
        path: paths.golf,
        icon: FaGolfBall,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.martialArts,
        path: paths.martialArts,
        icon: MdSportsMartialArts,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.boxing,
        path: paths.boxing,
        icon: FiGlobe,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.tennis,
        path: paths.tennis,
        icon: BiTennisBall,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.autoRacing,
        path: paths.autoRacing,
        icon: FaCar,
        sport_id: 2,
      },
      sub: [],
    },
    {
      main: {
        name: NavNames.cricket,
        path: paths.cricket,
        icon: BiCricketBall,
        sport_id: 2,
      },
      sub: [],
    },
  ];
  return {
    pathObject,
  };
};

export default paths;
