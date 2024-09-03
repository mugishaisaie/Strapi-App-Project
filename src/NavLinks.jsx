import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const NavLinks = () => {

    const {setPageId} = useGlobalContext();
  return (
    <div className='nav-links'>
        {sublinks.map((link)=>{
            const {page, pageId} = link;
            console.log(page)
            return(
                <button key={pageId} className='nav-link' onMouseEnter={()=>setPageId(pageId)}>{page}</button>
            )
        })}
      
    </div>
  )
}

export default NavLinks
