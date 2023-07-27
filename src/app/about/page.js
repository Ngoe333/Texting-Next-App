import style from'./style.module.css'

const About = () =>{
    return(
        <div>
            <h1 className= {style.text}>Abouts</h1>

            <form className={style.form} action='/about' method='POST'>
                <input type ='text'  placeholder='Enter Your Name' required/>
                <input type ='email'  placeholder='Enter Your Email' required/>
            </form>
        </div>
        
    )
}



export default About;