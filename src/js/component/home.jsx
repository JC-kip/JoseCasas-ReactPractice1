import React from "react";
import Navbar from './Navbar';

//create your first component
const Home = () => {

	return (
		<div className="Home text-center">
			<Navbar />
			<div className="content">
				<h1>Home Component</h1>
			</div>
		</div>
	);
};

export default Home;
