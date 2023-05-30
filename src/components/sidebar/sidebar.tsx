import React from 'react';
import Nav1 from './img/navigation1.svg'
import Nav2 from './img/navigation2.svg'
import Nav3 from './img/navigation3.svg'
import Nav4 from './img/navigation4.svg'
import Nav5 from './img/navigation5.svg'
import Nav6 from './img/navigation6.svg'
import Nav7 from './img/navigation7.svg'
import Nav8 from './img/navigation8.svg'
import Nav9 from './img/navigation9.svg'
import Nav10 from './img/navigation10.svg'

const Sidebar = () => {
    const icons = [Nav1,Nav2,Nav3,Nav4,Nav5,Nav6,Nav7,Nav8,Nav9,Nav10]
  return (
    <aside className="sidebar">
            <nav className="sidebar__navigation">
                <ul className="sidebar__navigation-list">
                    {icons.map((i,index)=>(
                    <li key={index} className="sidebar__navigation-item">
                        <a href="" className="sidebar__navigation-item--link">
                            <img src={icons[index]} alt="" className="sidebar__navigation-item--img" />
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </aside>
  );
}

export default Sidebar;

