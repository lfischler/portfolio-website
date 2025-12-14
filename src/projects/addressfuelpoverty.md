---
title: "Address Fuel Poverty data activist webapp"
summary: "An interactive and collaborative data visualisation project for activist and community groups fighting fuel poverty in Scotland"
image: "/images/address-fuel-poverty-image.jpg"
imageAlt: "Screenshot of webapp"
tech:
  - "Academic Research"
  - "Web Development"
  - "Data Activism"
siteUrl: "https://address-fuel-poverty.streamlit.app/"
repoUrl: "https://github.com/lfischler/Address-Fuel-Poverty"
year: "2023"
collaborators: 
skills: "Design, Research, Web Development, Data Analysis"
tags:
  - "technical"
  - "social"
---

## Project Description
Just under one quarter of all homes in Scotland were estimated to be in fuel poverty in 2019. With the cost of living increasing rapidly, many more households will be at risk across Scotland if action isn’t taken now. The main cause of fuel poverty is poor building condition and inadequate insulation. When this is combined with low household income, a property becomes at risk.

The Address Fuel Poverty app makes use of publicly available data to build a spatial understanding of fuel poverty risk across Scotland. Each postcode has been assigned a fuel poverty risk score by combining data from two publicly available datasets: the mean score of all Energy Performance Certificates (Scottish Government, 2022) since 2012 at that postcode; and its Scottish Index of Multiple Deprivation score (Scottish Government, 2020). This data is accessed through an interactive postcode lookup page (as inspired by the Central Office of Public Interest’s project _addresspollution.org_ (2022)) and an interactive map.


