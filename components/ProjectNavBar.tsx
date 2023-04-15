import { Category } from '@/type'
import React, { FunctionComponent } from 'react'

const NavItem:FunctionComponent<{value:Category | 'All',handlerFilterCategory:Function;active:string}> = ({value,handlerFilterCategory,active}) => {

    let classname = "capitalize cursor-pointer hover:text-green"
    if(active === value){
        classname += " text-green"
    }
  return (
    <li className=
    {classname} onClick={()=>handlerFilterCategory(value)}>
      {value}
    </li>
  )
}


const ProjectNavBar:FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props)=>  {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
<NavItem value='All'{...props}/>
<NavItem value='React'{...props}/>
<NavItem value='MongoDB'{...props}/>
<NavItem value='Nodejs'{...props}/>

        </div>
    )
}

export default ProjectNavBar
