"use client"

import style from'./page.module.css'

 const Login = () => {
  return (
    
    <div>
          <div className={style.container}>
            <div>
              <h1  className={style.text}> Login </h1>
            </div>

            <div>
              <form className={style.form}>
                  <input className={style.input} type='text' name='name' placeholder='Ente(e) voter prenom' required/>
                  <input className={style.input} type='number' name='number' placeholder='Ente(e) numero de telephone' required/>
                  <button className={style.btc}  type='submit'>Envoyer</button>
              </form>
            </div>
      
          </div>

          {/* <div className={style.section2}>

        </div> */}
    </div>
    
  )
}

export default Login;


