// Anis: Lec-5-7 start (React Function Component)
// const todoTitle = "Call Mother";
// const todoDesc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, distinctio!";

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();


function Card(props){
  console.log(props)
  return <div className='card'>
            <h3 className='cardTitle'> {props.titleText}</h3>
            <p  className='cardDesc'>  {props.descText}</p>
            <p className='cardFooter'>  {dateName + "/" + monthName + "/" + currentYear  }</p>

        </div> 
}

export default Card;