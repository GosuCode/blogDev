import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './HOC/navigation/Layout';
import Index from './component/Index';
import SinglePost from './component/singlePost/SinglePost';
import About from './component/pages/About';
import CreatePost2 from './component/createPost/CreatePost2';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/createPost2' element={<CreatePost2 />} />
            <Route exact path='/postById/:id' element={<SinglePost />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
