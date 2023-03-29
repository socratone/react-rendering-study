import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import NavItem from './NavItem';

type LayoutProps = {
  navItemPaths: string[];
};

const StyledNav = styled.nav`
  padding: 1rem;
  border-bottom: 1px solid gainsboro;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 0.5rem;
  }
`;

const StyledMain = styled.main`
  padding: 1rem;
`;

const Layout: React.FC<LayoutProps> = ({ navItemPaths }) => {
  return (
    <>
      {/* A "layout route" is a good place to put markup you want to
      share across all the pages on your site, like navigation. */}
      <StyledNav>
        <ul>
          {navItemPaths.map((path) => (
            <NavItem key={path} to={path} />
          ))}
        </ul>
      </StyledNav>

      <StyledMain>
        {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Layout;
