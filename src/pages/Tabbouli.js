import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Tabbouli.css";


const Tabbouli = () => {
   
  return (
    <div>


    <Header />
    <div className="myBody">
		<h1>Tabbouli (Salade Libanaise)</h1>
		<div className="myPic" >
			<div className="imgContainer1" >
				<img src="
https://cdn.pixabay.com/photo/2020/05/22/01/52/food-5203382_960_720.jpg" alt="Salade Libanaise" />
			</div>
		</div>
		<p>A la base, simple salade de boulghour assaisonnée au citron et à l’huile d’olive et agrémentée de quelques herbes du jardin, le taboulé s’est petit à petit enrichi d’une grande quantité de persil et de menthe, puis de tomates, pour devenir LA salade libanaise par excellence appréciée de tous et associée aux pique-niques, fêtes et réceptions. Elle reste d’une fraîcheur incomparable par grande chaleur.</p>
	
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img className="myImg" src="
https://cdn.pixabay.com/photo/2020/05/21/08/17/tabbouleh-5199712_960_720.jpg" alt="Tabbouli Libanaise"/>

			</div>
	</div>
	
	

		<div className="recipe">
			<ul className="detailsOn">
				<li className="listy">Portions: 5 personnes</li>
				<li className="listy">Préparation des légumes:20 minutes</li>
				<li className="listy">Mélanger avec les autres ingrédients:5 minutes</li>
				<li className="listy">Temps total:25 minutes</li>
			</ul>
		</div>
		<div className="recipe">
			<h2>Les Ingrédients</h2>
			<ol className="instructions" type='i'>
				<li className="listy">4 tomates fermes</li>
				<li className="listy">2 bottes de persil plat</li>
				<li className="listy">1 citron(s)</li>
				<li className="listy">3 cuillères d'huile d'olive</li>
				<li className="listy">2 pincées de sel</li>
				<li className="listy">1 botte d'oignon verts</li>
                <li className="listy">1 botte de menthe fraîche</li>
                <li className="listy">1 petite poignée de boulgour brun moyen (blé concassé)</li>
			
			</ol>

		</div>
		<div className="recipe">
			<h2>Instructions</h2>
			<ol className="instructions">
				<li className="listy">Avant de commencer mettre une poignée de boulghour dans un bol d'eau pendant 15 mn et laisser ramollir.</li>
				<li className="listy">Laver et équeuter le persil, puis le couper au couteau (ou aux ciseaux si l'on préfère).</li>
				<li className="listy">Répéter l'opération avec la menthe, vous devez obtenir des feuilles d'1 cm environ.</li>
                <li className="listy">Mettre le tout dans un saladier.</li>
				<li className="listy">Couper les oignons verts très fins, les tomates en petits dés, et mettre le tout dans le saladier.</li>
				<li className="listy">Lorsque le boulghour ne croque plus, le sortir de l'eau, et le presser entre les mains pour l'essorer. Le mettre dans le saladier avec le reste.</li>
				<li className="listy">Assaisonnement : presser 1 citron entier et arroser le contenu du saladier. Ajouter le sel et les 3 cuillères à soupe d'huile d'olive.</li>
                <li className="listy">L'aspect du taboulé doit être brillant, pour indiquer qu'il y a suffisamment d'huile d'olive.</li>
            </ol>
           

		</div>
			<p className="yummy"><strong >Sahtein!</strong></p>
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img src="https://media.istockphoto.com/photos/raw-ingredients-cooking-salad-tabouli-healthy-food-picture-id1142801070" alt='Done'  />
			</div>
		</div>
	
</div>

    <Footer />
    </div>

  )
}

export default Tabbouli;