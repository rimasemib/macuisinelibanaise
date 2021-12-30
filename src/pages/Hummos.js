import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Hummos.css";


const Hummos = () => {
   
  return (
    <div>


    <Header />
    <div className="myBody">
		<h1>Houmous (purée de pois chiches)</h1>
		<div className="myPic" >
			<div className="imgContainer1" >
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/1024px-Lebanese_style_hummus.jpg" alt="Houmous (purée de pois chiches)" />
			</div>
		</div>
		<p>Houmous signifie pois-chiche en arabe. Il désigne donc uniquement la purée de pois chiche (à laquelle on mélange le tahini) :aucun besoin donc de dire “houmous de pois chiche”.Le mot houmous a différentes orthographes en français : hoummous, homos, humus, houmos, oumos, hummus…</p>
	
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img className="myImg" src="https://healthyfitnessmeals.com/wp-content/uploads/2020/03/How-to-make-homemade-hummus-7.jpg" alt="purée de pois chiches"/>

			</div>
		</div>
	
	

		<div className="recipe">
			<ul className="detailsOn">
				<li className="listy">Portions: 4 personnes</li>
				<li className="listy">Temps de préparation:15 minutes</li>
				<li className="listy">Temps de cuisson:15 minutes</li>
				<li className="listy">Temps total:30 minutes</li>
			</ul>
		</div>
		<div className="recipe">
			<h2>Les Ingrédients</h2>
			<ol className="instructions" type='i'>
				<li className="listy">200 g de pois chiches sec</li>
				<li className="listy">100 g de Tahini(Crème de sesame)</li>
				<li className="listy">1 citron(s)</li>
				<li className="listy">2 gousses d' ail</li>
				<li className="listy">2 pincées de bicarbonate de soude alimentaire</li>
				<li className="listy">huile d'olive</li>
			
			</ol>

		</div>
		<div className="recipe">
			<h2>Instructions</h2>
			<ol className="instructions">
				<li className="listy">La veille - Préparer les pois chiches:Faire tremper les pois chiches toute la nuit dans 2 fois leur volume en eau. </li>
				<li className="listy">Préparation du houmous:Verser les pois chiches dans une grande casserole. Recouvrir d'eau et ajouter 1 pincée de bicarbonate de soude. Faire cuire à petits bouillons pendant 30 minutes (les pois chiches doivent être tendres).Égoutter et réserver.</li>
				<li className="listy">Peler l'ail et l'écraser. Mélanger avec le jus du citron </li>
				<li className="listy">Mettre les pois chiche dans un mixeur. Ajouter l'ail écrasé et le citron, le tahiné ainsi qu'une pincée de bicarbonate de soude. Ajouter 2 . à soupe d'eau (idéalement l'eau de cuisson des pois chiche).Mixer jusqu'à obtenir une crème onctueuse, plus ou moins lisse (ça, c'est à vous de voir).</li>
				<li className="listy">Déposer votre houmous dans l'assiette de service. Arroser d'huile d'olive et saupoudrer un peu de zaatar </li>
				<li className="listy">Vous pouvez ajouter de l'huile d'olive à votre houmous lorsque vous le mixer. Cela va permettre de le rendre un peu plus liquide (mais il sera du coup plus gras). </li>
			
			</ol>
		</div>
			<p className="yummy"><strong >Sahtein!</strong></p>
		<div className="myPic" >
			<div className="imgContainer1" >
	
				<img src="https://cache.marieclaire.fr/data/photo/w1000_ci/4y/houmous-a-la-libanaise.webp" alt='Done'  />
			</div>
		</div>
	
</div>

    <Footer />
    </div>

  )
}

export default Hummos;