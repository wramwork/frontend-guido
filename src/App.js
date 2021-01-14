import './App.css';

import Navigation from "./features/navigation";
import Slider from "./features/slider";
import Promotions from "./features/promotion";
import MorePromotion from "./features/more_promotion";
import Pizza from "./features/pizza";
import Basket from "./features/burritos";
import OtherMeals from "./features/other_meals";
import Footer from "./features/footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Slider />
        <Promotions  />
        <MorePromotion />
        <Pizza />
        <Basket />
        <OtherMeals />
      </main>
      <Footer/>
    </>
  );
}

export default App;
