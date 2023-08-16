import { useEffect ,useState} from "react"
import Card from "./Card";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function Popular() {
  const [popular, setpopular] = useState([]);
  useEffect(()=>{
    getPopular();
  },[])
  const getPopular= async()=>{
    const check=localStorage.getItem("pop*ular");
    if(check){
      setpopular(JSON.parse(check)) ;
    }
    else{
      try{
        const apiKey='2920a8b31713467d8c5bcc203a0cf313';
        const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);
        const data=await api.json();
        localStorage.setItem('popular',JSON.stringify(data.recipes))
        setpopular(data.recipes);
      }
      catch(error){
        console.log("something is wrong");
      }
    }
    
  }
  console.log(popular);
  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-3xl m-6 text-slate-100">Top Picks</h2>
      </div>
      
      <div className="flex justify-center items-center overflow-hidden">
          <div className="  w-8/12 shadow-slate-800">
            <Splide options={{perPage: 3,arrows:false,
            pagination:false, drag:'free', gap:'2rem'}}>
          {popular.map( (recipe)=> {
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
+
export default Popular