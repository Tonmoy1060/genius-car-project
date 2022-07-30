import React from "react";
import useServices from "../../hooks/useServices";

const DeleteService = () => {
  const [services, setServices] = useServices([]);

  const deleteButton = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
         setServices(services.filter(service => service._id !== id ))
      });
  };

  return (
    <div className="services-container">
      <h1 className="mt-5 mb-4">delete Service</h1>
      <div className="service-container w-100 p-5 mx-auto container">
        {services.map((service) => (
          <h5 key={service._id}>
            {service.name} <br />
            <button onClick={() => deleteButton(service._id)} className="btn btn-primary">
              Delete
            </button>
          </h5>
        ))}
      </div>
    </div>
  );
};

export default DeleteService;
