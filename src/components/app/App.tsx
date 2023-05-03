import React, {useEffect} from 'react';
import './App.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Table from '../table/table';
import { useSelector, useDispatch } from '../../services/types/store';
import { getStartDate, getToday } from '../../services/utils/date-conversion';
import { SET_DATA } from '../../services/actions/table-contents';
import { getDataReq } from '../../services/utils/get-data';

function App() {
  const { days, in_out } = useSelector((store) => store.table)
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      let result = await getDataReq(days, in_out)
      dispatch({
        type: SET_DATA,
        data: result
      })
    } catch (error: any) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [days, in_out])

  return (
    <div className="app">
      <Sidebar />
      <div className='main'>
        <Header />
        <Table />
      </div>
    </div>
  );
}

export default App;
