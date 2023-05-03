import React, {FC, useState} from "react";
import { useSelector } from "../../services/types/store";
import { parseSeconds, parseTime } from "../../services/utils/date-conversion";
import './calls.scss'

const Calls: FC = () => {
    const { data } = useSelector((store) => store.table)
    const [audioURI, setAudioURI] = useState({
        URI: "",
        id: 0
    });
    const [isMouseOver, setIsMouseOver] = useState(false)

    const getRecording = async (id: string, partnership_id: string, call_id: number) => {
        setIsMouseOver(true)
        if (id !== "") {
            try {
                let response = await fetch(
                    `https://api.skilla.ru/mango/getRecord?record=${id}&partnership_id=${partnership_id}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
                            "Content-Transfer-Encoding": "binary",
                            "Content-Disposition": "filename='record.mp3'",
                            "Authorization": 'Bearer testtoken'
                        }
                    }
                )
                let result = await response.blob()
                const audioUrl = window.URL.createObjectURL(new Blob([result]));
                setAudioURI({
                    URI: audioUrl,
                    id: call_id
                });
            } catch (error: any) {
                console.error(error.message)
            }
        } else {
            cleanData()
        }
    }

    const cleanData = () => {
        setAudioURI({
            URI: "",
            id: 0
        })
        setIsMouseOver(false)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Тип</th>
                    <th>Время</th>
                    <th>Сотрудник</th>
                    <th>Звонок</th>
                    <th>Источник</th>
                    <th>Оценка</th>
                    <th className="align-right">Длительность</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.results.map((item) => {
                        return (
                            <tr 
                                key={item.id} 
                                onMouseEnter={() => getRecording(item.record, item.partnership_id, item.id)}
                                onMouseLeave={() => cleanData()}
                            >
                                <td className="arrow">
                                    {item.in_out ? 
                                        <span style={{color:"#005FF8"}}>&#8601;</span> : 
                                        item.status === "Дозвонился" ?
                                        <span style={{color:"#28A879"}}>&#8599;</span> :
                                        <span style={{color:"#EA1A4F"}}>&#8599;</span>}
                                </td>
                                <td>
                                    {parseTime(item.date)}
                                </td>
                                <td>
                                    <img src={item.person_avatar} />
                                </td>
                                <td>
                                    {item.from_number}
                                </td>
                                <td>
                                    {item.source}
                                </td>
                                <td></td>
                                <td className="align-right recording">
                                {
                                    audioURI.URI !== "" ?
                                        item.id === audioURI.id && isMouseOver ?
                                        <audio controls src={audioURI.URI}>
                                            Your browser does not support the
                                            <code>audio</code> element.
                                        </audio> :
                                        <span>{parseSeconds(item.time)}</span> : 
                                        <span>{parseSeconds(item.time)}</span>
                                }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Calls;