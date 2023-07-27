import style from'@/app/contact/page.module.css'
import Image from 'next/image';


const Contact = () =>{
    return(
        <>
             <h1 className={style.text}>Contact</h1>

             <Image src='/LogoMarketExpress237.png' width={500} height={500} alt='menu'/>

        </>
       
    )
}



export default Contact;