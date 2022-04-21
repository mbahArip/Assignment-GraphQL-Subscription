import { gql } from '@apollo/client';

export const GET_TODO = gql`
	query GET_TODO {
		todolist {
			id
			title
			isComplete
		}
	}
`;

export const GET_FILTERED_TODO = gql`
	query GET_FILTERED_TODO($id: Int!) {
		todolist(where: { id: { _eq: $id } }) {
			id
			title
			isComplete
		}
	}
`;
