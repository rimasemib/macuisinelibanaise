import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Hummos.css";


const Hummos = () => {
   
  return (
    <div >

    <Header />
    <div class='myPage'>
  <div class='myTitle'>
    <h1>Houmous (purée de pois chiches)</h1>
      
  </div>

  <div class="pictureContainer">
    <div class="pictureImg">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/1024px-Lebanese_style_hummus.jpg
    "  alt="Houmous (purée de pois chiches)"/>
    </div>
      
    </div>
  <figcaption>Hummos</figcaption>
    <div class="description">
    <p>Houmous signifie pois-chiche en arabe. Il désigne donc uniquement la purée de pois chiche (à laquelle on mélange le tahini) : aucun besoin donc de dire “houmous de pois chiche”.  </p>
    <p>Le mot houmous a différentes orthographes en français : hoummous, homos, humus, houmos, oumos, hummus…</p>
      
    </div>
    <div class= "pictureContainer">
      <div  class= "pictureImg">
        <img src="https://healthyfitnessmeals.com/wp-content/uploads/2020/03/How-to-make-homemade-hummus-7.jpg" alt="purée de pois chiches"/>
        </div>
    </div>
  <figcaption>purée de pois chiches</figcaption>
  <div class="recipe">
    <ul>
        <li>Portions: 4 personnes</li>
        <li>Temps de préparation:15 minutes</li>
        <li>Temps de cuisson:15 minutes</li>
        <li>Temps total:30 minutes</li>
    </ul>
</div>
<div class="recipe">
    <h2>Les Ingrédients</h2>
    <div class="ingredients">
        <p> &bull;&nbsp;&nbsp;&nbsp;&nbsp;200 g de pois chiches sec</p>
        <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;100 g de Tahini(Crème de sesame)</p>
        <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;1 citron(s)</p>
        <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;2 gousses d' ail</p>
        <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;2 pincées de bicarbonate de soude alimentaire</p>
        <p>&bull;&nbsp;&nbsp;&nbsp;&nbsp;huile d'olive</p>
        
    </div>
</div>
<div class="recipe">
    <h2>Instructions</h2>
    <div class="ingredients">
        <p>1-&nbsp;&nbsp;&nbsp;&nbsp;La veille - Préparer les pois chiches:Faire tremper les pois chiches toute la nuit dans 2 fois leur volume en eau.</p>
        <p>2-&nbsp;&nbsp;&nbsp;&nbsp;Préparation du houmous:Verser les pois chiches dans une grande casserole. Recouvrir d'eau et ajouter 1 pincée de bicarbonate de soude. Faire cuire à petits bouillons &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pendant 30 minutes (les pois chiches doivent être tendres).Égoutter et réserver.</p>
        <p>3-&nbsp;&nbsp;&nbsp;&nbsp;Peler l'ail et l'écraser. Mélanger avec le jus du citron.</p>
        <p>4-&nbsp;&nbsp;&nbsp;&nbsp;Mettre les pois chiche dans un mixeur. Ajouter l'ail écrasé et le citron, le tahiné ainsi qu'une pincée de bicarbonate de soude. Ajouter 2 . à soupe d'eau (idéalement l'eau de &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cuisson des pois chiche).Mixer jusqu'à obtenir une crème onctueuse, plus ou moins lisse (ça, c'est à vous de voir). </p>
        <p>5-&nbsp;&nbsp;&nbsp;&nbsp;Déposer votre houmous dans l'assiette de service. Arroser d'huile d'olive et saupoudrer un peu de zaatar</p>
        <p>6-&nbsp;&nbsp;&nbsp;&nbsp;Vous pouvez ajouter de l'huile d'olive à votre houmous lorsque vous le mixer. Cela va permettre de le rendre un peu plus liquide (mais il sera du coup plus gras).</p>
    </div>
  </div>
  <p class= "wish"><strong>Sahtein!</strong><br /><br /></p>
      <div class="pictureContainer">
    <div class="pictureImg">
      <img src="https://cache.marieclaire.fr/data/photo/w1000_ci/4y/houmous-a-la-libanaise.webp" alt="Done"/>
  </div>
   </div>
    </div>
    <Footer />
    </div>
  )
}

export default Hummos;

