import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
	uri: 'https://arief-rachmawan-20.hasura.app/v1/graphql',
});
const wsLink = new GraphQLWsLink(
	createClient({
		url: 'wss://arief-rachmawan-20.hasura.app/v1/graphql',
	}),
);

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	wsLink,
	httpLink,
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default client;
