import React from 'react';

const BookingDisplay = (props) => {

    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.item_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.cost}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className='container'>
            <center><h2>Booking List</h2></center>
            <table className="table table-reponsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Item Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>

            </table>
        </div>
    )
}
export default BookingDisplay