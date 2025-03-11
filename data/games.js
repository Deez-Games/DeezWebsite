import { BsNintendoSwitch, BsSteam, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const steam = {
  name: "steam",
  icon: <BsSteam />,
};
const nintendo = {
  name: "nintendo",
  icon: <BsNintendoSwitch />,
};
const tiktok = {
  name: "tiktok",
  icon: <BsTiktok />,
};
const youtube = { name: "youtube", icon: <BsYoutube />, link: "" };
const twitter = {
  name: "twitter",
  icon: <FaXTwitter />,
};

const games = {
  gauntler: {
    name: "Gauntler",
    description:
      "Avoid numerous dangers using the power of Mystical Gauntlets and make your way to the summit, braving increasingly harder challenges.",
    trailer: "https://www.youtube.com/embed/Kt2Dkf8WS_I",
    platforms: [
      {
        platform: steam,
        link: "https://store.steampowered.com/app/2789380/Gauntler/",
      },
      {
        platform: nintendo,
        link: "https://www.nintendo.com/store/products/gauntler-switch/",
      },
      {
        platform: youtube,
        link: "https://www.youtube.com/@DeezGamesOfficial",
      },
      {
        platform: tiktok,
        link: "https://www.tiktok.com/@gauntler_game/",
      },
    ],

    images: {
      backgroundPath: "/gauntler1.png",
      logo: "",
    },
  },
  babushcats: {
    name: "BabushCats",
    description:
      "BabushCats is a cozy sim where you play as a grandma running a cat shelter. Care for the cats by day, bond with them, battle their nightmares at night and defeat their biggest fear, BUZZ. Blending Tamagotchi-style pet care with dynamic combat, it offers both relaxing and intense gameplay.",
    trailer: "https://www.youtube.com/watch?v=YzuWufkHJ5s",
    platforms: [
      {
        platform: twitter,
        link: "https://twitter.com/BabushCatsGame",
      },
      {
        platform: youtube,
        link: "https://www.youtube.com/@DeezGamesOfficial",
      },
    ],

    images: {
      backgroundPath: "/babushcatsBaner.webp",
      logo: "",
    },
  },
};

export default games;
