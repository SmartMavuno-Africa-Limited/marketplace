import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="IoT Farm Devices" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Crop Monitoring and Management"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Soil Moisture Sensors:
          Measure soil moisture levels to ensure crops get the right amount of water. They help prevent overwatering or drought stress, improving crop yield and water conservation.
          Temperature and Humidity Sensors:
          Monitor environmental conditions like air temperature and humidity, helping farmers adapt to weather changes and maintain optimal conditions for crops.
          Smart Weather Stations:
          Provide precise, localized weather updates, such as rainfall, wind speed, and temperature, enabling better decision-making for planting, irrigation, and harvesting.
          Crop Health Drones:
          Use advanced cameras and sensors to detect pests, diseases, and nutrient deficiencies from above, reducing crop losses and maximizing productivity."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Energy and Resource Efficiency"
          price="180.00"
          color="Gray"
          badge={true}
          des="Solar-Powered IoT Nodes:
          Use renewable solar energy to power IoT devices on farms, ensuring continuous operation even in remote areas while reducing energy costs.
          Smart Energy Meters:
          Monitor electricity usage across farm operations, helping identify areas of high energy consumption and improve efficiency.
          Biogas Plant Monitors:
          Track biogas production from farm waste and ensure the system is running efficiently, providing a sustainable energy source for farm operations."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Irrigation and Water Management"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Automated Irrigation Systems:
          These systems use real-time data from soil sensors to deliver the exact amount of water needed, reducing waste and ensuring efficient irrigation.
          Water Flow Meters:
          Track water usage in irrigation systems, helping farmers optimize water consumption, lower costs, and reduce environmental impact.
          Rainfall Sensors:
          Measure rain levels and integrate data into irrigation plans to avoid overwatering after heavy rains."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Farm Security"
          price="220.00"
          color="Black"
          badge={true}
          des="Motion-Activated Cameras:
          Detect and record activity around the farm, alerting farmers of potential threats like theft, trespassing, or wildlife intrusion.
          Geofencing Devices:
          Alert farmers when animals, equipment, or workers leave pre-defined boundaries, improving oversight and reducing losses.
          Smart Alarms and Lighting:
          Trigger alarms and lights when unusual activity is detected, deterring intruders and protecting valuable farm assets"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
