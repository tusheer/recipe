import { GETDATA, SELECT, ADDTO } from './type';

const appReducers = (state, action) => {
	switch (action.type) {
		case GETDATA:
			return {
				...state,

				data: [ ...action.payload ],
			};

		case SELECT:
			return {
				...state,
				select: state.data.filter((data) => data.recipe_id === action.payload.data),
				items: { ...action.payload.res },
			};
		case ADDTO:
			const list = state.shoping.filter((e) => e.recipe_id !== action.payload[0].recipe_id);

			return {
				...state,
				shoping: [ ...list, ...action.payload ],
			};

		case 'LIKE':
			const like = state.likeRecipe.filter((e) => e.recipe_id !== action.payload[0].recipe_id);
			console.log(like);
			return {
				...state,
				likeRecipe: [ ...like, ...action.payload ],
			};

		default:
			return {
				...state,
			};
	}
};

export default appReducers;
