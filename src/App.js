import './App.css';

import Navigation from "./components/navigation";
import Slider from "./components/slider";
import Promotions from "./components/promotion";
import MorePromotion from "./components/more_promotion";
import Pizza from "./components/pizza";
import Burritos from "./components/burritos";
import OtherMeals from "./components/other_meals";
import Footer from "./components/footer";

import Api from "./common/api";

function App() {
  const api = new Api;
  let data = api.getData('box')
  console.log(data)
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
