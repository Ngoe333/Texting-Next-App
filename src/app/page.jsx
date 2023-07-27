import style from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import dashbord from '@/app/dashbord/register/page'
export default function Home() {
  return (
    <>
      <div className={style.container}>
    <div className={style.text_container}>
        <h1 className= {style.text}>FAITES VOS <span className={style.span}>ACHATS ET RESERVATIONS</span><br/> SANS VOUS DEPLACEZ AU MARCHE <br/>  GRAND ENGARE !</h1>

        <p className={style.description}>
          votre panier de manager sera facile avec Food Market.
        </p>

        <Link className={style.btc} href='/dashbord'>S'ENREGISTER</Link>

    </div>
    
      <div className={style.image_container}>
        <Image priority className={style.image} src='/Me.jpg' width={530} height={530} alt='image d"acceil'/>
      </div>

   </div>

    <div className={style.section2}>

      <div className={style.container_image}>
        <Image className={style.image1} src='/marche.jpg' width={500} height={500} />
      </div>

      <div className={style.te}>
        <div className={style.flex_colum}>
            <h1 className={style.text2}>Comment effectue un commande ?</h1>
            <div className={style.line2}></div>
        </div>

        <div className={style.width}>           
            <p className={style.description1}>
                Profitez de notre nouveau Mascara 4D pour améliorée en Livraison gratuite et rapide en 45 minutes si vous êtes à
                Douala.douceur et sans  et vous aider à atteindre les cils  multidimensionnels plus complets et un look intense,
                superbe et naturel.Livraison à vos frais si vous n'êtes pas à Douala.Prix actuel 22000 FCFA au lieu de 33500 FCFA 
                car il est en promotion. Contactez-nous rapidement via le bouton message en bas à droite pour en profiter.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt dolorem quis nostrum, in delectus debitis ipsa fugit vitae ducimus dolore excepturi voluptate, dignissimos accusantium consequatur voluptates provident minima! Rem, quo.
    
            </p>
        </div>
      
      </div>

    </div>

    <div className={style.section3}>
      <h1 className={style.text3}>Nos Services</h1>
      <div className={style.online_text}></div>

       <div className={style.row}>
          <div>
            <Image className={style.image_row} src='/Acceuill-Image1.jpg' width={150} height={150}/>
            <p className={style.descrip}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam!</p>
          </div>

          <div>
            <Image className={style.image_row} src='/Acceuill-Image2.jpg' width={150} height={150}/>
            <p className={style.descrip}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam!</p>
          </div>

          <div>
            <Image className={style.image_row} src='/Acceuill-Image3.jpg' width={150} height={150}/>
            <p className={style.descrip}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quibusdam!</p>
          </div>
          
        </div>
    


    </div>

    

    </>
   
   
 
   
  )
};
