import React, {useContext} from 'react';
import ProductContext from '../contexts/ProductContext'

// Components
import {createContext} from 'react';

const CardContext = () => {

	// const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			Card context
		</div>
	);
};

export default CardContext;
