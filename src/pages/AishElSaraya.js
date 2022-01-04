import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AishElSaraya.css";


const AishElSaraya = () => {
	const [compteurSaraya, setCompteurSaraya] = useState(0);
   
  return (
    <div>


    <Header />
    <div className="myBody">
		<h1>Aish El Saraya(pâtisserie à la crème et pistaches)</h1>
		<div className="myPic" >
			<div className="imgContainer1" >
				<img src="https://www.shanazrafiq.com/wp-content/uploads/2017/12/2-DSC_0109.jpg" alt="Aish El Saraya" />
			</div>
		</div>
		<p>La recette Aish el Saraya est un pudding au pain libanais à base de biscottes et de crème pâtissière délicieusement parfumée. Les biscottes sont trempées dans un sirop de sucre citronné surmonté généreusement d'une crème anglaise parfumée à l'eau de la fleur d'oranger. La recette est un vrai gagnant et se marie bien comme dessert pour toutes les cuisines.</p>
	
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img className="myImg" src="https://www.hungrypaprikas.com/wp-content/uploads/2020/05/Aish-El-Saraya-blog-14.jpg" alt="Aish El Saraya"/>

			</div>
		</div>
	
	

		<div className="recipe">
			<ul className="instructions">
				<li className="listy">Portions: 10 personnes</li>
				<li className="listy">Temps de préparation:15 minutes</li>
				<li className="listy">Temps de cuisson:15 minutes</li>
				<li className="listy">Temps total:30 minutes</li>
			</ul>
		</div>
		<div className="recipe">
			<h2>Les Ingrédients</h2>
			<ul className="instructions">
				<li className="listy">2 verres d'eau</li>
				<li className="listy">1 verre de sucre</li>
				<li className="listy">2 cas a soupe d'eau de rose</li>
				<li className="listy">6 cuillères a soupe de maïzena</li>
				<li className="listy">1 c.a.s de sucre</li>
				<li className="listy">600 ml de lait</li>
                <li className="listy">3 c.a.s de crème liquide</li>
                <li className="listy">1 paquet de biscotte</li>
                <li className="listy">1 sachet de sucre vanillé</li>
                <li className="listy">Pistache concassées ou noix de coco</li>
			
			</ul>

		</div>
		<div className="compteurContainer">
     

        {compteurSaraya < 445 ? (
          <button className="btnAish"
            onClick={() => {
              setCompteurSaraya(compteurSaraya + 445);
			
            }}
          >
            Combien de calories dans 100 g de Aish El Saraya?&nbsp;&nbsp;&nbsp;
          </button>
        ) : null}
		

        <span className="calories"> &nbsp;&nbsp;&nbsp;{compteurSaraya} </span>
		<span className="calories">&nbsp;&nbsp;&nbsp;kcal/100 g&nbsp;&nbsp;&nbsp;</span>

        {compteurSaraya > 0 ? (
          <button className="btnAish"
            onClick={() => {
              setCompteurSaraya(compteurSaraya - 445);
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
				<li className="listy">Préparez le sirop faire bouillir l'eau et le sucre pendant 15 minutes</li>
				<li className="listy">Disposer les biscottes sur un plat les imbibé de sirop.</li>
				<li className="listy">Préparer la crème en mélangeant tous les ingrédients : crème fraîche, lait, maïzena, sucre vanillé, sucre, eau de rose.La mètre au feu jusqu'à épaississementVerser en haut des biscottes. </li>
				<li className="listy">Au frigo minimum 2h00 </li>
				<li className="listy">Décorer de noix de coco ou pistache.</li>
			</ol>
		</div>
			<p className="yummy"><strong >Sahtein!</strong></p>
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img src="https://img-global.cpcdn.com/recipes/1ce4809e3ca03e35/640x640sq70/photo.webp" alt='Done'  />
			</div>
		</div>
	
</div>

    <Footer />
    </div>

  )
}

export default AishElSaraya;