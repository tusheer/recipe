import React, { useContext } from 'react';
import appContext from '../../context/appContext';
const Result = () => {
	const context = useContext(appContext);
	const { data, selectid, select } = context;
	const verify = (id) => {
		if (select) {
			return select[0].recipe_id === id ? 'results__link results__link--active' : 'results__link';
		} else {
			return 'results__link ';
		}
	};

	return (
		<React.Fragment>
			{data ? (
				<div class="results">
					<ul class="results__list">
						{data.length > 0 ? (
							<React.Fragment>
								{data.map((data) => {
									return (
										<li key={data.recipe_id} onClick={() => selectid(data.recipe_id)}>
											<a className={verify(data.recipe_id)} href={'#' + data.recipe_id}>
												<figure class="results__fig">
													<img src={data.image_url} alt={data.title} />
												</figure>
												<div class="results__data">
													<h4 class="results__name">{data.title}</h4>
													<p class="results__author">{data.publisher}</p>
												</div>
											</a>
										</li>
									);
								})}
							</React.Fragment>
						) : (
							<h2>Your search is not found</h2>
						)}
					</ul>
				</div>
			) : (
				<div className="results" />
			)}
		</React.Fragment>
	);
};

export default Result;
