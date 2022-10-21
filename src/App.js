import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Category from './Pages/Category/Category/Category';
import Home from './Pages/Home/Home';
import News from './Pages/News/News/News';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/category/:categoryId',
          element:<Category></Category>
        },
        {
          path:'/news/:newsId',
          element:<News></News>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
