import react,{Component} from 'react';
import Header from './../components/Header';
import SearchItem from './../components/SearchItem';
import Products from './../components/Products';
export default function Home(props){
	return (
		<>
			
			 <Header/>
	        <div className="container-body">
	            <SearchItem />
	        </div>
	        <div className="container-Products">
	            <Products/>
	        </div>
		</>
		);
}

