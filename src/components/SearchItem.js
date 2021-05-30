import react,{useContext} from 'react';
import {AppContext} from "./../context";
export default function SearchItem(){
	const ContextValue=useContext(AppContext);

	return (
		<>
			<div className="Container-Search">
					<label className="label-item">search your favorite cocktail</label>
					<input type="text" className="search-input" value={ContextValue.searchContent} onChange={(e)=>{ContextValue.setSearchValueFun(e.target.value)}}/>
			</div>
		</>
		);
}
