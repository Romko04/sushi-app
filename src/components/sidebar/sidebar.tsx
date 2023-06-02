import React from 'react';
import {ReactComponent as Nav1} from './img/navigation1.svg'
import {ReactComponent as Nav2} from './img/navigation2.svg'
import {ReactComponent as Nav3} from './img/navigation3.svg'
import {ReactComponent as Nav4} from './img/navigation4.svg'
import {ReactComponent as Nav5} from './img/navigation5.svg'
import {ReactComponent as Nav6} from './img/navigation6.svg'
import {ReactComponent as Nav7} from './img/navigation7.svg'
import {ReactComponent as Nav8} from './img/navigation8.svg'
import {ReactComponent as Nav9} from './img/navigation9.svg'
import {ReactComponent as Nav10} from './img/navigation10.svg'

const Sidebar = () => {
    const icons = [Nav1,Nav2,Nav3,Nav4,Nav5,Nav6,Nav7,Nav8,Nav9,Nav10]
  return (
    <aside className="sidebar">
            <nav className="sidebar__navigation">
                <img src="../../assets/img/svg/facebook.svg" alt="" />
                <ul className="sidebar__navigation-list">
                    {icons.map((Icon,index)=>(
                    <li key={index} className="sidebar__navigation-item">
                        <a href="" className="sidebar__navigation-item--link">
                        <Icon className='sidebar__navigation-item--img' key={index}/>
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </aside>
  );
}

export default Sidebar;

