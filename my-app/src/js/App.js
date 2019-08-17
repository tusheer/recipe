import React, { useContext } from 'react';
import Main from './Component/main';
import Result from './Component/result';
import Recipi from './Component/recipi';
import Shoping from './Component/shoping';

import appContext from '../context/appContext';

export default function App(props) {
	const context = useContext(appContext);
	const { getdata } = context;

	return (
		<div className="container">
			<Main getdata={getdata} />
			<Result />
			<Recipi />
			<Shoping />
		</div>
	);
}
