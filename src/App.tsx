import './styles/global.css';

import { Link, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Context from './pages/context';
import Memo from './pages/memo';

export default function App() {
  return (
    /* Routes nest inside one another. Nested route paths build upon
    parent route paths, and nested route elements render inside
    parent route elements. See the note about <Outlet> below. */
    <Routes>
      <Route path="/" element={<Layout navItemPaths={['memo', 'context']} />}>
        <Route index element={<Home />} />
        <Route path="memo" element={<Memo />} />
        <Route path="context" element={<Context />} />

        {/* Using path="*" means "match anything", so this route
        acts like a catch-all for URLs that we don't have explicit
        routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
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
