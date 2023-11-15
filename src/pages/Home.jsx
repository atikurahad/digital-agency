import React from "react";
import photo1 from "../assets/images/Rectangle1.png";
import photo2 from "../assets/images/Rectangle2.png";
import photo3 from "../assets/images/Rectangle3.png";
import photo4 from "../assets/images/Rectangle4.png";

const Home = () => {
  return (
    <div className="bg-[#D7F5DC] h-[800px] w-[1440px]">
      <div className="grid grid-cols-2 mx-6">
        <section>
          <h1 className="text-6xl font-bold">
            Increase Your Coustomers Loyalty and Satisfaction
          </h1>
          <p>we help businesses like yours earn more coustomers,</p>
          <p>standout from competitors, make more money</p>
          <button className="btn  bg-[#20B15A]">Get Started</button>
        </section>

        <section className="flex  flex-col p-4 gap-5">
          <div className=" items-center justify-between">
            <img src={photo1} />
            <img src={photo2} />
        
          </div>
          <div className="flex items-center justify-between">
           
            <img src={photo3} />
            <img src={photo4} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
