import React from "react";
import "./Rooms.css"

function ParallaxRooms() {
  return (
    <>
      <div className="background">
        <span className="a-place">
          A Place of <br />
          <span className="animated_text">
            <span>Harmony</span>
            <span>Serenity</span>
            <span>Tranquility</span>
          </span>
        </span>
      </div>

      <div id="rooms" className="our_and_yourhome_text">
        <p className="our_acc">OUR ACCOMMODATION</p>
        <p className="rooms_text">Your Home Away From Home</p>
      </div>

      <section className="rooms">
        <div className="room1">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">Garden Suite</h3>
              <h3 className="price">
                €1.250 <span className="per_night">/Per night</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td size">Size:</td>
                  <td className="td">30m²</td>
                </tr>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 4 persons</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">King Beds</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                    Wifi, TV, Ensuite bathrooms,...
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              className="details"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              MORE DETAILS
            </a>
          </div>
        </div>
        <div className="room2">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">Premium King Room</h3>
              <h3 className="price">
                €2.250<span className="per_night">/Per night</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td size">Size:</td>
                  <td className="td">40m²</td>
                </tr>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 4 persons</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">Queen Beds</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                    Wifi, TV, Ensuite bathrooms,...
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              className="details"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              MORE DETAILS
            </a>
          </div>
        </div>
        <div className="room3">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">Standart Room</h3>
              <h3 className="price">
                €1.050 <span className="per_night">/Per night</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td size">Size:</td>
                  <td className="td">20m²</td>
                </tr>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 2 persons</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">Single Beds</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                    Wifi, TV, Ensuite bathrooms,...
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              className="details"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              MORE DETAILS
            </a>
          </div>
        </div>
        <div className="room4">
          <div className="rooms_inlinetext">
            <div>
              <h3 className="room_name">Family Room</h3>
              <h3 className="price">
                €2.000 <span className="per_night">/Per night</span>
              </h3>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <td className="td size">Size:</td>
                  <td className="td">30m²</td>
                </tr>
                <tr>
                  <td className="td capacity">Capacity:</td>
                  <td className="td">Max 5 persons</td>
                </tr>
                <tr>
                  <td className="td bed">Bed:</td>
                  <td className="td">King Beds</td>
                </tr>
                <tr>
                  <td className="td services">Services:</td>
                  <td className="td td_wifi">
                    Wifi, TV, Ensuite bathrooms,...
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              className="details"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              MORE DETAILS
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ParallaxRooms;
