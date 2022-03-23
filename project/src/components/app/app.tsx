import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../hooks/PrivateRoute';
import { AppRoute } from '../../use/routes';
import AddReview from '../addReview/AddReview';
import FilmPage from '../film-page/film-page';
import Main from '../main/main';
import MyList from '../myList/MyList';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/Player';
import SignIn from '../signIn/SignIn';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main genre="Drama" name="The Grand Budapest Hotel" year="2014" />}
        />
        <Route
          path={AppRoute.SingIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path={AppRoute.PageNotFound}
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
