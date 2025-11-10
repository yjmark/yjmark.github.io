---
title: Geospatial Information in Defense and Public Policy
---

## <a id="defs" style="scroll-margin-top: 80px;"></a>Geospatial Information in Defense

The application of geospatial information is crucial not only in the intelligence field but also in the non-intelligence military domain. The first example demonstrates how remote sensing is utilized in military-related urban planning, employing machine learning through Python. Additionally, the following three examples show where geospatial information can be applied in the military sector, utilizing JavaScript with public data.

------------------------------------------------------------------------

### Classification of Military Installations in North Korea on OpenStreetMap using Satellite Imagery and Machine Learning

April 24, 2025<br> Instructor: [Dr. Erus, Guray](https://github.com/gurayerus)<br> Teaching assistant: [Mr. Lebovits, Nissim](https://nlebovits.github.io/)

This assignment aims to create a complete classification of all military installations categories in North Korea (nK) based on Sentinel-2 Multispectral imagery, Visible Infrared Imaging Radiometer Suite (VIRRS) imagery, and OpenStreetMap (OSM) annotations. To achieve this, Random Forest (RF) algorithm was firstly applied using Python with 3 image values including NDVI, BSI, and NTL, along with longitude and latitude, the area of each polygon, and country from OSM polygons as independent variables. This approach achieved a classification accuracy of 67%. Second, Clay's model, which is able to utilize more pre-computed EO embeddings, was applied alongside the first RF model, and but failed to sampling and patching.

Click [here](https://github.com/yjmark/Remote-sensing/blob/main/assignments/Final_Jun_Youngsang/Final_Jun_Youngsang.pptx) to see the final slide deck.

![The flow chart shows procedure data collection and processing; Model 1, the Random Forest model with directly obtained image values such as NDVI, BSI, and NTL; Model 1 training and validation; Model 2, the Clay Foundation Model, which is the Random Forest model with an image-based pre-trained model; Model 2 training and validation; Compare the two models' performance](images/rs1.png?raw=true)

![Eight different satellite image pieces, for which their true classification values and the prediction classification results were different. (e.g., true classification values are airfields, but the prediction results were others, such as danger area, range, base, etc.)](images/rs2.png?raw=true)

------------------------------------------------------------------------

### The Storymap of Major U.S. Military Facilities

September 25, 2024<br> Instructor: [Mr. Poe, Mjumbe](https://about.mjumbepoe.com/)

This storymap aims to provide a brief history of the U.S. military and an overview of major military bases for those who may work for/with U.S. Forces regarding U.S. military facilities in the future. The storymap introduces five major military facilities in the U.S.: West Point, Eglin Air Force Base, Naval Station Norfolk, Camp Pendleton, and Peterson Space Force Base.

Click [here](https://yjmark.github.io/story-map-project/Jun_Youngsang/) to see the live version of the storymap.

![Screenshot of the web app showing a satellite image map of Eglin Air Force Base located in Florida, U.S., with the explanation of its history.](images/storymapimage.jpeg?raw=true)

------------------------------------------------------------------------

### DefenseBoard

October 26, 2024<br> Instructor: [Mr. Poe, Mjumbe](https://about.mjumbepoe.com/)

The DefenseBoard is a dashboard that uses spatial data to link various types of attributes in the defense sector such as military personnel, facilities, budget, logistics, etc. The map on the right displays publicly accessible base locations across the United States, while on the left, users can view attribute data by base, military unit, or region.

Click [here](https://yjmark.github.io/dashboard-project/Jun_Youngsang/) to see the live version of the DefenseBoard.

![Screenshot of the web app showing a satellite image map of the U.S. continent, with a layer of bubbles and numbers overlaid. The numbers represent the Fiscal Year 2023 installation budget of the Department of Defense, which are fictitious and do not reflect actual data.](images/dashboardimage.jpeg?raw=true)

------------------------------------------------------------------------

### Base Management System

December 18, 2024<br> Instructor: [Mr. Poe, Mjumbe](https://about.mjumbepoe.com/)

The Base Management System is a system for manage all kinds of events in a military base, such as training, exercise, sports, construction projects etc. This user-engagement project uses the Norfolk Naval Base in Virginia as an example. Therefore, the expected primary users of this system are the personnel stationed at the Norfolk Naval Base. The system will share schedules and locations of activities with relevant personnel within the base by utilizing Google Firebase.

Click [here](https://yjmark.github.io/engagement-project/Jun_Youngsang/) to see the live version of the Base Management System.

![Screenshot of the web app showing a map of Norfolk Naval Base, VA, with a layer of points and attribute data overlaid. The points on the map represent the events that will happen or are happening in the installation. One point on the screenshot shows V-29 Remodeling Construction, CAPT Wiggins in charge of it, which is held from January 30, 2025 to January 29, 2026. The event list on the left side includes 5 or more events like this, and users allow to edit or delete each event. Those are fictitious and do not reflect actual data.](images/engagementimage.jpeg?raw=true)

------------------------------------------------------------------------





<p style="font-size:11px">

Page template forked from <a href="https://github.com/evanca/quick-portfolio">evanca</a>

</p>

<a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" style="
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(248, 248, 248, 0.85);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  color: rgb(0,55,100);
  padding: 10px 15px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 16px;
">Top ↑</a>

<!-- Remove above link if you don't want to attribute -->
