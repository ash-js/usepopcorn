import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppV1 from './App-v1';
// import StartRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppV1 />
  </React.StrictMode>
);
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StartRating color="red" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
