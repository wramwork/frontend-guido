import './App.css';

import Navigation from "./components/navigation";
import Slider from "./components/slider";
import Promotions from "./components/promotion";
import MorePromotion from "./components/more_promotion";
import Pizza from "./components/pizza";
import Burritos from "./components/burritos";
import OtherMeals from "./components/other_meals";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Slider />
        <Promotions  />
        <MorePromotion />
        <Pizza />
        <Burritos />
        <OtherMeals />
      </main>
      <Footer/>
    </>
  );
}

export default App;
