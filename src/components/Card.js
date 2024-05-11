// Anis: Lec-5-7 start (React Function Component)
// const todoTitle = "Call Mother";
// const todoDesc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, distinctio!";

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// This is for destructuring:
// const name = ["dog", "cat"];
// name[0];
// name[1];

// const [dog, cat] =name;
// const dog = name[0];
// const cat = name[1];

// /////  Anis: Lec-8 start here(Props and destructuring) 
function Card(props){
  const {titleText, descText} =props;

  return <div className='card'>
            <h3 className='cardTitle'> {props.titleText}</h3>
            <p  className='cardDesc'>  {props.descText}</p>
            <p className='cardFooter'>  {dateName + "/" + monthName + "/" + currentYear  }</p>

        </div> 
}

export default Card;

// /////  Anis: Lec-8 Ends here(Props and destructuring) 