import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import { useState } from "react";

function TravelList() {
 
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const handleDeletePlan = (plan) => {
        setTravelPlans(travelPlans.filter((p) => p.id !== plan.id));
    };

    return (
        <div className="travel-list">
            {travelPlans.map((travelPlan) => (
                <div key={travelPlan.id} className="travel-card">
                    <img src={travelPlan.image} alt={travelPlan.destination} />
                    <div className="travel-card-content">
                        <h2>{travelPlan.destination} ({travelPlan.days} days)</h2>
                        <p>{travelPlan.description}</p>
                        <p>Total Cost: ${travelPlan.totalCost}</p>
                        {travelPlan.totalCost > 1500 && <p className="premium">Premium</p>}
                        {travelPlan.totalCost < 350 && <p className="deal">Great Deal</p>}
                        {travelPlan.allInclusive && <p className="all-inclusive">All-Inclusive</p>}
                        <button onClick={() => handleDeletePlan(travelPlan)}>Delete 🗑️</button>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default TravelList;


/*
"id": 1,
    "destination": "Paris, France",
    "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/paris.jpg",
    "days": 7,
    "allInclusive": true,
    "totalCost": 2200,
    "description": "Explore the romantic streets of Paris.",
    "parts": [
      {
        "name": "All-Inclusive Package",
        "description": "Includes flights, hotel, meals, entertainment, tours and tickets to tourist attractions.",
        "cost": 2200
        */