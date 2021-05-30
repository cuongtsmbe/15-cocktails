import react,{Component} from 'react';
import { Link } from 'react-router-dom';
export default function Header(props){
	return (

			<header className="App-header">
	       			<div className="header-center">
	       				<p>The<b>Cocktails</b>DB</p>
	       				<div className="Home-about">
	       				 <Link to="/home">	<div className="Home"><p>Home</p></div>	</Link>
	       				 <Link to="/about">	<div className="About"><p>About</p></div>	</Link>
	       					
	       				</div>
	       			</div>
	      	</header>
    
		);
}

