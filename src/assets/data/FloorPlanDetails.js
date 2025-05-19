// FloorPlanDetails.js
// This file houses the list of details that we need to access for the different floor plans.
// A separate file was used to add modularity to the project and clean up the existing section files.

import floorplan1 from "../images/FloorPlan1.jpg";
import floorplan2 from "../images/FloorPlan2.jpg";
import floorplan3 from "../images/FloorPlan3.jpg";

const FloorPlanDetails = [
  {
    id: 1,
    title: "Floor Plan One",
    imageSrc: floorplan1,
    details: ["2,400 sq ft", "Two Bathrooms", "Elevated Mezzanine", "Exclusive Balcony"],
  },
  {
    id: 2,
    title: "Floor Plan Two",
    imageSrc: floorplan2,
    details: ["3,600 sq ft", "Spacious Mezzanine", "Large Private Lounge", "Exclusive Balcony"],
  },
  {
    id: 3,
    title: "Floor Plan Three",
    imageSrc: floorplan3,
    details: ["1,200 sq ft", "Optimized Lounge Area", "Luxury kitchen", "Designated Office Space"],
  },
];

export default FloorPlanDetails;