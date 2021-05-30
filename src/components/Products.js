import react,{useContext} from 'react';
import ItemProduct from './ItemProduct';
import {AppContext} from './../context';
export default function Products(props){
	const ContextData=useContext(AppContext);
	const renderItem=()=>{
		return ContextData.listProduct.map((e)=>{
			return <ItemProduct key={e.idDrink} data={e}/>
		})
	}
	return (
		<>
			
				<label className="label-cocktails">Cocktails</label>
				<div className="ListProducts">
					{ContextData.listProduct?renderItem():<><p className="mess">Don't have products you search</p></>}
				</div>
		</>
		);
}

