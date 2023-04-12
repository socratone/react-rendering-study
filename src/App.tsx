import './styles/global.css';

import { Link, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ContextPage from './pages/context';
import MemoPage from './pages/memo';
import ReduxPage from './pages/redux';

export default function App() {
  return (
    /* Routes nest inside one another. Nested route paths build upon
    parent route paths, and nested route elements render inside
    parent route elements. See the note about <Outlet> below. */
    <Routes>
      <Route
        path="/"
        element={<Layout navItemPaths={['memo', 'context', 'redux']} />}
      >
        <Route index element={<HomePage />} />
        <Route path="memo" element={<MemoPage />} />
        <Route path="context" element={<ContextPage />} />
        <Route path="redux" element={<ReduxPage />} />

        {/* Using path="*" means "match anything", so this route
        acts like a catch-all for URLs that we don't have explicit
        routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function HomePage() {
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
