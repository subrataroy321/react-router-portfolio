import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home'
import Blog from './components/Blog'
import Projects from './components/Projects'
import About from './components/About'

const postArray = [
  {title: 'Here goes a title1', body: 'Here goes the body1'},
  {title: 'Here goes a title2', body: 'Here goes the body2'},
  {title: 'Here goes a title3', body: 'Here goes the body3'},
  {title: 'Here goes a title4', body: 'Here goes the body4'},
  {title: 'Here goes a title5', body: 'Here goes the body5'},
  {title: 'Here goes a title6', body: 'Here goes the body6'}
]

function App() {
  let [posts, setPosts] = useState(postArray)

  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{"  "}
        <Link to="/projects">Projects</Link>{"  "}
        <Link to="/blog">Blogs</Link>{"  "}
        <Link to="/about">About</Link>{"  "}
      </nav>
      <Route exact path='/' component={Home}/>
      <Route path='/blog' render={() => <Blog posts={posts}/> } />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
    </div>
    </Router>
  );
}

export default App;
