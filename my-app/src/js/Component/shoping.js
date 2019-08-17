import React, { useContext } from 'react';
import appContext from '../../context/appContext';
const Shoping = () => {
	const context = useContext(appContext);
	const { shoping } = context;
	return (
		<div class="shopping">
			<h2 class="heading-2">My Shopping List</h2>

			<ul className="likes__list">
				{shoping.length > 0 &&
					shoping.map((data) => (
						<li>
							<a className="li__link" href="#23456">
								<div className="likes__fig relative">
									<img src={data.image_url} alt="Test" />
									<div className="obsolute">{data.count} </div>
								</div>
								<div className="likes__data">
									<h4 className="likes__name">{data.title}.</h4>
									<p className="likes__author">{data.publisher}</p>
								</div>
							</a>
						</li>
					))}
			</ul>

			<div class="copyright">
				&copy; by Jane Alam Tusher. Powered by
				<a href="http://food2fork.com" target="_blank" class="link">
					Food2Fork.com
				</a>.
			</div>
		</div>
	);
};

export default Shoping;
