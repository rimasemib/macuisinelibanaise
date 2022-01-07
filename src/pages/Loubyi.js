import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Loubyi.css";


const Loubyi = () => {
	const [compteurLoubyi, setCompteurLoubyi] = useState();
	const [multiplePer, setMultiplePer] = useState(1);
   
  return (
    <div>


    <Header />
    <div className="myBody">
		<h1> Loubyeh w roz(Haricots verts et riz)</h1>
		<div className="myPic" >
			<div className="imgContainer1" >
				<img src="https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/68af4a2a-5755-455c-9918-0709aa12692f/Derivates/9068240a-f8ce-4a8e-a6d1-80c6e0fcffb0.jpg" alt="Haricots verts et riz (Loubyeh w roz)" />
			</div>
		</div>
		<p>Loubia bi lahme (Haricots verts aux viandes) est un autre plat facile que vous devriez ajouter à votre répertoire. Cela prend environ une demi-heure du début à la fin et vous pouvez même faire le riz pendant que les haricots verts mijotent.</p>
	
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img className="myImg" src="https://cuisinesaveurlibanaise.files.wordpress.com/2016/06/image.jpeg?w=1200&h=800&crop=1" alt="Loubieh (ragoût de haricots verts libanais)"/>

			</div>
		</div>
	
	

		<div className="recipe">
			<ul className="instructions">
				<li className="listy">Portions: 4 personnes</li>
				<li className="listy">Temps de préparation:20 minutes</li>
				<li className="listy">Temps de cuisson:30 minutes</li>
				<li className="listy">Temps total:50 minutes</li>
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
				<li className="listy">Environ {multiplePer * 500} g de haricots verts frais</li>
				<li className="listy">{multiplePer * 300} g de cubes de bœuf</li>
				<li className="listy">{multiplePer * 1} oignon moyen haché</li>
				<li className="listy">{multiplePer * 1} gousse d’ail écrasée</li>
				<li className="listy">{multiplePer * 1} boite de conserve de pâte de tomates (156 ml environ)</li>
				<li className="listy">{multiplePer * 5.5} tasses d’eau</li>
                <li className="listy">{multiplePer * 5} c. s. d’huile végétale</li>
                <li className="listy">Sel et poivre</li>
            </ul>

		</div>
		<div className="compteurContainer">
     
          <button className="btnLoub"
            onClick={() => {
              setCompteurLoubyi(194);
			
            }}
          >
            Combien de calories dans 100 g de Loubyi?&nbsp;&nbsp;&nbsp;
          </button>
        <span className="calories"> &nbsp;&nbsp;&nbsp;{compteurLoubyi} </span>
		<span className="calories">&nbsp;&nbsp;&nbsp;kcal/100 g&nbsp;&nbsp;&nbsp;</span>

          <button className="btnLoub"
            onClick={() => {
              setCompteurLoubyi();
            }}
          >
            reset
          </button>
 
	</div>
		<div className="recipe">
			<h2>Instructions</h2>
			<ol className="instructions">
				<li className="listy">Couper les extrémités des haricots verts et jeter</li>
				<li className="listy">Couper chaque haricot vert en 3 ou 4 sections.</li>
				<li className="listy">Laver et égoutter les haricots verts.</li>
				<li className="listy">Dans une grande casserole, faire cuire, dans l’huile végétale, l’oignon haché, l’ail écrasé et les cubes de boeuf en remuant régulièrement.</li>
				<li className="listy">Saler et poivrer.</li>
				<li className="listy">Mélanger le tout et continuer la cuisson à feu moyen.</li>
                <li className="listy">Ajouter la pâtes tomates et l’eau et continuer la cuisson;</li>
                <li className="listy">Lorsque la viande est bien cuite (30aine de minutes), ajouter les haricots.</li>
                <li className="listy">Bien mélanger le tout.</li>
                <li className="listy">Continuer la cuisson à feu moyen, en remuant de temps à autre, jusqu’à la cuisson complète (30aine de minutes) des haricots verts. Ajouter de l’eau au besoin.</li>
                <li className="listy">Servir chaud avec du riz blanc ou aux vermicelles.</li>
			
			</ol>
		</div>
			<p className="yummy"><strong >Sahtein!</strong></p>
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img src="https://images.squarespace-cdn.com/content/v1/5c9008ca9d41496101f5705d/1617401789366-FBBB11HMO8BS6MVGGVA1/598213B3-E1F1-4CF8-8E40-0D6E069EE6B7.jpeg?format=1500w" alt='Done'  />
			</div>
		</div>
	
</div>

    <Footer />
    </div>

  )
}

export default Loubyi;