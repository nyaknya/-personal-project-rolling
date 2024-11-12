import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import PostDetailPage from './pages/PostPage/Detail';
import PostEditPage from './pages/PostPage/Edit';
import PostMessagePage from './pages/PostPage/Message';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/post" element={<PostPage />}>
            <Route index path="/:id" element={<PostDetailPage />} />
            <Route index path="/:id/edit" element={<PostEditPage />} />
            <Route index path="/:id/message" element={<PostMessagePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
