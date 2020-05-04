import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import gql from "graphql-tag";

import util from 'util';

const appSyncConfig =  {
  "aws_appsync_graphqlEndpoint": process.env.REACT_APP_AWS_API_2,
  "aws_appsync_region": "eu-west-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": process.env.REACT_APP_AWS_API_KEY_2,
};


export const listLocationsQuery = gql(`
  query {
    listLocations {
    items {
      sk
      Country
      Description
    }
  }
}`);



export const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,

  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
  disableOffline: false,

  cacheOptions: {
    dataIdFromObject: (obj) => {

      console.log('cache opts' + util.inspect(obj));
      
      let id = defaultDataIdFromObject(obj);

      if (!id) {
        const { __typename: typename } = obj;

        console.log('typename:' + typename)
        
        switch (typename) {
          
        case 'Comment':
          return `${typename}:${obj.commentId}`;
          
        case '_Location':
          console.log('X1')
          return `${typename}:${obj.sk}`;
        case '_LocationConnection':
          console.log('X2')
          return `${typename}:${obj.sk}`;
          
        default:
          return id;
        }
      }

      return id;
    }
  },
  
  offlineConfig: {
    callback: (err, succ) => {
      if(err) {
        const { mutation } = err;

        console.warn(`ERROR for ${mutation}`, err);
      } else {
        const { mutation, variables } = succ;

        console.info(`SUCCESS for ${mutation}`, succ);
      }
    },
  }

});

export default client
