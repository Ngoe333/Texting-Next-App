import React from 'react'
import Link from 'next/link'
import style from'./page.module.css'
import Image from 'next/image'


const Navbare = () => {
  return (
    <div>
        <header className={style.container}>
            <div className={style.logo}><Link href='/'><h1>Foods -<span> Market</span></h1></Link></div>

            <ul className={style.link}>
                <Link className={style.links}href='/'>Home</Link>
                <Link className={style.links} href='/dashbord'>Dashbord</Link>
                <Link className={style.links} href='/about'>About</Link>
                <Link className={style.links} href='/contact'>Contact</Link>    
            </ul>

            <Image className={style.menu} src='/Me.svg' width={20} height={20} alt='menu'/>

        </header>
    </div>
  )
}

export default Navbare