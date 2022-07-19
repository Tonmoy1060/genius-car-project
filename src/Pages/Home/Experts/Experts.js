import React, { useEffect, useState } from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Johnson Trailer", img: expert1 },
  { id: 2, name: "Mouke Hardson", img: expert2 },
  { id: 3, name: "Stiphen Lerri", img: expert3 },
  { id: 4, name: "Handei Claim", img: expert4 },
  { id: 5, name: "Rogar Loris", img: expert5 },
  { id: 6, name: "Aristen Lorry", img: expert6 },
];

const Experts = () => {
  return (
    <div>
      <h1 className="text-center text-primary mt-5">Out Experts</h1>

      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-5">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
