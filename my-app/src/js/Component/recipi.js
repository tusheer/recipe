import React, { useContext, useState, useEffect } from 'react';
import appContext from '../../context/appContext';

const Recipi = () => {
	const context = useContext(appContext);
	const { select, items, addtoshpping, addlike } = context;
	const [ count, setCount ] = useState(1);

	const minus = () => {
		if (count === 1) {
			setCount(1);
		} else {
			setCount(count - 1);
		}
	};

	const plus = () => {
		setCount(count + 1);
	};

	const onclick = () => {
		addtoshpping([ { count, ...items.recipe } ]);
	};

	const click = () => {
		addlike([ { ...items.recipe } ]);
	};

	useEffect(
		() => {
			setCount(1);
			console.log('tusher');
		},
		[ select ],
	);
	return (
		<div class="recipe">
			{select ? select.length > 0 ? (
				<React.Fragment>
					<figure class="recipe__fig">
						<img src={items.recipe.image_url} alt="Tomato" class="recipe__img" />
						<h1 class="recipe__title">
							<span>{items.recipe.title}</span>
						</h1>
					</figure>
					<div class="recipe__details">
						<div class="recipe__info">
							<svg class="recipe__info-icon">
								<use href="images/icons.svg#icon-stopwatch" />
							</svg>
							<span class="recipe__info-data recipe__info-data--minutes">45</span>
							<span class="recipe__info-text"> minutes</span>
						</div>
						<div class="recipe__info">
							<svg class="recipe__info-icon">
								<use href="images/icons.svg#icon-man" />
							</svg>
							<span class="recipe__info-data recipe__info-data--people">{count}</span>
							<span class="recipe__info-text"> servings</span>
							<div class="recipe__info-buttons">
								<button onClick={minus} class="btn-tiny">
									<svg>
										<use href="images/icons.svg#icon-circle-with-minus" />
									</svg>
								</button>
								<button onClick={plus} class="btn-tiny">
									<svg>
										<use href="images/icons.svg#icon-circle-with-plus" />
									</svg>
								</button>
							</div>
						</div>
						<button onClick={click} class="recipe__love">
							<svg class="header__likes">
								<use href="images/icons.svg#icon-heart-outlined" />
							</svg>
						</button>
					</div>
					<div class="recipe__ingredients">
						<ul class="recipe__ingredient-list">
							{items.recipe.ingredients.map((data) => {
								return (
									<li class="recipe__item">
										<svg class="recipe__icon">
											<use href="images/icons.svg#icon-check" />
										</svg>
										<p>{data}</p>
									</li>
								);
							})}
						</ul>
						<button onClick={() => onclick()} class="btn-small recipe__btn">
							<svg class="search__icon">
								<use href="images/icons.svg#icon-shopping-cart" />
							</svg>
							<span>Add to shopping list</span>
						</button>
					</div>
					<div class="recipe__directions">
						<h2 class="heading-2">How to cook it</h2>
						<p class="recipe__directions-text">
							This recipe was carefully designed and tested by
							<span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their
							website.
						</p>
						<a class="btn-small recipe__btn" href={items.recipe.publisher_url} target="_blank">
							<span>Directions</span>
							<svg class="search__icon">
								<use href="images/icons.svg#icon-triangle-right" />
							</svg>
						</a>
					</div>
				</React.Fragment>
			) : (
				''
			) : (
				''
			)}
		</div>
	);
};

export default Recipi;
