import React from 'react'
import moment from 'moment';


const InfoListItem = ({item}) => {
    return (
        <>
            <tr key={item._id}>
                <td>{moment(item.date_created, 'DD-MM-YYYY').format('YYYY-MM-DD')}</td>
                <td>{item.number}</td>
                <td>{moment(item.date_supplied, 'DD-MM-YYYY').format('YYYY-MM-DD')}</td>
                <td>{item.comment}</td>
            </tr>
        </>
    );
}

export default InfoListItem;