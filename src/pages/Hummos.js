import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Hummos.css";


const Hummos = () => {
   
  return (
    <div >
    <Header />
    <div className='body'>
    <h1>Houmous (purée de pois chiches)</h1>

<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/1024px-Lebanese_style_hummus.jpg
    " alt="Houmous (purée de pois chiches)"/>
    
    <figcaption>Hummos</figcaption>
</figure>

<div className="description">
    <p>Houmous signifie pois-chiche en arabe. Il désigne donc uniquement la purée de pois chiche (à laquelle on mélange le tahini) : aucun besoin donc de dire “houmous de pois chiche”.  </p>
    <p>Le mot houmous a différentes orthographes en français : hoummous, homos, humus, houmos, oumos, hummus…</p>
    <figure>
        <img src="https://healthyfitnessmeals.com/wp-content/uploads/2020/03/How-to-make-homemade-hummus-7.jpg" alt="purée de pois chiches"/>
        

        <figcaption>purée de pois chiches</figcaption>
    </figure>
</div>

<div className="recipe" id="1">
    <ul>
        <li>Portions: 4 personnes</li>
        <li>Temps de préparation:15 minutes</li>
        <li>Temps de cuisson:15 minutes</li>
        <li>Temps total:30 minutes</li>
    </ul>
</div>
<div className="recipe" id="2">
    <h2 id="ingredients">Les Ingrédients</h2>
    <ol className="ingredients" type="1">
        <li>&#8226;&nbsp;&nbsp;&nbsp;&nbsp;200 g de pois chiches sec</li>
        <li>&#8226;&nbsp;&nbsp;&nbsp;&nbsp;100 g de Tahini(Crème de sesame)</li>
        <li>&#8226;&nbsp;&nbsp;&nbsp;&nbsp;1 citron(s)</li>
        <li>&#8226;&nbsp;&nbsp;&nbsp;&nbsp;2 gousses d' ail</li>
        <li>&#8226;&nbsp;&nbsp;&nbsp;&nbsp;2 pincées de bicarbonate de soude alimentaire</li>
        <li>&#8226;&nbsp;&nbsp;&nbsp;&nbsp;huile d'olive</li>
        
    </ol>
</div>
<div className="recipe" id="3">
    <h2 id="process">Instructions</h2>
    <ol className="instructions" type="1">
        <li>1-&nbsp;&nbsp;&nbsp;&nbsp;La veille - Préparer les pois chiches:Faire tremper les pois chiches toute la nuit dans 2 fois leur volume en eau.</li>
        <li>2-&nbsp;&nbsp;&nbsp;&nbsp;Préparation du houmous:Verser les pois chiches dans une grande casserole. Recouvrir d'eau et ajouter 1 pincée de bicarbonate de soude. Faire cuire à petits &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bouillons pendant 30 minutes (les pois chiches doivent être tendres).Égoutter et réserver.</li>
        <li>3-&nbsp;&nbsp;&nbsp;&nbsp;Peler l'ail et l'écraser. Mélanger avec le jus du citron.</li>
        <li>4-&nbsp;&nbsp;&nbsp;&nbsp;Mettre les pois chiche dans un mixeur. Ajouter l'ail écrasé et le citron, le tahiné ainsi qu'une pincée de bicarbonate de soude. Ajouter 2 . à soupe d'eau &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(idéalement l'eau de cuisson des pois chiche).Mixer jusqu'à obtenir une crème onctueuse, plus ou moins lisse (ça, c'est à vous de voir). </li>
        <li>5-&nbsp;&nbsp;&nbsp;&nbsp;Déposer votre houmous dans l'assiette de service. Arroser d'huile d'olive et saupoudrer un peu de zaatar</li>
        <li>6-&nbsp;&nbsp;&nbsp;&nbsp;Vous pouvez ajouter de l'huile d'olive à votre houmous lorsque vous le mixer. Cela va permettre de le rendre un peu plus liquide (mais il sera du coup plus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gras).</li>
    </ol>
    <p id="finished"><strong>Sahtein!</strong><br /><br /><img src="https://cache.marieclaire.fr/data/photo/w1000_ci/4y/houmous-a-la-libanaise.webp" alt="Done" id="finishedrecipelook" /></p>
</div>
      
    </div>
    <Footer />
    </div>
  )
}

export default Hummos;

