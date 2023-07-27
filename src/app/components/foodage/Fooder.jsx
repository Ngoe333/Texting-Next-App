import React from 'react'
import style from '@/app/components/foodage/page.module.css'

const Fooder = () => {
  return (
    <div>
        <footer className={style.container}>
          <div className={style.text_container}>
            <h3 className={style.text}>Copyrigth 2023 by Food Market</h3>
          </div>

            <div className={style.social_icons}>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Whatssap</p>
            </div>
        </footer>
    </div>
  )
}

export default Fooder