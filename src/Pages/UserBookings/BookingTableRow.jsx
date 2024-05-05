
const BookingTableRow = ({ booking, handleDelete }) => {
    const { _id, date, serevice_titile, price, image } = booking;



    return (

        < tr >
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <td>
                <div className="avatar">
                    <div className=" rounded w-10 h-10 lg:w-24 lg:h-24">
                        <img src={image} />
                    </div>
                </div>

            </td>
            <td>
                {serevice_titile}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr >

    );
};

export default BookingTableRow;