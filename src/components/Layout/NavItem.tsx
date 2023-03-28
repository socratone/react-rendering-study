import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ to }) => {
  const getLinkLabel = () => {
    const words = to.split(/[/-]+/);
    const capitalizedWords = words
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join('');
  };

  return (
    <li>
      <Link to={to}>{getLinkLabel()}</Link>
    </li>
  );
};

export default NavItem;
