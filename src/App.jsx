import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './HOC/navigation/Layout';
import Index from './component/Index';
import SinglePost from './component/singlePost/SinglePost';
import About from './component/pages/About';
import "react-toastify/dist/ReactToastify.css";
import Login from './component/Authentication/Login';
import Register from './component/Authentication/Register';
import CreatePost from './component/createPost/CreatePost';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/createPost2' element={<CreatePost />} />
            <Route exact path='/postById/:id' element={<SinglePost />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
