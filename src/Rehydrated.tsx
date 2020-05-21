
/*
  
  ref: https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/448

*/

import React, { useEffect, useState } from 'react';
import AWSAppSyncClient from 'aws-appsync';

import { useApolloClient } from '@apollo/client';

const Rehydrated: React.FC = ({ children }) => {
  const client = useApolloClient();
  console.log(client);
  const [rehydrated, setRehydrated] = useState(false);
  useEffect(() => {
    (async () => {
      //await (client as AWSAppSyncClient<any>).hydrated();
      setRehydrated(true);
    })();
  }, [client]);
  return (
    <div className={`awsappsync ${rehydrated ? 'awsappsync--rehydrated' : 'awsappsync--rehydrating'}`}>
      {rehydrated ? children : <span>Loading...</span>}
    </div>
  );
};
export default Rehydrated;



// import React, { useContext, useEffect, useState } from 'react';
// import { getApolloContext } from 'react-apollo';
// import AWSAppSyncClient from 'aws-appsync';

// const Rehydrated = ({ children }) => {
//   const { client } = useContext(getApolloContext());
//   const [rehydrated, setState] = useState(false);

//   useEffect(() => {
//     if (client instanceof AWSAppSyncClient) {
//       (async () => {
//         await client.hydrated();
//         setState(true);
//       })();
//     }
//   }, [client]);
//   return rehydrated ? <>{children}</> : null;
// };

// export default Rehydrated;