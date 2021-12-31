import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Mouhalabia.css";


const Mouhalabia = () => {
	const [compteurMouh, setCompteurMouh] = useState(0);
   
  return (
    <div>


    <Header />
    <div className="myBody">
		<h1>Mouhalabiya (Flan Au Lait)</h1>
		<div className="myPic" >
			<div className="imgContainer1" >
				<img src="https://mayasingredients.files.wordpress.com/2012/05/classicricepudding-blog.jpg?w=614" alt="Flan de lait" />
			</div>
		</div>
		<p>Faites voyager vos papilles avec ces "mouhalabia" ou petites crèmes, sorte de flans, subtilement parfumées à la fleur d'oranger et recouvertes de sirop et de pistaches caramélisées.</p>
	
		<div className="myPic">
			<div className="imgContainer1">
	
				<img className="myImg" src="https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmStCxKEcyRvsafXxRJLcW5mCazTMT6TAvfxNJsoc72xky/mhalabiya.jpg" alt="Mouhalabiya(Mhalabiyi)"/>

			</div>
	    </div>
	
	

		<div className="recipe">
			<ul className="detailsOn">
				<li className="listy">Portions: 4 personnes</li>
				<li className="listy">Temps de préparation:10 minutes</li>
				<li className="listy">Temps de cuisson:15 minutes</li>
				<li className="listy">Temps total:25 minutes</li>
			</ul>
		</div>
		<div className="recipe">
			<h2>Les Ingrédients</h2>
			<ol className="instructions" type='i'>
				<li className="listy">50 cl de lait</li>
				<li className="listy">100 g de sucre</li>
				<li className="listy">40 g de fécule de maïs</li>
				<li className="listy">30 g de pistaches</li>
				<li className="listy">6 cl d'eau de fleur d'oranger</li>
            </ol>

		</div>
		<div className="compteurContainer">
     

        {compteurMouh < 100 ? (
          <button
            onClick={() => {
              setCompteurMouh(compteurMouh + 100);
			
            }}
          >
            Combien de calories dans 100 g de Mouhalabiya?&nbsp;&nbsp;&nbsp;
          </button>
        ) : null}
		

        <span className="calories"> &nbsp;&nbsp;&nbsp;{compteurMouh} </span>
		<span className="calories">&nbsp;&nbsp;&nbsp;kcal/100 g&nbsp;&nbsp;&nbsp;</span>

        {compteurMouh > 0 ? (
          <button
            onClick={() => {
              setCompteurMouh(compteurMouh - 100);
            }}
          >
            reset
          </button>
        ) : // comment
        null}
	</div>
		<div className="recipe">
			<h2>Instructions</h2>
			<ol className="instructions">
				<li className="listy">LES PRÉMICES: Mettez la fécule de maïs dans un petit bol et délayez-la bien avec 3 à 4 cs de lait à l'aide d'un fouet ou d'une fourchette.</li>
				<li className="listy">LA CRÈME ÉPAISSIE:Mettez le lait restant dans une petite casserole et faites-le chauffer sur feu doux avec la moitié du sucre et la moitié de l'eau de fleur d'oranger. Une fois le lait chaud, ajoutez-y la fécule délayée et mélangez bien à l'aide d'un fouet puis remuez constamment ce mélange jusqu'à ce qu'il épaississe : il va alors prendre la consistance d'une crème pâtissière (surveillez bien, cela va assez vite !). Lorsque c'est le cas, retirez la crème du feu et répartissez-la rapidement dans des verres ou verrines. Mettez au frais 2 h au minimum, jusqu'à ce que les crèmes soient bien prises.
                </li>
				<li className="listy">LE SIROP PARFUMÉ: Pendant ce temps, préparez le sirop : dans une casserole (nettoyez celle utilisée pour les crèmes !), versez 2 cs d'eau, 2 cs du sucre restant (il devrait normalement vous rester l'équivalent d'1 cs, à garder pour les pistaches) et le reste d'eau de fleur d'oranger. Remuez et faites chauffer doucement ce mélange jusqu'à l'obtention d'un sirop (5 min. environ). Lorsque c'est le cas, retirez-le du feu et laissez tiédir un peu. Sortez alors les crèmes du frigo et répartissez le sirop par-dessus. Remettez les crèmes au frais jusqu'à ce que les 2 h soient écoulées.</li>
				<li className="listy">TIME TO RELAX !: Vous avez 2 h devant vous, profitez-en !</li>
				<li className="listy">LES PISTACHES CARAMÉLISÉES: </li>
            </ol>
		</div>
			<p className="yummy"><strong >Sahtein!</strong></p>
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img src="https://cookin5m2.files.wordpress.com/2014/07/mhallabiyeh-milk-pudding-cookin5m2-2014-5.jpg?w=630&h=420" alt='Done'  />
			</div>
		</div>
	
</div>

    <Footer />
    </div>

  )
}

export default Mouhalabia;