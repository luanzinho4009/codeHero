import { useEffect } from "react";
import { api } from "./services/api";
import md5 from "js-md5";
import env from './endpoints.config';

function App() {
  const PUBLIC_KEY = env.REACT_APP_PUBLIC_KEY;
  const PRIVATE_KEY = env.REACT_APP_PRIVATE_KEY;
  const limit = 10;
  const offset = 0;

  useEffect(() => {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
    api
    .get(`characters?ts=${timestamp}&offset=${offset}&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
    .then(response => console.log(response.data.data.results));
  });

  return (
    <div className="App">
      <h1> code Hero</h1>
    </div>
  );
}

export default App;
