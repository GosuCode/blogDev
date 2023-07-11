import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './HOC/navigation/Layout';
import Index from './component/Index';
import SinglePost from './component/posts/SinglePost';
import CreatePost from './component/createPost/CreatePost';
import About from './component/pages/About';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/createPost' element={<CreatePost />} />
            <Route exact path='/postById' element={<SinglePost />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
