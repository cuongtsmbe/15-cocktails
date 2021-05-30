import React,{useState,useCallback,useEffect,useMemo  } from 'react';
const AppContext=React.createContext(null);
const url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppProvider=(props)=>{
	const [searchContent,setSearchContent]=useState('');
	const [listProduct,setListProducts]=useState([]);
	const fetchData=useCallback(()=>{
		console.log(`${url}${searchContent}`);
			fetch(`${url}${searchContent}`)
			.then(res=>{
				return res.json();
			})
			.then(data=>{
				console.log('fetch data');
				if(data){
					setListProducts(data.drinks);
				}
				console.log(data);
			})
			.catch(err=>{
				console.log(err);
			});
	},[searchContent]);
	const setSearchValueFun=(value)=>{
		setSearchContent(value);
	}
	useEffect(()=>{
		console.log('useEffect');
		fetchData();
		
	},[searchContent])
	console.log('render');
	return (
		<AppContext.Provider value={
			{
				searchContent,
				listProduct,
				setListProducts,
				setSearchValueFun
			}
		}> 
				{props.children}
		</AppContext.Provider>
		);
}

export {AppProvider,AppContext};
export default AppProvider;