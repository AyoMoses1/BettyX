import { BiArrowToTop, BiCalendarStar, BiEnvelope, BiGlobe, BiLogoWikipedia, BiPowerOff, BiShuffle } from "react-icons/bi";
import { FaPaintBrush } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export const menuItems = [
  {
    name: "Language",
    icon: BiGlobe,
  },
  {
    name: "Odds Display",
    icon: BiArrowToTop,
  },
  {
    name: "Betting Style",
    icon: BiShuffle,
  },
  {
    name: "Scores",
    icon: BiCalendarStar,
  },
  {
    name: "Rules",
    icon: BiLogoWikipedia,
  },
  {
    name: "Mail",
    icon: BiEnvelope,
  },
  {
    name: "Settings",
    icon: FiSettings,
  },
  {
    name: "Personalize It",
    icon: FaPaintBrush,
  },
]