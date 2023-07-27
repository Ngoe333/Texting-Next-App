import style from'./page.module.css'
import Login from'./login/page'

const Dashbord = () => {
  return (
    <div>
      <div  className={style.container}> 
       <Login />
      </div>
    </div>
    
  )
}


export default Dashbord;
