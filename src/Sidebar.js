import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventIcon from '@material-ui/icons/Event';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloudIcon from '@material-ui/icons/Cloud';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={GroupIcon} title="Friends"/>
            <SidebarRow Icon={FavoriteIcon} title="Favorites"/>
            <SidebarRow Icon={PostAddIcon} title="Pages"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Watch"/>
            <SidebarRow Icon={EventIcon} title="Events"/>
            <SidebarRow Icon={SportsEsportsIcon} title="Games"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Info"/>
            <SidebarRow Icon={CloudIcon} title="Weather"/>
            <SidebarRow Icon={ExpandMoreIcon} title="More"/>
        </div>
    )
}

export default Sidebar;
