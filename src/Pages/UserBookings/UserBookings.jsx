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

        //! confirmation alert for delete

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            /* delete success alert */
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success",
                            });

                            /* জেই কফি খুজতেছ সেই কফির আইডি বাদে অন্য জত আইডি আছে সব স্টেটের মদ্ধে সেভ করে রেখ্বে দাও */

                            const remaining = userBookings.filter(booking => booking._id !== id)
                            setUserBookings(remaining)
                        }
                    })
            }
        })
        // const porceed = confirm('Are you sure you want to delete it ?')

    }
    return (
        <div>
            <div className=" flex items-center justify-center p-4 font-bold text-red-500 mt-5">
                <h1 className="text-2xl lg:text-5xl"> My Total Booking No : {userBookings.length}</h1>
            </div>
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