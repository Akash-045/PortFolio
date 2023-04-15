import { IconType } from "react-icons"

export type IsService = {
    title:string
    about:string,
    Icon:IconType
    }

    export type IsSkill = {
name : string
 level:string
  Icon:IconType
}
export type Iproject ={
  id:number
  name:string
  description:string
  image_path:string
  deployed_url:string
  github_url:string
  category:Category[]
  key_techs:string[]
}

export type Category = "React" | "Nodejs" | "Express" | "MongoDB" | "Redux" | "Typescript" | "HTML" | "CSS"