---
title: Geospatial Information in Defense and Public Policy
---

## Geospatial Information in Defense

The application of geospatial information is crucial not only in the intelligence field but also in the non-intelligence military domain. The first example demonstrates how remote sensing is utilized in military-related urban planning, employing machine learning through Python. Additionally, the following three examples show where geospatial information can be applied in the military sector, utilizing JavaScript with public data.

------------------------------------------------------------------------

### Classification of Military Installations in North Korea on OpenStreetMap using Satellite Imagery and Machine Learning

April 24, 2025<br>
Instructor: [Dr. Erus, Guray](https://github.com/gurayerus)<br>
Teaching assistant: [Lebovits, Nissim](https://nlebovits.github.io/)

This assignment aims to create a complete classification of all military installations categories in North Korea (nK) based on Sentinel-2 Multispectral imagery, Visible Infrared Imaging Radiometer Suite (VIRRS) imagery, and OpenStreetMap (OSM) annotations. To achieve this, Random Forest (RF) algorithm was firstly applied using Python with 3 image values including NDVI, BSI, and NTL, along with longitude and latitude, the area of each polygon, and country from OSM polygons as independent variables. This approach achieved a classification accuracy of 67%. Second, Clay's model, which is able to utilize more pre-computed EO embeddings, was applied alongside the first RF model, and but failed to sampling and patching.<br><br>Click [here](https://github.com/yjmark/Remote-sensing/blob/main/assignments/Final_Jun_Youngsang/Final_Jun_Youngsang_clay.ipynb) to see the full technical memo.<br><br><img src="images/rs1.png?raw=true"/><img src="images/rs2.png?raw=true"/>

------------------------------------------------------------------------

### The Storymap of Major U.S. Military Facilities

September 25, 2024<br>
Instructor: [Poe, Mjumbe](https://about.mjumbepoe.com/)

This storymap aims to provide a brief history of the U.S. military and an overview of major military bases for those who may work for/with U.S. Forces regarding U.S. military facilities in the future. The storymap introduces five major military facilities in the U.S.: West Point, Eglin Air Force Base, Naval Station Norfolk, Camp Pendleton, and Peterson Space Force Base. <br><br>Click [here](https://yjmark.github.io/story-map-project/Jun_Youngsang/) to see the live version of the storymap.

<img src="images/storymapimage.jpeg?raw=true"/>

------------------------------------------------------------------------

### DefenseBoard

October 26, 2024<br>
Instructor: [Poe, Mjumbe](https://about.mjumbepoe.com/)

The DefenseBoard is a dashboard that uses spatial data to link various types of attributes in the defense sector such as military personnel, facilities, budget, logistics, etc. The map on the right displays publicly accessible base locations across the United States, while on the left, users can view attribute data by base, military unit, or region. <br><br>Click [here](https://yjmark.github.io/dashboard-project/Jun_Youngsang/) to see the live version of the DefenseBoard.

<img src="images/dashboardimage.jpeg?raw=true"/>

------------------------------------------------------------------------

### Base Management System

December 18, 2024<br>
Instructor: [Poe, Mjumbe](https://about.mjumbepoe.com/)

The Base Management System is a system for manage all kinds of events in a military base, such as training, exercise, sports, construction projects etc. This user-engagement project uses the Norfolk Naval Base in Virginia as an example. Therefore, the expected primary users of this system are the personnel stationed at the Norfolk Naval Base. The system will share schedules and locations of activities with relevant personnel within the base by utilizing Google Firebase. <br><br>Click [here](https://yjmark.github.io/engagement-project/Jun_Youngsang/) to see the live version of the Base Management System.

<img src="images/engagementimage.jpeg?raw=true"/>

------------------------------------------------------------------------

## <a id="PPA" style="scroll-margin-top: 80px;"></a>Geospatial Analytics in Public Policy

Geospatial analytics plays a critical role in the field of public policy. Here are some examples demonstrating the use of geospatial information in public policy with R and open data.

------------------------------------------------------------------------

### Crashes and the City: How Built Environments Shape Robotaxi Crashes in San Francisco

May 5, 2025<br>
Worked with [Wang, Shuai](https://github.com/shuaiwo) and [Jiang, Emmanuel](https://github.com/emma6537)<br>
Instructor: [Prof. Li, Xiaojiang](https://www.urbanspatial.info/)<br>
Project advisors: [Prof. Lin, Zhongjie](https://www.design.upenn.edu/people/zhongjie-jeffrey-lin); [Tang, Ziyi](https://github.com/tang-ziyi); [Yi, Shengao](https://shengaoyi.github.io/)

Robotaxi adoption is no longer hypothetical. This study provides visualization and modeling that shows how built environments shape robotaxi crash risks in San Francisco, allowing planners and policymakers to implement a "Try-Before-You-Build” approach.<br><br>Click [here](https://yjmark.github.io/robotaxi/) to see the live version of the dashboard.

<img src="images/robotaxi.jpeg?raw=true"/>

------------------------------------------------------------------------

### Do Households Value Transit-rich Neighborhoods compared to Others in Boston?

September 19, 2024<br>
Instructor: [Prof. Fichman, Michael](http://michael-fichman.com/)

To solve the question on the subject, a Transit Oriented Development (TOD) analysis of Boston was conducted by using subway stations data from the Massachusetts Bay Transportation Authority (MBTA), along with American Community Survey (ACS) data of 2012 and 2022. The result shows that people are willing to pay higher prices to live near a transit station in 2022 compared to 2012. This example is drawn from [Steif (2021),<i> Public Policy Analytics</i>](https://urbanspatial.github.io/PublicPolicyAnalytics/index.html).<br><br>Click [here](https://yjmark.github.io/PPA_HW2/Jun_YoungsangHW2%20copy.html) to see the full technical memo. <br><img src="images/hw2-1.png?raw=true"/> <img src="images/hw2-2.png?raw=true"/>

------------------------------------------------------------------------

### Geospatial Risk Prediction based on Broken Windows Theory

November 12, 2024<br>
Instructor: [Prof. Fichman, Michael](http://michael-fichman.com/)

We can use geospatial analysis for prediction as well. This memo applies aspects of the Broken Windows Theory to visualize drug law violations incidents and produce predictive models to forecast similar crimes in other areas of Philadelphia. This example is drawn from [Steif (2021),<i> Public Policy Analytics</i>](https://urbanspatial.github.io/PublicPolicyAnalytics/index.html).<br><br>Click [here](https://yjmark.github.io/PPA_HW3/Jun_YoungsangHW3_resubmit.html) to see the full technical memo.<br><img src="images/hw3.png?raw=true"/>

------------------------------------------------------------------------

### Who Should Receive a Housing Subsidy?

November 1, 2024<br>
Instructor: [Prof. Fichman, Michael](http://michael-fichman.com/)

Emil City has conducted marketing campaigns targeting homeowners who qualify for a home repair tax credit program. However, due to a low conversion rate and random outreach to eligible homeowners, a more proactive approach is required. To improve the efficiency of the program, research was conducted to convert all the client-level data from previous campaigns into an improved model that can better target their limited outreach resources. This memo presents the results of the trained classifier and a cost-benefit analysis by using the results of the classification, by logistic regression of given datasets. This example is drawn from [Steif (2021),<i> Public Policy Analytics</i>](https://urbanspatial.github.io/PublicPolicyAnalytics/index.html).<br><br>Click [here](https://yjmark.github.io/PPA_HW4/Jun_YoungsangHW4.html) to see the full technical memo. <br><br><img src="images/hw4.png?raw=true"/> <img src="images/hw4-2.png?raw=true"/>

------------------------------------------------------------------------

### Is the ex-offender job training program really helpful in reducing recidivism?

November 15, 2024<br>
Instructor: [Prof. Fichman, Michael](http://michael-fichman.com/)

<i>"A rehabilitated prisoner is not one who learns to survive well in prison but one who succeeds in the world outside prison on release."</i> Emil City has operated an ex-offender job training program based on this principle. However, let's assume that recent austerity measures have limited the budget, and some officials have raised concerns about expanding the City’s limited job training resources on ex-offenders who recidivate shortly after their release is not good policy. There have also been ongoing concerns about the fairness of predicting recidivism rates across races. To improve the program’s efficiency, a new recidivism risk prediction algorithm should be considered. This recommendation outlines an improvement plan based on logistic regression and a cost-benefit analysis of recidivism risk predictions using the data of 7,214 inmates over 2013–2014. This example is drawn from [Steif (2021),<i> Public Policy Analytics</i>](https://urbanspatial.github.io/PublicPolicyAnalytics/index.html).<br><br>Click [here](https://yjmark.github.io/PPA_HW5/Jun_YoungsangHW5.html) to see the full technical memo. <br><br><img src="images/hw5.png?raw=true"/>

------------------------------------------------------------------------

### Suggestion for Home Price Prediction Model in Philadelphia

November 12, 2024<br>
Worked with Agarwal, Vrinda<br>
Instructor: [Prof. Fichman, Michael](http://michael-fichman.com/)

Let's assume Zillow has struggled to accurately estimate home prices, partly because it is a national platform that often lacks detailed, localized information. Urban dynamics have become increasingly complex, and understanding housing markets requires a more granular approach that incorporates local factors like government policies, crime, gentrification, pollution levels, and access to public transit. Our objective is to use local data to create a model that predicts Philadelphia home prices with greater accuracy. By incorporating data on crime, zoning, pollution, and transit-oriented development, we aim to build a more contextually rich model that reflects the true dynamics of the city. This example is drawn from [Steif (2021),<i> Public Policy Analytics</i>](https://urbanspatial.github.io/PublicPolicyAnalytics/index.html).<br><br>Click [here](https://yjmark.github.io/Midterm_Agarwal_Jun/Midterm_Agarwal_Jun_FInal_predict_resubmit.html) to see the technical memo. <br><br><img src="images/houseprice1.png?raw=true"/> <br><img src="images/houseprice2.png?raw=true"/> <br><img src="images/houseprice3.png?raw=true"/>

------------------------------------------------------------------------

### Forecast Train Occupancy Levels in Belgium

December 13, 2024<br>
Worked with Tutut, Indriaty<br>
Instructor: [Prof. Fichman, Michael](http://michael-fichman.com/)

Nationale Maatschappij der Belgische Spoorwegen (NMBS), or Société nationale des chemins de fer belges (SNCB) is the National Railway Company of Belgium and the largest railway operator in the country. Let's assume that the company needs to postpone its expansion due to a shortage of train personnel. Additionally, rising energy costs have increased operating expenses. Meanwhile, the company continues to face revenue losses due to low passenger numbers on some routes. Given these challenges, the company must develop a strategy to optimize resource allocation, improve operational efficiency, and increase revenue, particularly on low-occupancy routes. This project aims to provide transportation planners at NMBS with a model called Re-train, which is to predict train occupancy levels for different Origin-Destination (OD) pairs in the Belgian railway system by logistic regression.<br><br>Click [here](https://yjmark.github.io/Final_Indriaty_Jun/Final_Indriaty_Jun.html) to see the technical memo.<br><br><img src="images/occupancy1.png?raw=true"/> <br><img src="images/occupancy2.png?raw=true"/> <br><img src="images/occupancy3.png?raw=true"/>

------------------------------------------------------------------------

### (Thesis) A Study on the Factors of Occurrence of Time Difference of Experience for a Transferred Policy: focusing on Address Policy in Republic of Korea

February, 2025<br>
Thesis advisor: Prof. Choi, Taehyon (Graduate School of Public Administration, Seoul National University)

It has been 7 years since Korea's full implementation of the Road Name Address. However, why do so many citizens still prefer land-lot addresses or the names of facilities such as buildings and apartments in situations where one needs to search for or describe a certain location? To find the answer to this question, this study reviews the introduction process of the address policy in Korea as an 'incomplete policy transfer', presented by Dolowitz and Marsh (2000), and describes the factors that cause the time difference of policy experience, a concept proposed by Kim (2015), in address policy. First, this study analyzed the results of Seoul Metropolitan Government's survey on the public opinion on Road Name Address conducted between 2017 and 2019. Study on the results confirmed that there was an time difference of policy experience in the location and identification function of the Road Name Address. Next, through process tracing methods such as literature research, interviews, and spatial analysis, the creation of the address usage environment has been analyzed over time in two parts: an offline environment such as road name signs for pedestrians and drivers, and an online environment such as mobile maps and navigation. Results show that, the construction of the offline address usage environment was being delayed due to the differences in perception between central and local governments. And online address usage environment was being incompletely implemented due to differences in perception between the government and private sectors. Finally, this study suggests that in order to shorten the time difference of policy experience in address policy, the location and identification function of address should be clearly defined, and in particular, cooperation with the private sectors that implements the online address usage environment is important.

Both my [full thesis in Korean](https://s-space.snu.ac.kr/handle/10371/176254) and [the summary in English](231119_Enhancing_the_User_Environment_of_Road Name_Address_in_ROK_v4.pdf) are available.<br>

<img src="images/page_67_img_10.png?raw=true"/> <br>
<i>Figure. Thematic map of nationwide road name statistics by cities, counties, and districts (local authorities). Reds represent the acceptance of the base number naming method, while greens indicate the acceptance of the serial number naming method. Local authorities with high chroma represent a low proportion of proper noun naming and a high proportion of number naming. Data Source: Road name database as of April 30, 2020 from [ROK MOIS (2021)](https://www.juso.go.kr).</i><br><br>
<img src="images/page_91_img_10.png?raw=true"/><br>
<i>Figure. Thematic map of the ratio of the number of road name plates installed to the minimum required number of road name plates by city, county, and district by year of 2013, 2016, and 2019. Data Source: Database for Road Name Address Facilities provided by ROK MOIS (2021)</i>

------------------------------------------------------------------------

## <a id="Comm" style="scroll-margin-top: 80px;"></a>Communications using Geospatial Information

### To Preserve and Well-manage Old Buildings in Philadelphia

November 19, 2024<br>
Instructor: [Prof. Delmelle, Elizabeth](https://scholar.google.com/citations?user=BjewFecAAAAJ&hl=en)

What would it feel like if my parents or grandparents’ generations lived in the same building I live in 30 or 50 years ago? As a Korean student studying abroad, I am not used to that feeling because there are a lot of new cities and new buildings in Korea, but it is very common for the residents of Philadelphia. Philadelphia’s rich history is embedded in its streets, buildings, and neighborhoods. This is confirmed by data and maps.<br><br>Click [here](https://yjmark.github.io/Reproducible_Data-Driven_Story/HW5_Jun_Youngsang.html) to see the full story.<br><br><img src="images/communication1.png?raw=true"/> <br><img src="images/communication2.png?raw=true"/>

------------------------------------------------------------------------

### 30 Day Map Challenge

November 1-30, 2024<br>
Instructor: [Prof. Delmelle, Elizabeth](https://scholar.google.com/citations?user=BjewFecAAAAJ&hl=en)

[The 30 Day Map Challenge](https://30daymapchallenge.com/) is <i>daily social mapping project happening every November</i>. In November 2024, I participated in this challenge on Day 1 (Points), Day 5 (Journey), Day 10 (Pen and Paper), Day 12 (Time and Space), Day 14 (A World Map), Day 16 (Choropleth), Day 20 (Openstreetmap), Day 22 (Two Colors), Day 24 (Only Circular), and Day 25 (Heat) to enhance my communication skills using geospatial data that is both accessible and reproducible.

[Day 1 Points: Night of Savannah](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day01_PointsofStreetLights/) <br>The map denotes 19,024 street lights' location in the City of Savannah which Georgia Power owned.<br><br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day01_PointsofStreetLights/01-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

[Day 5 Journey: The Path of a U.S. Army Career](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day05_Journey/) <br>How many times does a U.S. Army service member relocate? On average, they are estimated to relocate 10-12 times during a 20-year career. Here is a map showing the major milestones of an example career path by location. <br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day05_Journey/05-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

[Day 10 Pen and Paper: My Childhood Map (Bupyeong-gu, Incheon, Korea)](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day10_PenandPaper/) <br>This paper-and-pen map shows the neighborhood around Buyeong-ro in Bupyeong-gu, Incheon, where I lived during my childhood. The places I remember most are those where spent time with my beloved family and friends, such as playgrounds, schools, and my friends' houses, especially the trampoline in front of the cathedral.<br><br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day10_PenandPaper/Day10_Jun.jpg?raw=true"/>

------------------------------------------------------------------------

[Day 12 Time and Space: The Beginning of Roman Catholicism in Korea](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day12_KoreaandRomanCatholic/) <br>In the 17th century, Catholicism was introduced to Korea by envoys traveling to and from Beijing, China. Initially, it was regarded as a new field of study rather than a religion and was referred to as "Western Learning (Seohak)". It is unprecedented worldwide that Catholic faith was grown by Koreans themselves before the arrival of Western missionaries. <br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day12_KoreaandRomanCatholic/12-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

[Day 14 A World Map: Do All Countries Use Street Addresses?](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day14_UPU_StreetAddress/) <br>Not all countries use street names in their addressing systems. Some countries have street names for every road and use them in addresses, while others have few or no street names and rely instead on such as area codes, PO box numbers, or digital geocoding services like what3words.<br><br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day14_UPU_StreetAddress/14-youngsang-jun.jpg?raw=true"/>

------------------------------------------------------------------------

[Day 16 Choropleth: Median Household Income and Travel Time to Work Pattern in Three Eastern Cities](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day16_ACS_Income-TimeTravel) <br>How is the relationship between commute time and household income distributed spatially? Today's map examines cases in Philadelphia, Washington D.C., and Boston. <br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day16_ACS_Income-TimeTravel/16-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

[Day 20 Openstreetmap: Exploring Historic Sites in Philadelphia with OpenStreetMap](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day20_Openstreetmap/) <br>Today's map shows the locations of Philadelphia's historic sites visualized on OpenStreetMap. Today, all properties of historical places in Philadelphia is managed by the City of Philadelphia, by undergoing a nomination process and being added to the register.<br><br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day20_Openstreetmap/20-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

[Day 22 Two Colors: Veteran Population Share in U.S. Cities](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day22_TwoColors/) <br>Where in each city do veterans tend to live in larger numbers? Cities in green have a veteran percentage above the median (6.9%) of the age 18+ population, while cities in dark gray fall below the median.<br><br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day22_TwoColors/22-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

[Day 24 Only Circular: Fare Recovery Ratio of U.S. Transit Agencies in 2009-2019](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day24_OnlyCircularFRR/) <br>The Fare Recovery Ratio (FRR) is a measure of the extent to which a transit agency’s operating expenses are covered by passenger fares. The high FRR (close to 1) means that the agency is efficient of revenue generation from fares compared to the total operating costs of the transit services. <br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day24_OnlyCircularFRR/24-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

[Day 25 Heat: Philadelphia 2024 Crime Incidents Heat Map](https://github.com/yjmark/30DayMapChallenge_2024_Jun/blob/main/Day25_Heat/) <br>What are the most dangerous neighborhoods in Philadelphia? A heat map displaying the number of incidents in 2024—categorized by drug offenses, burglaries, and thefts—is shown with police district boundaries and station locations. <br><img src="https://raw.githubusercontent.com/yjmark/30DayMapChallenge_2024_Jun/main/Day25_Heat/25-youngsang-jun.png?raw=true"/>

------------------------------------------------------------------------

## <span id="transport" style="scroll-margin-top: 80px;">Transportation Memorandum Writing Sample</span>

### Advanced Transportation Seminar (focused on Aerial Planning) 

<i>will be open in Spring 2025</i>

### [(Multimodal Transport) Recommendation of Congestion Charging in Western Zone in London](pdf/HW1_London_Jun_Youngsang.docx)

February 14, 2025<br>
Instructor: Prof. Guerra, Erick

This memorandum recommends a careful approach to extending westward congestion charging from Central London, considering the following: First, given the high proportion of residents in western zone, explore ways to integrate the congestion charging policy with existing systems so that it does not feel like an additional regulatory burden to people. Second, introduce a two-zone system to effectively reduce traffic volume, but establish clear criteria to avoid confusion. Third, central and western zones have different key industries, which should be considered when implementing congestion charging.

### [(Multimodal Transport) Recommendations for Improving California High-speed Rail Project](pdf/HW2_CAHSR_Jun_Youngsang.pdf)

April 8, 2025<br>
Instructor: Prof. Guerra, Erick

This memorandum recommends alternatives for three persistent challenges facing the California High-Speed Rail (CAHSR) project. First, to address delays in rights-of-way acquisition, particularly interfering with public utilities, the Authority is recommended to strengthen cooperation with relevant agencies and pursue legislative solutions to expedite processes. Second, to build public trust, the Authority should conduct a transparent route decision process, including public hearings and sharing international case studies. Lastly, to induce long-term ridership, the Authority is recommended to integrate seamlessly with local transit systems through coordinated fare structures, including partnerships with ride-share and micromobility companies to enhance first- and last-mile connectivity.

### [(Introduction of the Transportation Planning) Four Memorandum of Transportation Planning in U.S.](pdf/Final_Jun.pdf)

December 12, 2024<br>
Instructor: Prof. Guerra, Erick

- Recommendation of Transit-Oriented Development Plan for the City of Philadelphia

- Review of the Proposed Minimum Parking Requirements for New Multifamily Housing Developments

- Recommendation of Philadelphia City Cycle Strategy

- Recommendation of Purchasing Cars Subsidy Policy for Low-income Households


------------------------------------------------------------------------

<p style="font-size:11px">

Page template forked from <a href="https://github.com/evanca/quick-portfolio">evanca</a>

</p>

<a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" style="
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(0, 55, 100, 0.85);
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
">Top ↑</a>

<!-- Remove above link if you don't want to attribute -->
