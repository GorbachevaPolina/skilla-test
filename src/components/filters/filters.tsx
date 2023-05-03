import React, {FC, useState} from 'react'
import search from '../../images/search.svg'
import './filters.scss'
import { useSelector, useDispatch } from '../../services/types/store'
import { SET_TYPES } from '../../services/actions/table-contents'

const Filters: FC = () => {
    const [input, setInput] = useState("")
    const [selectValue, setSelectValue] = useState("")
    const [isFiltered, setIsFiltered] = useState(false)
    const { days } = useSelector(store => store.table)
    const dispatch = useDispatch()

    const filterByType = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: SET_TYPES,
            filter: (e.target.value as "" | "1" | "0")
        })
        setSelectValue(e.target.value)
        setIsFiltered(true)
    }

    const clearFilter = () => {
        dispatch({
            type: SET_TYPES,
            filter: ""
        })
        setIsFiltered(false)
        setSelectValue("")
    }

    return (
        <div className='filters-container'>
            <div className='search'>
                <img src={search} />
                <input 
                    type="text" 
                    placeholder='Поиск по звонкам' 
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </div>

            <div className={`filters ${isFiltered ? "filtered" : ""}`}>
                {
                    isFiltered ?
                        <button onClick={() => clearFilter()}>Сбросить фильтры <span>&#10005;</span></button> :
                        null
                }
                <select title='type' onChange={(e) => filterByType(e)} value={selectValue}>
                    <option value="">Все типы</option>
                    <option value="0">Исходящие</option>
                    <option value="1">Входящие</option>
                </select>
                <select title='employees'>
                    <option value="all">Все сотрудники</option>
                </select>
                <select title='calls'>
                    <option value="all">Все звонки</option>
                </select>
                <select title='sources'>
                    <option value="all">Все источники</option>
                </select>
                <select title='ratings'>
                    <option value="all">Все оценки</option>
                </select>
                <select title='errors'>
                    <option value="all">Все ошибки</option>
                </select>
            </div>
        </div>
    )
}

export default Filters