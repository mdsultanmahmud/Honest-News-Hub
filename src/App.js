import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Category from './Pages/Category/Category/Category';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Map from './Pages/Map/Map';
import News from './Pages/News/News/News';
import Register from './Pages/Register/Register';
import SecretRoute from './route/SecretRoute';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('https://honest-news-hub-server.vercel.app/news')
        },
        { 
          path:'/category/:categoryId',
          loader: ({params}) => fetch(`https://honest-news-hub-server.vercel.app/category/${params.categoryId}`),
          element:<SecretRoute><Category></Category></SecretRoute>
        },
        {
          path:'/news/:newsId',
          element:<SecretRoute><News></News></SecretRoute>,
          loader: ({params}) => fetch(`https://honest-news-hub-server.vercel.app/news/${params.newsId}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },{
          path:'/map',
          element:<Map></Map>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
