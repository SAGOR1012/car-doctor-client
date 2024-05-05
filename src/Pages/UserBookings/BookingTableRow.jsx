
const BookingTableRow = ({ booking }) => {
    const { date, serevice_titile, price, image } = booking;
    return (

        < tr >
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className=" rounded w-24 h-24">
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