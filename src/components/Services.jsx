import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUtensils, faSpa, faCalendar, faHiking, faHeadset } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div>
      <section class="services">
        <div class="services-title">
          <h1>Our Services</h1>
          <h2>Discover What We Offer</h2>
        </div>
        <div class="services-cards">
          <div class="card">
			 <i>
			 <FontAwesomeIcon icon={faBed} size="fa-2xl" />
			 </i>
            <span>Quality Rooms</span>
            <p>
              Enjoy our comfortable and luxurious rooms, fully equipped with all
              amenities you need for a relaxing stay.
            </p>
          </div>
          <div class="card">
            <i class="fas fa-utensils fa-2xl">
				<FontAwesomeIcon icon={faUtensils} size="fa-2xl" />
				</i>
            <span>Delicious Meals</span>
            <p>
              Indulge in our delicious meals, prepared by our top chefs using
              only the freshest ingredients.
            </p>
          </div>
          <div class="card">
            <i class="fas fa-spa fa-2xl">
				<FontAwesomeIcon icon={faSpa} size="fa-2xl" />
				</i>
            <span>Spa & Wellness</span>
            <p>
              Relax and rejuvenate in our spa and wellness center, offering a
              range of treatments and therapies.
            </p>
          </div>
          <div class="card">
            <i class="fas fa-calendar-alt fa-2xl">
				<FontAwesomeIcon icon={faCalendar} size="fa-2xl" />
				</i>
            <span>Event Planning</span>
            <p>
              Let us help you plan your next event, whether it's a wedding,
              conference, or party, we've got you covered.
            </p>
          </div>
          <div class="card">
            <i class="fas fa-hiking fa-2xl">
				<FontAwesomeIcon icon={faHiking} size="fa-2xl" />
				</i>
            <span>Outdoor Activities</span>
            <p>
              Explore the great outdoors with our range of outdoor activities,
              including hiking, biking, and more.
            </p>
          </div>
          <div class="card">
            <i class="fas fa-headset fa-2xl">
				<FontAwesomeIcon icon={faHeadset} size="fa-2xl" />
				</i>
            <span>24/7 Support</span>
            <p>
              Our dedicated team is available 24/7 to assist you with any
              questions or concerns you may have during your stay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
