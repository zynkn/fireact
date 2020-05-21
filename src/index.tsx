import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from "aws-amplify";
import awsExports from "./aws-mobile";
import './styles/base.scss';
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { createAuthLink, AUTH_TYPE } from 'aws-appsync-auth-link'
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
// import  Rehydrated  from './Rehydrated';

Amplify.configure(awsExports);



const config= {
  url: awsExports.aws_appsync_graphqlEndpoint as string,
  region: awsExports.aws_appsync_region as string,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsExports.aws_appsync_apiKey as string,
  }
} as any;

const link = ApolloLink.from([(createAuthLink(config) as unknown) as ApolloLink, (createSubscriptionHandshakeLink(config) as unknown) as ApolloLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
