import react,{Component} from 'react';
import { Link } from 'react-router-dom';
export default function ItemProduct(props){
	const {data}=props;
	const linksrc=`/detail/${data.idDrink}`;
	return (
			<>
				<div className="Item">
					<div className="image-item">
						<img src={data.strDrinkThumb} alt="no image" />
					</div>
					<div className="title-item">
						<label>{data.strDrink}</label>
					</div>
					<div className="category-item">
						<label>{data.strCategory}</label>
					</div>
					<div className="Material-item">
						<label>{data.strAlcoholic}</label>
					</div>
					<div className="detailsButton-item">
						<Link to={linksrc}><button>Details</button></Link>
					</div>
				</div>
			</>
		);
}

