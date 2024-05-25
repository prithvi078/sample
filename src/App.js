import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from "./components/Header";
import Board from "./components/Board";
import EmptyBoard from "./components/EmptyBoard";
import Login from './pages/Login';
import boardsSlice from "./redux/boardsSlice";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const theme = useSelector((state) => state.theme);
  const activeBoard = boards.find((board) => board.isActive);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!activeBoard && boards.length > 0)
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/board">
            {isLoggedIn ? (
              boards.length > 0 ? (
                <>
                  <Header />
                  <Board />
                </>
              ) : (
                <EmptyBoard type="add" />
              )
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
