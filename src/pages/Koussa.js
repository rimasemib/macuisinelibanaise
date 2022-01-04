import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Koussa.css";


const Koussa = () => {
	const [compteurKoussa, setCompteurKoussa] = useState(0);
	const [multiplePer, setMultiplePer] = useState(1);
   
  return (
    <div>


    <Header />
    <div className="myBody">
		<h1>Koussa Mehshi(Courgettes Farcies)</h1>
		<div className="myPic" >
			<div className="imgContainer1" >
				<img src="https://img-global.cpcdn.com/recipes/1960eb5c8ddfdb78/680x482cq70/stuffed-vine-leaves-and-zucchini-mehshi-warak-enab-w-koussa-recipe-main-photo.webp" alt="Koussa Mehshi" />
			</div>
		</div>
		<p>Koussa Mehchi ! Cette recette nous vient du Moyen-Orient, ce plat familial réconfortant, très populaire au Liban. Ma recette d’aujourd’hui est une recette de courgettes farcies à la viande hachée et riz aux 7 épices libanaises, cuites dans une sauce rouge de tomate dans une marmite, cocotte, vous pouvez également opter pour une cuisson au four …</p>
	
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img className="myImg" src="https://thumbs.dreamstime.com/z/kousa-mahshi-zucchini-stuffed-rice-meat-s-made-egypt-syria-lebanon-palestine-iraq-israel-jordan-cyprus-44720530.jpg
" alt="purée de pois chiches"/>

			</div>
		</div>
	
	

		<div className="recipe">
			<ul className="instructions">
				<li className="listy">Portions: 4 personnes</li>
				<li className="listy">Temps de préparation:60 minutes</li>
				<li className="listy">Temps de cuisson:30 minutes</li>
				<li className="listy">Temps total:90 minutes</li>
			</ul>
		</div>
		<div className="compteur22">
		 
				<button className="btnHms"
				onClick={() => {
					setMultiplePer(1);
		 
		 		}}
	   		>
		 		4 Personnes
	   		</button>
			   
			<button className="btnHms"
				onClick={() => {
					setMultiplePer(2);
		 
		 		}}
	   		>
		 		8 Personnes
	   		</button>
			   
			<button className="btnHms"
				onClick={() => {
					setMultiplePer(3);
		 
		 		}}
	   		>
		 		12 Personnes
	   		</button>
	 	
		</div>
		<div className="recipe">
			<h2>Les Ingrédients</h2>
			<ul className="instructions">
				<li className="listy">{multiplePer * 500} g Jeunes petites courgettes.</li>
				<li className="listy">{multiplePer * 150} g Bœuf haché</li>
				<li className="listy"> {multiplePer * 1/4} càc 7 épices labanais</li>
				<li className="listy">{multiplePer * 80} g Riz cassé en deux fois</li>
				<li className="listy">{multiplePer * 2} càs Huile neutre</li>
				<li className="listy">Sel, poivre</li>
                <li className="listy">{multiplePer * 1} càs Mélasse de grenade</li>
                <span>Pour La Sauce:</span>
                <li className="listy">{multiplePer * 40} ml Mélasse de grenade</li>
                <li className="listy">{multiplePer * 1} càs menthe séchée</li>
                <li className="listy">{multiplePer * 150} g Sauce de tomate</li>
                <li className="listy">{multiplePer * 3} Gousses d'ail</li>
                <li className="listy">{multiplePer * 1/2} càc 7 épices labanais</li>
                <li className="listy">{multiplePer * 30} cl Eau</li>
                <li className="listy">{multiplePer * 2} càs Huile d'olive</li>
                <li className="listy">Sel, poivre</li>
			
			</ul>

		</div>
		<div className="compteurContainer">
     

        {compteurKoussa < 54 ? (
          <button className="btnKous"
            onClick={() => {
              setCompteurKoussa(compteurKoussa + 54);
			
            }}
          >
            Combien de calories dans 100 g de Koussa?&nbsp;&nbsp;&nbsp;
          </button>
        ) : null}
		

        <span className="calories"> &nbsp;&nbsp;&nbsp;{compteurKoussa} </span>
		<span className="calories">&nbsp;&nbsp;&nbsp;kcal/100 g&nbsp;&nbsp;&nbsp;</span>

        {compteurKoussa > 0 ? (
          <button className="btnKous"
            onClick={() => {
              setCompteurKoussa(compteurKoussa - 54);
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
				<li className="listy">Lavez les courgettes et équeutez-les. Videz-les avec une vide courgette.</li>
				<li className="listy">Dans un grand bol, mélangez la viande hachée, le riz avec les 7 épices, l'huile neutre la mélasse de grenade, sel et poivre. Mélangez bien.</li>
				<li className="listy">Farcissez les courgettes vidées avec ce mélange.</li>
				<li className="listy">Faites légèrement dorer les courgettes de tous les côtés avec un filet d’huile d’olive.</li>
				<li className="listy">Ajoutez aux courgettes les tomates concassées, la mélasse de grenade). Ajoutez les gousses d’ail épluchées entières et écrasées. Assaisonnez de 7 épices, sel et poivre. Couvez le tout d’eau jusqu’à ce que le liquide arrive à mi-hauteur des courgettes. et laissez cuire pendant 30 min à peu prés.</li>
				<li className="listy">Les 5 dernières min, ajoutez-y la menthe séchée à votre sauce tomate.</li>
			
			</ol>
		</div>
			<p className="yummy"><strong >Sahtein!</strong></p>
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img src="https://www.cuisineculinaire.com/wp-content/uploads/2020/01/Courgettes-farcies-libanaise-viande-hachee-sauce-tomate-recette-facile-koussa-mehchi_1_680.jpg" alt='Done'  />
			</div>
		</div>
	
</div>

    <Footer />
    </div>

  )
}

export default Koussa;