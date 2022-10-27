import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/background.jpg";
import logo from "../images/airbnb.jpg";
import { ConnectButton, Icon, Select, DatePicker, Input, Button } from "web3uikit";
import { useState } from "react";


const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradinet"></div>
      </div>
      
      {/* footer started */ }
      
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          <div className="selected"><em>Hotels</em></div>
          <div><em>Home Stayes</em></div>
          <div><em>Flights</em></div>
          <div><em>Holiday packages</em></div>
          <div><em>Things To do</em></div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
       <div className="searchFields">
         <div className="inputs">
           Going to
          <Select
              //defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: "blore",
                  label: "Banglore",
                },
                {
                  id: "lGoa",
                  label: "Goa",
                },
                {
                  id: "db",
                  label: "Dubai",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
              ]}
            />
          </div>

          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Rooms&guests
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>
          <Link to={"/rentals"} state={{
            destination: destination,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests
          }}>
          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg="search" />
          </div>
          </Link>
        </div>
        
      {/* </div>
      <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live, work or just
          relax.
        </div> */}
        {/* <Button
          //text="Explore A Location"
          onClick={() => console.log(checkOut)}
        /> */}
        <div>
  
        <div >
          <img class="bottom-right" src ="https://media.istockphoto.com/photos/luxury-resort-picture-id104731717?k=20&m=104731717&s=612x612&w=0&h=40INtJRzhmU1O4Rj24zdY8vj4aGsWpPaEfojaVQ8xBo=" width="450" height="250"/>
          <img class ="bottom-left" src ="https://media.istockphoto.com/photos/couple-and-receptionist-at-counter-in-hotel-wearing-medical-masks-as-picture-id1224155565?k=20&m=1224155565&s=612x612&w=0&h=qQXBF6Se3RCPptZBHcJraj14e6PAfeP5BXG03q7KzeI=" width="450" height="250"/>
          <img class ="centered" src ="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80" width="450" height="250"/>
        </div>
        
          
        </div>

      </div>
    </>
  );
};

export default Home;