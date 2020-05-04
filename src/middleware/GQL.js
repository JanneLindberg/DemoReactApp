import gql from "graphql-tag";

export const listEventsQuery = gql(`
  query q0($projId: String!, $sk: String!) {
    selectAppSupportEntry (projId: $projId, sk: $sk ) {
      items {
        projId
        sk
        title
        description
        content
      }
    }
  }
`);


export const eventsUpdateSubscriptionQuery = gql(`
  subscription s2($sk: String!) {
    onUpdateAppSupportEntry(sk: $sk) {
      projId
      sk
      title
      description
      content
      comment
      note
    }
}`);

export const monthMenussubscriptionQuery = gql(`
  subscription Sub {
    onUpdateMonthMenu {
	    accountId
	    menuId
	    title
	    description
	    day
	    name
	    link
    }
}`);

export const monthMenuCreateSubscriptionQuery = gql(`
  subscription Sub {
    onCreateMonthMenu {
	    accountId
	    menuId
	    title
	    description
	    day
	    name
	    link
    }
}`);

export const createUserCommentEntry = gql(`
  mutation createUserComment($appId: String!, $comment: String!, $email: String) {
    createUserCommentEntry(input: {
      appId: $appId,
      comment: $comment,
      email: $email
    }) {
      appId
      sk
    }
}`);

