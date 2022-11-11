import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function SidebarItem(props) {
  const {title, Icon, to, miniSidebar} = props;
  const location = useLocation();
  return (
    <Link to={to}>
      <div className="sidebar-item" title={title} active={location.pathname === to ? 'true' : 'false'} minisidebar={miniSidebar ? 'true' : 'false'}>
        <div className="sidebar-item-icon">
          <Icon/>
        </div>
        <p className="sidebar-item-name">{title}</p>
      </div>
    </Link>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.object,
  to: PropTypes.string,
  miniSidebar: PropTypes.bool
};