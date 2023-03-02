import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/mainPage/view';
import { NewsPage } from '../pages/newsPage/view';
import { Root } from '../components/root/view';
import { ProfilePage } from '../pages/profilePage/view';

export const router = createBrowserRouter([
    { 
        path: '/',
        element: <Root />,
        children: [
            { path: '/', element: <MainPage/> },
            { path: '/news', element: <NewsPage/> },
            { path: '/profile', element: <ProfilePage /> }
        ]
    },
]);

