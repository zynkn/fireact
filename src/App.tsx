/* src/App.js */
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsExports from "./aws-exportss";

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState<any>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key:any, value:any) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData:any = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  console.log(awsExports);
  return (
    <div style={styles.container}>
      <h2>Amplify Todos {process.env.NODE_ENV}</h2>
      <p>CUSTOM >>> { process.env.REACT_APP_CUSTOM_TEXT}</p>
      <p>awsExports.api_key >>>  {awsExports.api_key}</p>
      <AmplifySignOut />
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name} 
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo:any, index:number) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles:any = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: "column", justifyContent: "center", padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 800 },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default (App);