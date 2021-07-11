import './Card.css'

function Card(props){
    const classes='card '+props.className; //taking the css from prop's own css class also
return (<div className={classes}>{props.children}</div>);
//props children will take the whole html inside Card as prop 
}
export default Card;