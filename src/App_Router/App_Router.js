import { Routes, Route } from "react-router-dom";
import AllMeetup from "../pages/AllMeetup";
import NewMeetup from "../pages/NewMeetup";
import FavoritesPage from "../pages/Favorites";
import Layout from "../components/Router/layout/Layout";
function App_Router() {
  //localhost:3000
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetup />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App_Router;
