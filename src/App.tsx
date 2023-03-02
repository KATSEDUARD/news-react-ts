import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { useAppDispatch } from './store/hooks';
import { isAuthorized } from './store/slices/userSlice';
import { useEffect } from 'react';
import { useAppSelector } from './store/hooks';
import { RootState } from './store/store';


function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(isAuthorized());
    }, [dispatch, user.isLoggedIn]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
