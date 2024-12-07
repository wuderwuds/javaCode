import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { Todos } from './pages/Todos/todos';
import { CreateTodo } from './pages/CreateTodo/createTodo';
import { store } from './redux/store';
import {Provider} from 'react-redux'
import { EditTodo } from './pages/EditTodo/editTodo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Todos/>
      },
      {
        path: '/createtodo',
        element: <CreateTodo/>
      },
      {
        path: '/edit/:idTodo',
        element: <EditTodo/>
      },
      // {
      //   path: '/todo/:idTodo',
      //   element: <CurentTodo/>,
      //   children: [
      //   {
      //     path: 'edit',
      //     element: <EditTodo/>
      //   }
      // ]
      // }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
     <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);


