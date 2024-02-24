import { BsNintendoSwitch, BsSteam, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const steam = {
  name: "steam",
  icon: <BsSteam />,
  link: "https://store.steampowered.com/app/2789380/Gauntler/",
};
const nintendo = {
  name: "nintendo",
  icon: <BsNintendoSwitch />,
  link: "https://www.nintendo.com/store/products/gauntler-switch/",
};
const tiktok = {
  name: "tiktok",
  icon: <BsTiktok />,
  link: "https://www.tiktok.com/@gauntler_game",
};
const youtube = { name: "youtube", icon: <BsYoutube />, link: "" };
const twitter = {
  name: "twitter",
  icon: <FaXTwitter />,
  link: "https://twitter.com/babushcatsgame",
};

const games = {
  gauntler: {
    name: "Gauntler",
    description:
      "Avoid numerous dangers using the power of Mystical Gauntlets and make your way to the summit, braving increasingly harder challenges.",
    trailer: "https://www.youtube.com/embed/Kt2Dkf8WS_I",
    platforms: [nintendo, steam, tiktok, youtube],

    images: {
      backgroundPath: "/gauntler1.png",
      logo: "",
    },
  },
  babushcats: {
    name: "Babushcats",
    description:
      "Take on the role of a lovely elderly grandmother. Your main task in this game is to take care of the cute kittens that have arrived at your cosy home.",
    trailer: "https://www.youtube.com/embed/VhNXNGHMxrY",
    platforms: [twitter],

    images: {
      backgroundPath: "/babushcatsGameTile.png",
      logo: "",
    },
  },
};

export default games;
