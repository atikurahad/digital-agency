import React from "react";
import photo1 from "../assets/images/Rectangle1.png";
import photo2 from "../assets/images/Rectangle2.png";
import photo3 from "../assets/images/Rectangle3.png";
import photo4 from "../assets/images/Rectangle4.png";
import google from "../assets/images/logos_google.png";
import monday from "../assets/images/logos_monday.png";
import notion from "../assets/images/Notion.png";
import slack from "../assets/images/Slack.png";
import trello from "../assets/images/Trello-logo-blue 1.png";

const Home = () => {
  return (
    <>
      <div className="bg-[#D7F5DC] h-[800px]">
        <div className="grid grid-cols-2 mx-6 pb-12 pt-6">
          <section>
            <h1 className="text-[50px] font-bold mx-6 p-4">
              Increase Your Coustomers Loyalty and Satisfaction
            </h1>
            <p className="text-[20px] font-bold mx-6 p-4">
              we help businesses like yours earn more coustomers,standout from
              competitors, make more money
            </p>
            <button className="btn  bg-[#20B15A] ml-10 p-4 ">
              Get Started
            </button>
          </section>

          <section className="flex  flex-col  gap-5">
            <div className="flex gap-4">
              <img className="w-full" src={photo1} />
              <img className="w-full" src={photo2} />
            </div>
            <div className="flex gap-0">
              <img className="w-full" src={photo3} />
              <img className="w-full" src={photo4} />
            </div>
          </section>
        </div>
        <div className="py-8 bg-white my-6 h-24">
        <section className="flex  items-center justify-around gap-6">
          <img src={google} />
          <img src={trello} />
          <img src={monday} />
          <img src={notion} />
          <img src={slack} />
        </section>
      </div>
      </div>

      
    </>
  );
};

export default Home;
