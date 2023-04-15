import Image from "next/image";
import { services } from "../data";
import React from "react";
import ServiceCard from "@/components/ServiceCard";

import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'

export default function index() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        Aspiring Full-stack Developer, skilled in working with both the back-end
        and front-end of systems to develop fully-fledged platforms with
        databases, and servers. Proven skills to work with development teams to
        ideate, Familiarity with software development tools, Eagerness to learn
        and contribute to the team effort, Communication skills and
        Problem-solving skills. Passionate about developing and managing
        well-functioning databases and applications, writing effective APIs, and
        testing software to ensure responsiveness and efficiency.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide" style={{color:"black"}}>
          Skills
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async(context:GetServerSidePropsContext)=>{
  //calculation

  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  const data = await res.json()
  console.log("SERVER",services)
  return {
    props:{
      endpoint:process.env.VERCEL_URL
    }
  }

}
/*export const getStaticProps = async(context:GetStaticPropsContext)=>{
  //calculation

  const res = await fetch("http://localhost:3000/api/services")
  const data = await res.json()
  console.log("SERVER",services)
  return {
    props:{
      services:data.services,
    },
  }
  }*/
