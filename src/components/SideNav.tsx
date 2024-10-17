import React from 'react'
import Category from './SideNav/Category';
import Rating from './SideNav/Rating';
import DateRelease from './SideNav/DateRelease';


interface SideNavProps {
    handleFilterChange: (name: string, value: string) => void;
    isOpen: boolean;
    
}

const SideNav: React.FC<SideNavProps> = ({ handleFilterChange, isOpen }) => {

  return (
    <aside className={`sidebar fixed top-16 left-0 md:h-3/4 w-[200px] overflow-auto z-20 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gradient-to-r from-slate-900 to-slate-700 text-white`}>
        <section className="bg-gradient-to-r from-slate-900 h-full to-slate-700 text-white border-r-[2px_solid_#e5e5e5] flex flex-col p-4 z-10">
            <div className="mb-6">
                <a href='#' ><img src="/public/movie house.png" className='w-[8rem] ml-[18px] rounded-[100px]' /></a>
            </div>
            <Category handleFilterChange={handleFilterChange}/>
            <Rating handleFilterChange={handleFilterChange}/>
            <DateRelease handleFilterChange={handleFilterChange}/>
        </section>
    </aside>
  )
}

export default SideNav;