import React, { useState } from "react";
import items from "./items";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./App.css";

function App() {
	return (
		<div className="container">
			<Carousel
				showArrows={false}
				swipeable={true}
				showStatus={false}
				showThumbs={false}
				useKeyboardArrows={false}>
				{items.map((el, index) => {
					return (
						<div className="card" key={index}>
							<img className="image" src={el.image} alt="Illustration" />
							<h1>{el.text}</h1>
							{el.control}
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default App;
