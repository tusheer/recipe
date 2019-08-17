import React, { useRef, useContext } from 'react';
import axios from 'axios';
import appContext from '../../context/appContext';
const Main = (props) => {
	const ref = useRef();
	const context = useContext(appContext);
	const { likeRecipe } = context;
	// a99f3847ceebaa9c1ad15b4e11130371
	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(
				`https://www.food2fork.com/api/search?key=a99f3847ceebaa9c1ad15b4e11130371&q=${ref.current
					.value}&page=1`,
			);
			props.getdata(res.data.recipes);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<header className="header">
			<img src="./favicon.png" alt="Logo" className="header__logo" />

			<form className="search" onSubmit={onSubmit}>
				<input ref={ref} type="text" className="search__field" placeholder="Search over 1,000,000 recipes..." />
				<button className="btn search__btn">
					<svg className="search__icon">
						<use href="images/icons.svg#icon-magnifying-glass" />
					</svg>
					<span>Search</span>
				</button>
			</form>
			<div className="likes">
				{likeRecipe.length > 0 && (
					<React.Fragment>
						<div className="likes__field">
							<svg className="likes__icon">
								<use href="images/icons.svg#icon-heart" />
							</svg>
						</div>
						<div className="likes__panel">
							<ul className="likes__list">
								{likeRecipe.map((data) => (
									<li>
										<a className="likes__link" href="#23456">
											<div className="likes__fig">
												<img src={data.image_url} alt="Test" />
											</div>
											<div className="likes__data">
												<h4 className="likes__name">{data.title}</h4>
												<p className="likes__author">{data.publisher}</p>
											</div>
										</a>
									</li>
								))}
							</ul>
						</div>
					</React.Fragment>
				)}
			</div>
		</header>
	);
};

export default Main;
