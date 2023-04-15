import { fadeInUp, stagger } from "@/animations";
import ProjectCard from "@/components/ProjectCard";
import ProjectNavBar from "@/components/ProjectNavBar";
import { projects as projectsData } from "@/data";
import { Category } from "@/type";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Projects() {
  
  const[projects,setProjects]=useState(projectsData)
  const[active,setActive]=useState("All")
  const [showDetail, setShowDetail] = useState<number|null>(null);
  
  const handlerFilterCategory = (category:Category | "All") => {
    if (category === "All") {
      setProjects(projectsData)
      setActive(category)
      return;
    }
    const newArray = projects.filter((project)=> project.category.includes(category))
    setProjects(newArray)
    setActive(category)
  }
  return (
    <div className="px-5 py-2 " style={{height:"65vh"}}>
      <ProjectNavBar handlerFilterCategory={handlerFilterCategory} active={active}/>
      <motion.div className="flex grid-cols-12 gap-2 my-2 " variants={stagger}>
        {projects.map((project) => (
          <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4" variants={fadeInUp}
          key={project.name}>
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}  />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
