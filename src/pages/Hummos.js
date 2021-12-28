import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Hummos.css";


const Hummos = () => {
   
  return (
    <div>


    <Header />
    <div className="myBody">
	<h1 className="myHead">Pasta with Pesto and Tomatoes</h1>

	<div className="myPic" >
		<div className="imgContainer1" >
	
			<img className="myImg" src="https://assets.codepen.io/652/shania-pinnata-7E-vKgzahd8-unsplash.jpg" alt="spaghetti with pesto sauce and cherry tomatoes." />

		</div>
	</div>

	
		<p>This quick and delicious pasta dish is the perfect way to use up a summer bounty of basil and tomatoes! </p>
		<p>Don't have a green thumb? Never fear! You can knock out this classic pasta dish in no time with a jar of prepared pesto sauce. </p>
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img className="myImg" src="https://assets.codepen.io/652/tamanna-rumee-nswz6tIpgZk-unsplash.jpg" alt="yummy"/>

				</div>
	</div>
	
	

	<div className="recipe">
		<ul>
			<li className="listy">Servings: 4</li>
			<li className="listy">Prep Time: 5 minutes</li>
			<li className="listy">Cook Time: 25 minutes</li>
			<li className="listy">Total Time: 30 minutes</li>
		</ul>
	</div>
	<div className="recipe">
		<h2 className="ingredientsy">The Ingredients</h2>
		<ul className="ingredients">
			<li className="listy">8 oz. spaghetti or linguine pasta</li>
			<li className="listy">8 oz. spaghetti or linguine pasta</li>
			<li class="listy">2 cups fresh basil leaves, plus 4-8 reserved leaves for garnish</li>
			<li claclassNamess="listy">2 cloves garlic</li>
			<li className="listy">2 tbsp. pine nuts or blanched almonds</li>
			<li className="listy">1/2 cup olive oil</li>
			<li className="listy">1/2 cup grated Parmesan cheese, plus 2 tbsp. for garnish.</li>
			<li className="listy">1/8 tsp salt</li>
			<li className="listy">1 pint cherry tomatoes</li>
			<li className="listy">1 tsp olive oil</li>
		</ul>

	</div>
	<div className="recipe">
		<h2 className="processy">The Process</h2>
		<ol className="instructions">
			<li className="listy">Bring 4 quarts of water to a rolling boil in a large pot. Salt the water generously and add the pasta. </li>
			<li className="listy">While the pasta cooks, make the pesto.
				
			</li>
			<li className="listy">Heat a large skillet over medium heat. </li>
			<li className="listy">Add the 1/2 tsp. olive oil to the heated skillet.</li>
			<li className="listy">Add the cherry tomatoes to the skillet and let them blister, stirring occasionally and gently so they don't burst. </li>
			<li className="listy">Remove tomatoes from the pan and set aside. </li>
			<li className="listy">Drain the pasta, reserving 1/4 cup of the cooking water.</li>
			<li className="listy">Return the pasta to the pot</li>
			<li className="listy">Add the reserved cooking water and pesto to the pasta and stir to mix</li>
			<li className="listy">Plate the pasta and add 6-8 tomatoes to each plate</li>
			<li className="listy">Garnish with reserved basil leaves and Parmesean and serve. <strong>Buon Appetito!</strong></li>
		</ol>
		<div className="myPic" >
			<div className="imgContainer1" >
	
		<img src="https://www.nospoonnecessary.com/wp-content/uploads/2016/04/Arugula-Pesto-Pasta-671.jpg" alt='too'  />
		</div>
</div>
	</div>
</div>

    <Footer />
    </div>

  )
}

export default Hummos;