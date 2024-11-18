import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";

const socials = {
  twitter: {
    link: "https://x.com/deezgames_?s=21",
    icon: <FaXTwitter />,
  },
  youtube: {
    link: "https://www.youtube.com/@DeezGuise",
    icon: <FaYoutube />,
  },
  instagram: {
    link: "https://www.instagram.com/deezgamesofficial/",
    icon: <BsInstagram />,
  },
  tiktok: {
    link: "https://www.tiktok.com/@deezgames_?is_from_webapp=1&sender_device=pc",
    icon: <BsTiktok />,
  },
  linkedin: {
    link: "https://www.linkedin.com/company/deez-games/",
    icon: <BsLinkedin />,
  },
};

export default socials;
