import './styles/global.css';

import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';

const NAV_ITEMS = ['memo', 'context'];

const routes = NAV_ITEMS.map((navItem) => {
  return { path: navItem, Component: lazy(() => import(`./pages/${navItem}`)) };
});

export default function App() {
  return (
    <Suspense>
      {/* Routes nest inside one another. Nested route paths build upon
      parent route paths, and nested route elements render inside
      parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout navItems={NAV_ITEMS} />}>
          <Route index element={<Home />} />

          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Using path="*" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
