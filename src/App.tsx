/* src/App.js */
import React, { useEffect, useState } from 'react'
import './App.scss';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { API, graphqlOperation, Auth, Hub } from 'aws-amplify'
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import HomePage from 'pages/HomePage';


function Home({user}:any){
  console.log(user);
  return (
    <main>
      <h1>HOME</h1>
      {
        user.isAuthenticated && <AmplifySignOut />
      }
      {
        user.isAuthenticated && <h2>{user.username}</h2>
      }
      <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})}>Open Google</button>
      {/* <button onClick={() => Auth.federatedSignIn({provider: Test.Google })}>Open Google</button> */}

      
    </main>
  )
}
function App(){
  const [ user, setUser ] = useState<any>(null);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {

    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
      console.log(data);
      if(event === 'signIn'){ 
        setAuthenticated(true);
        setUser(data);
      }
      if(event === 'signOut'){ 
        setUser(null);
        setAuthenticated(false);
        console.log("Not Signed In");
      }
    });
    Auth.currentAuthenticatedUser().then(user=>{
      console.log(user);
      setAuthenticated(true);
      setUser(user);
    }).catch(()=>{ setUser(null);setAuthenticated(false); console.log("Not Signed In") });
  }, [])
  return (
    <Router>
      <PublicRoute exact={true} path="/" user={{...user, isAuthenticated}}  component={HomePage} />
      <PrivateRoute path="/private" user={{...user, isAuthenticated}} component={()=><div>PRIVATE</div>} />
    </Router>
  );
};

function PublicRoute({component,user, ...rest}:any){
  return (
    <Route {...rest} render={ (props) => {
      console.log(user);
      console.log(props);
      return React.createElement(component, { ...props, user })
    }} />
  )
}
function PrivateRoute({component,user, ...rest}:any){
  return (
    <Route {...rest} render = { (props) => {
      return user.isAuthenticated ? React.createElement(component, {...props}) : <Redirect to="/" />
    }} />
  )
}



// const initialState = { name: '', description: '' }

// const App = () => {
//   const [formState, setFormState] = useState(initialState)
//   const [todos, setTodos] = useState<any>([])
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     fetchTodos()
//     Hub.listen("auth", ({ payload: { event, data } }) => {
//       console.log(event);
//       console.log(data);
//       if(event === 'signIn') setUser(data);
//       if(event === 'signOut') setUser(null);
//     });
//     Auth.currentAuthenticatedUser().then(user=>{
//       console.log(user);
//       setUser(user);
//     }).catch(()=>{ console.log("Not Signed In") });
//   }, [])

//   function setInput(key:any, value:any) {
//     setFormState({ ...formState, [key]: value })
//   }

//   async function fetchTodos() {
//     try {
//       const todoData:any = await API.graphql(graphqlOperation(listTodos))
//       const todos = todoData.data.listTodos.items
//       setTodos(todos)
//     } catch (err) { console.log('error fetching todos') }
//   }

//   async function addTodo() {
//     try {
//       if (!formState.name || !formState.description) return
//       const todo = { ...formState }
//       setTodos([...todos, todo])
//       setFormState(initialState)
//       await API.graphql(graphqlOperation(createTodo, {input: todo}))
//     } catch (err) {
//       console.log('error creating todo:', err)
//     }
//   }
//   console.log(user);
//   return (
//     <div style={styles.container}>
//       <h2>Amplify Todos {process.env.NODE_ENV}</h2>
//       {user && <h1>{user.username}</h1>}
//       <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})}>Open Google</button>

//       <AmplifySignOut />
//       <input
//         onChange={event => setInput('name', event.target.value)}
//         style={styles.input}
//         value={formState.name} 
//         placeholder="Name"
//       />
//       <input
//         onChange={event => setInput('description', event.target.value)}
//         style={styles.input}
//         value={formState.description}
//         placeholder="Description"
//       />
//       <button style={styles.button} onClick={addTodo}>Create Todo</button>
//       {
//         todos.map((todo:any, index:number) => (
//           <div key={todo.id ? todo.id : index} style={styles.todo}>
//             <p style={styles.todoName}>{todo.name}</p>
//             <p style={styles.todoDescription}>{todo.description}</p>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// const styles:any = {
//   container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: "column", justifyContent: "center", padding: 20 },
//   todo: {  marginBottom: 15 },
//   input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
//   todoName: { fontSize: 20, fontWeight: 800 },
//   todoDescription: { marginBottom: 0 },
//   button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
// }

export default App;