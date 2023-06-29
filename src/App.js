import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Agents from './pages/agents'
import Customers from './pages/customers'
import Dashboard from './pages/dashboard'
import Games from './pages/games'
import Messages from './pages/messages'
import Rules from './pages/rules'
import Settings from './pages/settings'
import Statistics from './pages/statistics'
import SignIn from './pages/auth'
import { paths } from './common/Paths';
import Layout from "./common/Layout";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path={paths.login} element={<SignIn />}></Route>
        <Route
          path={paths.home}
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route path={paths.home} element={<Dashboard />} />
          <Route path={paths.games} element={<Games />} />
          <Route path={paths.messages} element={<Messages />} />
          <Route path={paths.rules} element={<Rules />} />
          <Route path={paths.settings} element={<Settings />} />
          <Route path={paths.statistics} element={<Statistics />} />
          <Route path={paths.agents} element={<Agents />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();

  if (!localStorage.jwt_token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={paths.login} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default App;
