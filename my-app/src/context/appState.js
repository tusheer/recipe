import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducers from './appReducers';
import { GETDATA, SELECT, ADDTO } from './type.js';
import axios from 'axios';
const AppState = (props) => {
	const initialState = {
		select: null,
		items: null,
		shoping: [],
		likeRecipe: [],
	};

	const [ state, dispatch ] = useReducer(appReducers, initialState);

	const getdata = (data) => {
		console.log(data);
		dispatch({
			type: GETDATA,
			payload: data,
		});
	};
	// a99f3847ceebaa9c1ad15b4e11130371
	const selectid = async (data) => {
		try {
			const res = await axios.get(
				'https://www.food2fork.com/api/get?key=a99f3847ceebaa9c1ad15b4e11130371&rId=' + data,
			);
			dispatch({
				type: SELECT,
				payload: {
					data: data,
					res: res.data,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const addtoshpping = (data) => {
		dispatch({
			type: ADDTO,
			payload: [ ...data ],
		});
	};

	const addlike = (data) => {
		dispatch({
			type: 'LIKE',
			payload: [ ...data ],
		});
	};

	return (
		<appContext.Provider
			value={{
				...state,
				getdata,
				selectid,
				addtoshpping,
				addlike,
			}}
		>
			{props.children}
		</appContext.Provider>
	);
};

export default AppState;
