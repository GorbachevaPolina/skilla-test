import React, {FC} from 'react'
import search from '../../images/search.svg'
import profile from '../../images/profile-user.svg'
import './header.scss'

const Header: FC = () => {
    return (
        <header>
            <p className='date'>Среда, 13 окт</p>

            <section className='stats'>
            <div>
                <p className='calls'>Новые звонки <span>20 из 30 шт</span></p>
                <div className='stat'>
                    <div className='green-progress'></div>
                </div>
            </div>
            <div>
                <p className='quality'>Качество разговоров <span>40%</span></p>
                <div className='stat'>
                    <div className='yellow-progress'></div>
                </div>
            </div>
            <div>
                <p className='conversion'>Конверсия в заказ <span>67%</span></p>
                <div className='stat'>
                    <div className='red-progress'></div>
                </div>
            </div>
            </section>

            <section className='profile'>
                <img src={search} className='search'/>

                <select>
                    <option>ИП Сидорова Александра Михайловна</option>
                </select>

                <img src={profile} className='profile-picture'/>
                <select>
                    <option></option>
                </select>
            </section>
        </header>
    )
}

export default Header;