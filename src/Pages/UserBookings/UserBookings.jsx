import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import BookingTableRow from "./BookingTableRow";
import Swal from "sweetalert2";

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


    /* delete function  */
    const handleDelete = (id) => {
        const porceed = confirm('Are you sure you want to delete it ?')
        if (porceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {

                        /* delete success alert */
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Delete Successfully",
                            showConfirmButton: false,
                            timer: 1000
                        });

                        /* ui theke delte item clear kore dite hobe  */
                        const remaining = userBookings.filter(booking => booking._id !== id)
                        setUserBookings(remaining)
                    }
                })
        }

    }
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
                            <th>Image</th>
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
                                    handleDelete={handleDelete}
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