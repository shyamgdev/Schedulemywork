// IMPORT CSS
import './css/Sidebar.css';
// IMPORT FROM REACT
import { useContext } from 'react';
// IMPORT MATERIAL ICONS
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
// import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// IMPORT CONTEXT
import { SidebarContext } from '../GlobalContext';
// IMPORT COMPONENTS
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const sidebarCx = useContext(SidebarContext);
  return(
    <section id="sidebar-section" minisidebar={!sidebarCx.sidebar ? 'true' : 'false'}>
      <SidebarItem miniSidebar={!sidebarCx.sidebar} to="/" title="My work" Icon={CalendarMonthOutlinedIcon}/>
      {
        // <SidebarItem miniSidebar={!sidebarCx.sidebar} to="/reminders" title="Reminders" Icon={NotificationsNoneOutlinedIcon}/>
        // <SidebarItem miniSidebar={!sidebarCx.sidebar} to="/edit" title="Edit" Icon={ModeEditOutlineOutlinedIcon}/>
        // <SidebarItem miniSidebar={!sidebarCx.sidebar} to="/archive" title="Archive" Icon={ArchiveOutlinedIcon}/>
      }
      <SidebarItem miniSidebar={!sidebarCx.sidebar} to="/trash" title="Trash" Icon={DeleteOutlinedIcon}/>
    </section>
  );
}