import netflix from "../../../assets/netflix.png"
import nxtwatch from "../../../assets/nxtwatch.png"
import jobby from "../../../assets/jobby.png"
import reactIcons from "../../../svg/reactjs.svg"
import tailwindIcons from "../../../svg/tailwindcsssvg.svg"
import mongodbIcons from "../../../svg/mongo-svg.svg"
import javascriptIcons from "../../../svg/javascriptsvg.svg"
import typeScriptIcons from "../../../svg/typescriptsvg.svg"
import IconsNext from "../../../svg/icons8-nextjs-480.png"
import cssIcons from "../../../svg/css-3svg.svg"
import framerIcon from "../../../svg/framer.svg"
import nodeIcon from "../../../svg/nodejs-icon.svg"
import scssIcon from "../../../svg/scss.svg"
export const projects = [
  {
    id: 1,
    title: "NetflixGPT",
    des: "Developed a high-performance Netflix clone with a modern tech stack, optimized for both desktop and mobile devices",
    img: netflix,
    iconLists: [reactIcons,nodeIcon, javascriptIcons,framerIcon, tailwindIcons, cssIcons],
    link: "https://netflix-gpt-tej.vercel.app/",
  },
  {
    id: 2,
    title: "Nxt Watch",
    des: "Developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories ,such as Trending, Gaming, and Saved videos, and search for specific content while customising the visual theme",
    img: nxtwatch,
    iconLists: [ reactIcons, javascriptIcons,nodeIcon,cssIcons],
    link: "https://ytejanxtwatch.ccbp.tech",
  },
  {
    id: 3,
    title: "Jobby App",
    des: "Developed a comprehensive job search solution, Jobby App.",
    img: jobby,
    iconLists: [reactIcons, scssIcon, cssIcons, nodeIcon,javascriptIcons],
    link: "https://tejajobby.ccbp.tech",
  },
];