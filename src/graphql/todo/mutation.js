import { gql } from '@apollo/client';

export const ADD_TODO = gql`
	mutation ADD_TODO($title: String!) {
		insert_todolist(objects: { title: $title, isComplete: false }) {
			returning {
				id
				title
				isComplete
			}
		}
	}
`;

export const DELETE_TODO = gql`
	mutation DELETE_TODO($id: Int!) {
		delete_todolist(where: { id: { _eq: $id } }) {
			returning {
				id
				title
				isComplete
			}
		}
	}
`;

export const UPDATE_TODO = gql`
	mutation UPDATE_TODO($id: Int!, $isComplete: Boolean!) {
		update_todolist(where: { id: { _eq: $id } }, _set: { isComplete: $isComplete }) {
			returning {
				id
				title
				isComplete
			}
		}
	}
`;
