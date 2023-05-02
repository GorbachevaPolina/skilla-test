import React, {FC} from "react";
import logo from '../../images/logo.svg'
import results from '../../images/results.svg'
import agents from '../../images/agents.svg'
import calls from '../../images/calls.svg'
import documents from '../../images/documents.svg'
import executor from '../../images/executor.svg'
import knowledgeDb from '../../images/knowledge-db.svg'
import messages from '../../images/messages.svg'
import orders from '../../images/orders.svg'
import report from '../../images/report.svg'
import settings from '../../images/settings.svg'
import plus from '../../images/plus-btn.svg'
import exclamation from '../../images/exclamation-btn.svg'
import './sidebar.scss'

const Sidebar: FC = () => {
    return (
        <div className="sidebar">
            <img src={logo} className="logo"/>
            <nav>
                <ul>
                    <li>
                        <img src={results} />
                        <p>Итоги</p>
                    </li>
                    <li>
                        <img src={orders}/>
                        <p>Заказы</p>
                    </li>
                    <li>
                        <img src={messages}/>
                        <p>Сообщения</p>
                    </li>
                    <li className="active">
                        <img src={calls}/>
                        <p>Звонки</p>
                    </li>
                    <li>
                        <img src={agents}/>
                        <p>Контрагенты</p>
                    </li>
                    <li>
                        <img src={documents}/>
                        <p>Документы</p>
                    </li>
                    <li>
                        <img src={executor}/>
                        <p>Исполнители</p>
                    </li>
                    <li>
                        <img src={report}/>
                        <p>Отчеты</p>
                    </li>
                    <li>
                        <img src={knowledgeDb}/>
                        <p>База знаний</p>
                    </li>
                    <li>
                        <img src={settings}/>
                        <p>Настройки</p>
                    </li>
                </ul>
            </nav>
            <button>
                <span>Добавить заказ</span>
                <img src={plus} />
            </button>
            <button>
                <span>Оплата</span>
                <img src={exclamation} />
            </button>
        </div>
    )
}

export default Sidebar;