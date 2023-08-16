import { useEffect ,useState} from "react"
import Card from "./Card";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function Veggie() {
  const [veggie, setveggie] = useState([]);
  useEffect(()=>{
    getVeggie();
  },[])
  const getVeggie= async()=>{
    const check=localStorage.getItem("veggie");
    if(check){
      setveggie(JSON.parse(check)) ;
    }
    else{
      try{
        const apiKey='2920a8b31713467d8c5bcc203a0cf313';
        const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`);
        const data=await api.json();
        localStorage.setItem('veggie',JSON.stringify(data.recipes))
        setveggie(data.recipes);
      }
      catch(error){
        console.log("something is wrong");
      }
    }
    
  }
  console.log(veggie);
  return (
    <div>
      <div>
        <h2 className="text-center text-slate-100 font-bold text-3xl m-6">Top Vegetarian Picks</h2>
      </div>
      
      <div className="flex justify-center items-center overflow-hidden">
          <div className="  w-8/12 shadow-slate-800">
            <Splide options={{perPage: 4,arrows:false,
            pagination:false, drag:'free', gap:'1rem'}}>
          {veggie.map( (recipe)=> {
            return (
              <SplideSlide key={recipe.id}>
              <Card recipe={recipe}/>
              </SplideSlide>
            );
          }
          )}
          </Splide>
          </div>
          </div>
      
      
    </div>
  )
}

export default Veggie