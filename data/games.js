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
        link: "https://www.youtube.com/@Deez_Games",
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
    name: "Babushcats",
    description:
      "Babushcats puts you in the shoes of a grandma managing a shelter for stray cats! From washing and feeding to grooming and pampering, keep those cats content and entertained amidst the chaos. Get ready for a wild ride of cat antics and endless laughs!",
    trailer: "https://www.youtube.com/embed/VhNXNGHMxrY",
    platforms: [
      {
        platform: twitter,
        link: "https://twitter.com/BabushCatsGame",
      },
      {
        platform: youtube,
        link: "https://www.youtube.com/@Deez_Games",
      },
    ],

    images: {
      backgroundPath: "/babushcatsGameTile.png",
      logo: "",
    },
  },
};

export default games;
