import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";


export default function resume() {
  
   
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              FullStack Developer
            </h5>
            <p className="font-semibold">Integrify Academy(Remote)</p>
            <p className="my-3">
              I have Completed My FullStack Developer Course From Integrify Academy(Finland)
            </p>
          </div>
        </div>
        <div >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Fresher</h5>
            <p className="font-semibold">Integrify Academy</p>
            <p className="my-3">I have a strong foundation in developing web applications from scratch using HTML, CSS, React, and Redux technologies. I am also skilled in developing in both the backend and front end with the help of a mentor.</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tools, i) => (
              <Bar value={tools} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
