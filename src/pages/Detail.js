
import Header from './../components/Header';
import { Link,useParams } from 'react-router-dom';
import react,{useState,useEffect,useCallback} from 'react';
const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export default function Detail(props){
	const {idDetailItem}=useParams();
	const [dataProduct,setDataProduct]=useState([]);
	const getDataWidthId=useCallback(()=>{
		console.log(`${url}${idDetailItem}`);
		fetch(`${url}${idDetailItem}`)
		.then(res=>{
			console.log('getdata details function fetch');
			return res.json();
		})
		.then(data=>{

			if(data.drinks){
				setDataProduct(data.drinks);
			}
		})
		.catch(err=>{
			console.log(err);
		})
	},[idDetailItem])
	useEffect(()=>{
		getDataWidthId();
		console.log('useEffect details');
	},[]);

	return (
		<>
			<Header/>

			{
				dataProduct.length!=0?(<>
					<div className="content-details">
							<Link to="/" className="backhome">Back Home</Link>	

						<label className="title-details">{dataProduct[0].strDrink}</label>
						<div className="details">
							<img src={dataProduct[0].strDrinkThumb} alt="no image" />
							<div className="info-details">
								<label><span>Name:</span>{dataProduct[0].strDrink}</label>
								<label><span>Category:</span>{dataProduct[0].strCategory}</label>
								<label><span>date:</span>{dataProduct[0].dateModified}</label>
								<label><span>Glass:</span>{dataProduct[0].strGlass}</label>
								<label><span>Instructions:</span>{dataProduct[0].strInstructions}</label>
								<label><span>Ingradients:</span>{dataProduct[0].strAlcoholic}</label>
							</div>
						</div>
					</div>
				</>):(<div className="content-details"><p className="loading">Loading...</p></div>)
			}
		</>
		);
}

