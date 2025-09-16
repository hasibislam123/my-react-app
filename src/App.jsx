import './App.css'
import Counter  from './counter'; 
import BatsMan from './Batsman'
import Users from './Users';
import Friends from './friends';
import { Suspense } from 'react';
import Posts from './post';


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json());

// const fetchFriends = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json());

const fetchPosts = async() => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {
  
  const postsPromise = fetchPosts();

  function handelclick() {
    alert('I am clicked.');
  }

  const handelclick3 = () => {
    alert('Click2');
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback = {<h1>Posts are coming please.....</h1>}>
          <Posts postsPromise ={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends coming for treat...</h3>}>
        <Friends friendsPromise={fetchFriends} />
      </Suspense> */}

      <BatsMan />
      <Counter />
      <button onClick={handelclick}>Click Me</button>
      <button onClick={handelclick3}>Click Me 2</button>
    </>
  )
}

export default App;
