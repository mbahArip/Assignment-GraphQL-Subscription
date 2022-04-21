import { gql } from '@apollo/client';

export const SUBS_TODO = gql`
	subscription SUBS_TODO {
		todolist {
			id
			title
			isComplete
		}
	}
`;
