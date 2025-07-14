import './App.css';
import pizzaimg from "./assets/pizza.jpg";
import tacoimg from "./assets/taco.jpg";
import lasagnaimg from "./assets/lasagna.jpg";
import mangoimg from "./assets/mango.jpg";
import ProductCardComponent from './component/ProductCardComponent';

function App() {

return (
    <>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>

        <ProductCardComponent
            name="pizza"
            img={pizzaimg}
            productDesc="Cheesy, savory, and crispy flatbread with various toppings."
            title="Snacks"
            rating={5}
            />

        <ProductCardComponent
            name="taco"
            img={tacoimg}
            productDesc="A Mexican classic featuring a crispy or soft shell filled with seasoned meat, cheese, veggies, and sauces."
            title= "Snacks"
            rating={4.5}
            />

        <ProductCardComponent
            name="lasagna"
            img={lasagnaimg}
            productDesc="A classic Italian dish featuring layers of tender pasta, rich meat sauce, and melted cheese, baked to perfection."
            title= "Snacks"
            rating={4.5}
            />

            <ProductCardComponent
            name="Mango float"
            img={mangoimg}
            productDesc="A refreshing Filipino dessert featuring layers of sweet mango, creamy whipped cream, and crunchy graham crackers."
            title="Milk tea"
            rating={6.2}
           />
       
            </div>
        </>
    )
}


export default App;

    
