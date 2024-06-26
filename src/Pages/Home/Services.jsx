import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col text-center space-y-5 ">
        <h4 className="text-3xl font-bold text-red-500">Service</h4>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {
          services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        }
      </div>
    </div>
  );
};

export default Services;
