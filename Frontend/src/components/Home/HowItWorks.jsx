import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>Unlock your potential! Join JobZee today and take the first step toward your dream job.
                 Your future starts here!</p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>Whether you’re seeking the perfect opportunity or looking to connect talent with your business, JobZee is where careers take flight.
                 Find your next job or post today and watch success unfold!</p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>Ready to make a change? Apply for your dream job or discover top talent—JobZee is your partner in finding the perfect fit. 
                Let’s shape the future together!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