## Project Context
This project came out of a university brief to build a data activist project informed by the principles of social justice and inclusivity. The project is accompanied by a [live GitHub repository](https://github.com/lfischler/Address-Fuel-Poverty); and I intend to continue to contribute to the piece in future—and encourage others to get involved as well!

## Academic Motivation
Data has what Renzi and Langolis describe as "transformative and affective potential". It offers the possibility to shape how we see things and, when in the hands of activists, can be used to trigger societal change (2020).

The Address Fuel Poverty webapp builds on Energy Action Scotland’s work creating a National Fuel Poverty Map (2021) by adding the ability to zoom beyond just regional level down to individual postcode level making the data tangible, relatable, and specific. This mapping process aims to highlight key spatial inequalities with regards to fuel poverty such as a risk to households in rural and exposed areas (who often have less capacity and ability to participate in development conversations (Mansuri, 2013)) and the impact of local issues and contexts.

The creation of data activist work of this kind can elevate activist practices in a medium that is “credible and legible" to policymakers (Blacker, 2021) whilst also offering the opportunity to inform grassroots groups in targeting their work in communities to those most at risk.

## Choice of Technologies
Address Fuel Poverty depends on a series of open-source technologies:

    The Python programming language an packages numpy and pandas;
    The Streamlit platform;
    The Folium geospatial maps based on leaflet.js.

I decided to use the Streamlit platform due to its ease of use and simple integration with the popular python language, removing the requirement for high levels of data literacy. This, in turn, removes some of the labour associated with activist practices (Kidd, 2019) that can exclude individuals suffering from existing injustices from taking part (Mansuri, 2013).

The decision to create an interactive map was informed by Rubel et al.’s work teaching spatial justice to children. Their project aims to shift analysis of poverty to be understood within the context of place itself and how spatial relations produce and reproduce poverty. Rubel et al. explore injustices at different scales, and how they interact. In their work they begin at city level and end at the level of the individual (2016); I have instead created a Folium choropleth map which gives a birds-eye-view over a whole region; yet can be zoomed down to postcode level detail where individual neighbourhoods can be examined. This level of detail allows activists to understand the impacts different factors might be having on fuel poverty at different scales to generate specific responses. It also addresses the challenges of getting data about specific locations, in particular rural and isolated locations, to inform decisions about development projects (Gunderson, 2023).

Data activism brings the performativity of data out of the hands of the powerful and well-resourced and into the hands of non-powerful (Renzi and Langlois, 2020). The decision to make this project open source, with the code [freely available on GitHub](https://github.com/lfischler/Address-Fuel-Poverty), allows anyone to see and assess how the results are calculated and visualised. It gives the option for experts, practitioners, and people with lived experience to contribute towards it or remix it into new work. I hope that, by bringing open source practices to fuel poverty work, I can engage and re-engage communities in a space for participation that is novel and comprised of “unlikely networks” (Erasmus, 2023). This decision was informed by Kidd’s work studying data activism and documenting the way it creates connection, identity and a sense of possibility to enact change on their situation (2019). Such data activist projects allow for the shaping of data as a medium that has agency in itself (Blacker, 2021) and can help to not only inform, but build new realities (Renzi and Langlois, 2020).

![Address Fuel Poverty screenshot](/images/address-fuel-poverty.jpg)

## Bibliography
- _addresspollution.org_ (2022) _addresspollution.org_. Available at: https://addresspollution.org/ (Accessed: 1 March 2023).
- Blacker, S. (2021) ‘Strategic translation: pollution, data, and Indigenous Traditional Knowledge’, _Journal of the Royal Anthropological Institute_, 27(S1), pp. 142–158.
- Blischak, J.D., Davenport, E.R. and Wilson, G. (2016) ‘A Quick Introduction to Version Control with Git and GitHub’, _PLOS Computational Biology_, 12(1), p. e1004668.
- Boardman, B. (2009) _Fixing Fuel Poverty: Challenges and Solutions_. London: Routledge, pp. xxiii–xxiii.
- Brooks, L. (2022) ‘Don’t let “warm banks” become as vital as food banks, Scottish charities urge’, _The Guardian_, 12 October. Available at: https://www.theguardian.com/uk-news/2022/oct/12/warm-banks-fuel-poverty-crisis-scotland (Accessed: 1 March 2023).
- Dowson, M. _et al._ (2012) ‘Domestic UK retrofit challenge: Barriers, incentives and current performance leading into the green deal’.
- Energy Action Scotland (2021) _Press Release: Scottish Fuel Poverty Map_. Available at: https://www.eas.org.uk/scottish-fuel-poverty-map (Accessed: 28 February 2023).
- Energy Action Scotland (no date) _Fuel Poverty Overview_. Available at: https://www.eas.org.uk/fuel-poverty-overview (Accessed: 28 February 2023).
- Erasmus, C.-L. (2023) ‘Case Study: Accountability Lab’. _Inclusive Society_, University of Edinburgh, 23 January.
- Fuel Poverty Action (no date) _About Fuel Poverty Action_, _Fuel Poverty Action_. Available at: https://www.fuelpovertyaction.org.uk/about-us/ (Accessed: 28 February 2023).
- Glasgow Times (2022) ‘Activists protest in Scottish Power over rising energy bills’, _Glasgow Times_, 3 December. Available at: https://www.glasgowtimes.co.uk/news/scottish-news/23168097.activists-protest-scottish-power-glasgow-rising-bills/ (Accessed: 28 February 2023).
- Gunderson, K. (2023) ‘Case Study: Grand Bequest’. _Inclusive Society_, University of Edinburgh, 24 January.
- Inform My Opinion (no date) ‘Inform My Opinion - IMO/REAL MEDIA: Grassroots campaigns - Fuel Poverty Action’. Available at: https://podcasts.google.com/feed/aHR0cHM6Ly9hdWRpb2Jvb20uY29tL2NoYW5uZWxzLzQwNDk2NDMucnNz/episode/dGFnOmF1ZGlvYm9vLmZtLDIwMTUtMTItMzA6L2Jvb3MvNDAwNTExNQ (Accessed: 1 March 2023).
- Kidd, D. (2019) ‘Extra-activism: counter-mapping and data justice’, _Information, communication & society_, (7), pp. 954–970.
- Lee, B.D. (2018) ‘Ten simple rules for documenting scientific software’, _PLOS Computational Biology_, 14(12), p. e1006561.
- Mansuri, G., and Vijayendra Rao (2013) _Localizing Development : Does Participation Work?. Policy Research Report_. International Bank for Reconstruction and Development / The World Bank.
- Peterson, K. (2014) ‘The GitHub Open Source Development Process’.
- Renzi, A. and Langlois, G. (2020) ‘Renzi, A. and Langlois, G. (2015) “Data / Activism” Elmer, G. et al. (eds.)Compromised Data: From social media to Big Data, , London: Bloomsbury, pp. 202–225.’, in, pp. 202–225.
- Rubel, L.H. _et al._ (2016) ‘Teaching Mathematics for Spatial Justice: An Investigation of the Lottery’, _Cognition and instruction_, (1), pp. 1–26.
- Scottish Government (2019) _Scottish House Condition Survey: 2019 Key Findings_.
- Scottish Government (2020) _Scottish Index of Multiple Deprivation 2020 [Dataset]_. Available at: https://statistics.gov.scot/data/scottish-index-of-multiple-deprivation (Accessed: 1 March 2023).
- Scottish Government (2022) _Domestic Energy Performance Certificates - Q3 2022 [Dataset_. Available at: https://statistics.gov.scot/data/domestic-energy-performance-certificates (Accessed: 1 March 2023).
