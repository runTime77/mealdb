import { useEffect, useState } from 'react';
import './App.css';
import MealCard from './MealCard';


function App() {

  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mealName, setMealName] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, [mealName]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php?s=${categories}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, [categories]);

  const search = (event) => {

    console.log(event.target.value);
    setMealName(event.target.value);
  };


  return (
    <div className="App">
      <div className="px-[100px] mt-[50px]">
        <input
          onChange={search}
          type="text" placeholder="Search your food here" className="input input-bordered w-full" />
        <select className="select select-primary w-full mt-5">
          {
            categories?.map((category) => (
              <option value="{category?.strCategory">{category?.strCategory}</option>))
          }

        </select>
      </div>
      <div className="grid grid-cols-3 gap-10 p-20">
        {
          meals?.map((meal) => (
            <MealCard meal={meal}>
            </MealCard>
          ))
        }
      </div>
    </div>
  );
}

export default App;