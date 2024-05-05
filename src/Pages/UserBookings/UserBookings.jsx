import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import BookingTableRow from "./BookingTableRow";

const UserBookings = () => {
    const { user } = useContext(AuthContext);

    /* login kora user sob bookigs list dekhanor jonne dynamic url use kora hoyeche */
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    /* login kora user jokhn booking dibe tokhn ei state er moddhe save hoye thakbe  */
    const [userBookings, setUserBookings] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserBookings(data));
    }, [])
    return (
        <div>
            <h1 className="text-5xl"> user booking list : {userBookings.length}</h1>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Serevice Titile</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userBookings.map(booking =>
                                <BookingTableRow
                                    key={booking._id}
                                    booking={booking}
                                >
                                </BookingTableRow>)
                        }
                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div >
    );
};

export default UserBookings;