import {Routes, Route} from 'react-router-dom'
import {Login} from './Pages/Login';
import Home from './Pages/Home';
import {Register} from './Pages/Register';
import NewBlog from './Components/NewBlog';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   //useQuery,
//  // gql
// } from "@apollo/client";
// const client = new ApolloClient({
//   uri: 'https://localhost:4000',
//   cache: new InMemoryCache()
// });
function App() {
  return (
    <>
    {/* <ApolloProvider client ={client}> */}
      <Routes>
       <Route path= '/' element={<Login />}></Route>
       <Route path= '/Home' element={<Home />}></Route>
       <Route path= '/NewBlog' element={<NewBlog />}></Route>
       <Route path= '/Register' element={<Register />}></Route>
      </Routes>
      {/* </ApolloProvider> */}
    </>
  );
}

export default App;
