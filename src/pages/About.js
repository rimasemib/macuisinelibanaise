import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";


const About = () => {
  return (
    <div >

    <Header />
    <div className='boxes'>
         
      <p className='square shadow-5'><h2 className="aboutTit">About Us</h2><br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;La cuisine libanaise avait été particulièrement influencée au fil des siècles par les différents peuples installés pour des périodes plus ou moins longues sur son territoire. Elle garde tout de même son origine propre et une particularité qui lui fait ce qu'elle est aujourd'hui, malgré ses pérégrinations et ses mutations avant de parvenir jusqu'à nous.<br/><br/>&nbsp;&nbsp;&nbsp;
      Cette cuisine comprend une grande variété d'aliments, notamment des hors-d'œuvre, des grillades, des poêles à frire, des ragoûts et d'autres plats délicieux.  <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Notre cuisine Libanaise est connue pour sa richesse en féculents, fruits, légumes et fruits de mer. Dans mon site, je vous présente quelques plats de nos plats traditionnels Libanais.<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Mélange de l'entrée, plat principal et sucré car nous avons beaucoup de choses et vous présentons pour chaque plat.  Ce sont les ingrédients qui permettent de la faire de la meilleure manière et la plus simple, ainsi que les calories contenues dans chaque 100 g de chaque plat avec le temps de préparation.  <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;Combien de personnes pour chaque recette et le temps de préparation. Avec une présentation des photos ci-dessus.
        Je souhaite que vous aimerez mon site Web et m'encouragez à ajouter de plus en plus de détails et j'éspère qu'il vous plaira et vous apprécierez nos repas.</p>
 
    </div>
    <Footer />
    </div>
  )
}

export default About;

