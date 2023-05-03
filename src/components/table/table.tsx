import React, {FC} from "react";
import plus from '../../images/plus-color.svg'
import calendar from '../../images/calendar.svg'
import './table.scss'
import { useSelector, useDispatch } from "../../services/types/store";
import { ADD_DAYS, SUBSTRACT_DAYS } from "../../services/actions/table-contents";
import Filters from "../filters/filters";
import Calls from "../calls/calls";

const Table: FC = () => {
    const { days } = useSelector((store) => store.table)
    const dispatch = useDispatch()

    const removeDays = () => {
        if(days > 1) {
            dispatch({
                type: SUBSTRACT_DAYS
            })
        }
    }

    const addDays = () => {
        dispatch({
            type: ADD_DAYS
        })
    }

    const createLabel = () => {
        const titles = ['день', 'дня', 'дней']
        const cases = [2, 0, 1, 1, 1]
        return titles[days % 100 > 4 && days % 100 < 20 ? 2 : cases[days % 10 < 5 ? days % 10 : 0]]
    }

    return (
        <div className="table-container">
            <div className="info">
                <button className="balance-btn">
                    <span className="balance">Баланс: </span>
                    <span>272 &#8381;</span>
                    <img src={plus} />
                </button>
                <div className="days-info">
                    <span onClick={removeDays} className="arrow">&#8249;</span>
                    <img src={calendar}/>
                    <span className="days">{days} {createLabel()}</span>
                    <span onClick={addDays} className="arrow">&#8250;</span>
                </div>
            </div>
            <Filters />
            <Calls />
        </div>
    )
}

export default Table;