import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData()
    const { title, price, image, _id } = service;

    /* login kora user er data pawar jonne eita use kora hoyeche  */
    const { user } = useContext(AuthContext)

    const handleBookOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const phone = form.phone.value;
        const price = form.price.value;
        const serevice_titile = form.serevice_titile.value;

        const bookingDetails = {
            customerName: name,
            email: email,
            phone: phone,
            serevice_titile: serevice_titile,
            serevice_id: _id,
            price: price,
            date: date,
            image,

        }
        console.log(bookingDetails);

        /* data pathate hobe fetch kore  */

        fetch('https://car-doctor-server-nine-brown.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    // alert('order in confirmed')
                    Swal.fire({
                        title: "Success",
                        text: "Thank you booking",
                        icon: "success",
                    });
                }
                console.log(data);
            })

    }
    return (
        <div>
            <div className=" flex items-center justify-center p-4 font-bold text-red-500 mt-5">
                <h1 className="text-2xl lg:text-5xl">Booking Information</h1>
            </div>
            {/* form section */}
            <form onSubmit={handleBookOrder} className=" flex justify-center ">

                <div className=" w-full border  ">
                    <div className="  my-4 px-4 lg:px-20">

                        <div className="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" name="name" defaultValue={user?.displayName} placeholder="Name*" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Booking Date</span>
                                    </label>
                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="date" name="date" id="" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" name="email" defaultValue={user?.email} placeholder="Email*" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>

                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" name="phone" placeholder="Phone*" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>

                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" name="price" defaultValue={'$ ' + price} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>

                                    <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" name="serevice_titile" defaultValue={title} required />
                                </div>

                            </div>

                            <div className="my-4">
                                <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="my-2 w-full">
                                <button className="btn btn-block bg-red-500 font-bold text-white">Order Confirm</button>
                            </div>
                        </div>


                    </div>

                </div>
            </form>
        </div>
    );
};

export default CheckOut;