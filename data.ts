import {RiComputerLine} from "react-icons/ri"
import {BsCircleFill} from "react-icons/bs"
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {Iproject, IsService, IsSkill} from "./type"

export const services : IsService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "Handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using  <b>Node API</b> ",
      },
      
      {
        Icon: AiOutlineAntDesign,
        title: "Css/TailwindCss",
        about:
          "Stunning user interface designer using <b>Css</b>  and  <b>TailwinCss</b> ",
      },
      
]

export const languages: IsSkill[] = [
  {
     Icon: BsCircleFill,
     name: 'Html',
     level: '95',
  },
  {
     Icon: BsCircleFill,
     name: 'Redux',
     level: '85',
  },
  {
     Icon: BsCircleFill,
     name: 'Javascript',
     level: '80',
  },
  {
     Icon: BsCircleFill,
     name: 'React',
     level: '70',
  },
  {
     Icon: BsCircleFill,
     name: 'Typescript',
     level: '80',
  },
  {
     Icon: BsCircleFill,
     name: 'Nodejs',
     level: '80',
  },
]

export const tools: IsSkill[] = [
  {
     Icon: BsCircleFill,
     name: 'TailwindCss',
     level: '85',
  },
  {
     Icon: BsCircleFill,
     name: 'Docker',
     level: '45',
  },
  {
     Icon: BsCircleFill,
     name: 'AWS',
     level: '60',
  },
  {
     Icon: BsCircleFill,
     name: 'Testing',
     level: '45',
  },
  {
   Icon: BsCircleFill,
   name: 'BashScripting',
   level: '45',
},

]

export const projects:Iproject[] = [{
   id:1,
   name:"A website application based on Country API",
   description:"The app displays a list of countries from an API using fetch and provides search functionality: countries can be searched and sorted by name, added to/removed from the favourite list and cart list. ",
image_path:"/images/CountryApi.jpeg",
deployed_url:"https://frontend-project-rosy.vercel.app",
github_url:"https://github.com/Akash-045",
category:["React","Redux"],
key_techs:["React","Material UI","Redux","Typescript","HTML","CSS"]
},
{
   id:2,
   name:"BookMe App",
   description:"The app displays a list of products from an API made on the server side(back-end).  ",
image_path:"/images/TravelImage.jpeg",
deployed_url:"https://bookme-m0zg.onrender.com/",
github_url:"https://github.com/Akash-045",
category:["Nodejs","Express"],
key_techs:["React","Material UI","Redux","Typescript","HTML","CSS","GoogleLogin","Passportjs","Nodejs","Express"]
},
{
   id:3,
   name:"ShoeVilla",
   description:"The app displays a list of products from an API made on the server side(back-end).  ",
image_path:"/images/ShoeVilla.jpeg",
deployed_url:"https://shoe-villa-frontend.onrender.com",
github_url:"https://github.com/Akash-045",
category:["Nodejs","Express"],
key_techs:["React","Material UI","Redux","Typescript","HTML","CSS","Nodejs","Express","MongoDB"] 
},
{
   id:4,
   name:"Ecommerce Website",
   description:"The app displays a list of products from an API using fetch and provides search functionality,Dark mode, add to cart, add to favourite, and delete items from the cart. ",
image_path:"/images/Ecommerce.jpeg",
deployed_url:"https://products-app-kohl.vercel.app/",
github_url:"https://github.com/Akash-045",
category:["React","Redux"],
key_techs:["React","Material UI","Redux","Typescript","HTML","CSS"] 
}
]