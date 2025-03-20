import React, { useState, useEffect } from "react";

const PublicationList = () => {
    const [publications, setPublications] = useState([
        {
            year: "2025",
            content:
                "Bajaj ,R., Carofilis, W.,  Yeum,C.M., Hrynyk, T.D., Polak, M.A.,  and Krall, M., (2025),  “Rapid Concrete Surface Roughness Assessment with Smartphone LiDAR”, Nondestructive Testing and Evaluation, in print",
        },
        {
            year: "2025",
            content:
                "Milligan, G.J., Polak, M.A., Zurell, C., (2025), “Punching Shear Design Methods for Reinforced Concrete Slab-Wall Connections”, ACI Structural Journal, in print.",
        },
        {
            year: "2025",
            content:
                "Milligan, G.J., Polak, M.A., Zurell, C., (2025), “finite element analysis and design of shear behaviour of RC slabs supported on walls” ACI SP, in print.",
        },
        {
            year: "2025",
            content:
                "Liu, S., and Polak M.A. (2025), “Predicting Strength of FRP Reinforced Concrete Deep Beams with Stirrups Using the Indeterminate Strut-Tie (IST) Method”, ASCE Journal of Composites for Construction, in print.",
        },
        {
            year: "2025",
            content:
                "Milligan, G.J., Polak, M.A., Zurell, C., (2025), “Alternative Punching Shear Design Methods for Concrete Slabs on Rectangular Columns”, ACI Structural Journal, in print.",
        },
        {
            year: "2025",
            content:
                "Izadi, A., Milligan, G., Barrage, R.,  Polak, M.A.,  and Goldack, A.,  (2025), “Finite Element Analysis of GFRP-Reinforced Concrete Frame Knee Joints under Closing Loads”, ASCE J. of Comp. for Constr. In print.",
        },
        {
            year: "2024",
            content:
                "Lochan, P.P, Polak, M.A., (2024), “Evaluation of 3-Point and 4-Point  Bending Tests for Tensile Strength  Assessment of GFRP Bars”, Materials 2024, 17, 5261,",
            link: "https://doi.org/10.3390/ma17215261",
        },
        {
            year: "2024",
            content:
                "Liu, S., Polak, M.A., (2024), “Analysis of Concrete Deep Beams with Fibre-Reinforced Polymer (FRP) Bars by Indeterminate Strut-and-Tie (IST) Method”, FRPRCS, SP-360, 759-770",
        },
        {
            year: "2023",
            content:
                "Xu, X., Lan, J., Kırlangıç, A.S. and Polak, M.A., (2023), “Comprehensive index condition assessment of structural concrete based on surface wave techniques”, Advances in Bridge Engineering, 4(1), 29,.",
            link: "https://doi.org/10.1186/s43251-023-00108-y",
        },
        {
            year: "2023",
            content:
                "Beaulieu, P.M., and Polak, M.A., (2023), “Finite Element Model For Concrete Slab-Column Connections With Shear Reinforcement”, ASCE Journal of Structural Engineering, 149(12), 04023177-1.",
        },
        {
            year: "2023",
            content:
                "Milligan, G.J., Polak, M.A., Zurell, C.,  (2023), “Influence of Openings on the Punching Shear    Behaviour of Concrete Slabs Supported on Special-Shaped Columns” Eng. Structures, 284, 115968",
        },
        {
            year: "2023",
            content:
                "Barrage, R, Potapenko, S., Polak , M.A., (2023), “Influence of microstructural characteristic torsion length on exponentially graded cylinders in torsion”,  Acta Mechanica, 234(4), pp. 1553–1569",
            link: "https://doi.org/10.1007/s00707-022-03436-8",
        },
        {
            year: "2023",
            content:
                "Amin Izadi, Lip H. Teh, Aziz Ahmed, and Marianna Polak. (2023). “Finite Element Analysis of Square FRP-Concrete-Steel Columns under Eccentric Compression.” Structures, 51, 79–90.",
            link: "",
        },
        {
            year: "2023",
            content:
                "Barrage, R, Potapenko, S., Polak , M.A., (2023), Finite Element Modelling of Exponentially Graded Composites with Microstructure”, Mathematics and Mechanics of Solids, 28(9), pp. 1959–1977, DOI: 10.1177/10812865221147858",
            link: "",
        },
        {
            year: "2023",
            content:
                "Barrage, R., Polak, M.A. (2023), “Flexure and Shear Behaviour of GFRP Reinforced Concrete Beams Based on Nonlinear Finite Element Studies”, Canadian Journal of Civil Engineering, 50(2), pp. 90-101",
            link: "",
        },
        {
            year: "2022",
            content:
                "Izadi A., Teh, L.H., Polak, M.A., Ahmed, A. (2022) “Finite Element Analysis of Square FRP-Concrete-Steel Columns under Concentric Compression” Structures, 44, pp.1312-1320",
            link: "",
        },
        {
            year: "2022",
            content:
                "Wiciak, P., Polak, M.A., Cascante, G.,  (2022), Evaluation of progressive damage in GFRP bars – low and large strain experimental programme and numerical simulations, ACI Special Publication, SP-356, pp. 88–108",
            link: "",
        },
        {
            year: "2022",
            content:
                "Barrage, R., Potapenko, Polak, M.A., (2022), “On the elliptic regularity of exponentially graded composites with microstructure”, ZAMP J Appl. Math and Physics, 73(4),170.",
            link: "",
        },
        {
            year: "2022",
            content:
                "Tedford, T. and Polak, M.A., (2022), “Experimental Investigation of Concrete Beams Reinforced with Glass Fiber Reinforced Polymer Bars”, ASCE Journal of Composites for Construction, 26 (5), 04022055",
            link: "",
        },
        {
            year: "2022",
            content:
                "Milligan, G., Polak M.A., (2022)” Influence of Slab Openings on the Punching Shear Behaviour of Reinforced Concrete Slabs Supported on L-Shaped Columns” ACI SP-357, 187-221, DOI: 10.14359/51738766",
            link: "",
        },
        {
            year: "2022",
            content:
                "Kueres, D., Topuzi, D., Polak, M.A., (2022), “ Predetermination of Potential Plastic Hinges    on Reinforced Concrete Frames using GFRP Reinforcement”, Frontiers of Structural and Civil Engineering, 16 (5), 624-637.",
            link: "",
        },
        {
            year: "2022",
            content:
                "Milligan, G., Polak, M.A., and Zurell, C. (2022), “Finite Element Analysis of Punching Shear Behaviour of Reinforced Concrete Slabs Supported on Walls”, Structural Concrete,,23(2), pp. 1118-1133",
            link: "",
        },
        {
            year: "2022",
            content:
                "Lochan, P., and Polak, M.A., (2022), “Determination of Tensile Strength of GFRP Bars using Flexure Tests”, Construction and Building Materials 314, 125630.",
            link: "",
        },
        {
            year: "2022",
            content:
                "Milligan, G., Polak, M.A., and Zurell, C. (2022), “Finite Element Analysis of Punching Shear Behaviour of Reinforced Concrete Slabs Supported on Walls”, Structural Concrete,,23(2), pp. 1118-1133",
            link: "",
        },
        {
            year: "2022",
            content:
                "Wiciak, P., Cascante, G., Polak, M.A., (2022), “Characterization of ultrasonic transducers using laser Doppler interferometer in kHz-range for civil engineering applications”, Journal of Nondestructive Evaluations, 41(3), 52",
            link: "",
        },
        {
            year: "2022",
            content:
                "Lochan, P., and Polak, M.A., (2022), “Determination of Tensile Strength of GFRP Bars using Flexure Tests”, Construction and Building Materials 314, 125630.",
            link: "",
        },
        {
            year: "2022",
            content:
                "Wiciak, P., Cascante, G., Polak, M.A., (2022), “Characterization of ultrasonic transducers using laser Doppler interferometer in kHz-range for civil engineering applications”, Journal of Nondestructive Evaluations, 41(3), 52",
            link: "",
        },
        {
            year: "2022",
            content:
                "Kuhl, A., Polak, M.A., (2022), “A master curve approach to model short- and long-term time-dependent nonlinear behavior of polyethylene”, Mechanics of Advanced Materials and Structures,  29,(26), 5247–5254",
            link: "https://doi.org/10.1080/15376494.2021.1952496",
        },
        {
            year: "2021",
            content:
                "Kuhl, A., Polak, M.A., (2021),“A Novel Methodology to Model the Creep Behavior of Polymers at Different Temperatures”, Polymer Engineering and Science, 61(12),3104-3117",
            link: "",
        },
        {
            year: "2021",
            content:
                "Arczewska P., Polak MA. , Penlidis A., (2021), “Degradation of Glass Fiber Reinforced Polymer (GFRP) Bars in Concrete Environment”, Construction and Building Materials. 293,123451",
            link: "",
        },
        {
            year: "2021",
            content:
                "Wiciak, P., Polak, M.A., Cascante, G.,  (2021), “Wave propagation in glass fibre reinforced polymer (GFRP) bars subjected to progressive damage – experimental and numerical results”, Materials Today-Communications 27,102199",
            link: "",
        },
        {
            year: "2021",
            content:
                "Milligan, G., Polak, M.A., and Zurell, C. (2021), “Impact of Column Rectangularity on Punching Shear Strength – Code Predictions Versus FEA”, ASCE Journal of Structural Engineering, 147(2)",
            link: "",
        },
        {
            year: "2021",
            content:
                "Wiciak, P., Cascante, G., Polak, M.A., (2021), “Novel application of wavelet synchrosqueezed transform (WSST) in laser-vibrometer measurements for condition assessment of cementitious materials”, NDT&E International, 120, 102424",
            link: "",
        },
        {
            year: "2021",
            content:
                "Wiciak, P., Cascante, G., Polak, M.A., (2021), “Ultrasonic evaluation of accelerated progressive damage in GFRP bars”, Journal of Composites for Construction,25(6), 04021055.",
            link: "",
        },
        {
            year: "2020",
            content:
                "Zhang, Q., Milligan, G. J. and Polak, M. A. (2020) “Nonlinear finite element analysis of punching shear strength of reinforced concrete slabs supported on L-shaped columns”,Budownictwo i Architektura, 19(4), pp. 125-138. .",
            link: "",
        },
        {
            year: "2020",
            content:
                "Milligan, G., Polak, M.A., and Zurell, C. (2020), “Finite Element Analysis of Punching Shear Behaviour of Concrete Slabs supported on rectangular columns”, Engineering Structures,   ‏ 224(111189)",
            link: "",
        },
        {
            year: "2020",
            content:
                "Stoner, J. and Polak, M.A., (2020), “ Finite Element Modelling of GFRP reinforced Concrete Beams”, Computers and Concrete, 25(4) , 369- 382.",
            link: "",
        },
        {
            year: "2020",
            content:
                "Wiciak, P., Cascante, G., Polak, M.A., (2020), “Frequency And Geometry Effects on Ultrasonic Pulse Velocity Measurements of Concrete Specimens” ACI Materials Journal,‏ 117(2) 205-216.",
            link: "",
        },
        {
            year: "2020",
            content:
                "Sleiman, N., Polak, M.A., (2020), “Experimental Study on GFRP-Reinforced Concrete Closing Knee-Joints  “, ASCE Journal of Composites in Construction, 24(4), 04020022.",
            link: "",
        },
        {
            year: "2020",
            content:
                "Kueres, D., Hegger, J, Polak, M.A., (2020), “Punching strength of continuous concrete slabs, Magazine of Concrete Research, ‏ 72( 23)   Pages: ‏ 1189.",
            link: "",
        },
        {
            year: "2020",
            content:
                "Kueres, D., Polak, M.A., Hegger, J., (2020), “Two-parameter kinematic theory for punching shear in steel fiber reinforced concrete slabs”, Engineering Structures, 205,  110086.",
            link: "",
        },
        {
            year: "2020",
            content:
                "Drygala, I., Dulinska J.M., Polak, M.A., (2020) “ Seismic Assessment of footbridges under Spacial Variation of Earthquake motion (SVEGM): linking full scale experiment and FE analysis, SENSORS   ‏ 20( 4)     Article Number: 1227.",
            link: "",
        },
        {
            year: "2020",
            content:
                "Sepiani, H., Polak, M.A., Penlidis, A., (2020), “Finite Element Implementation of Viscoelastic and Viscoplastic Models based on Multi-Integral Formulation” Engineering Comp.,  8(37)2561-2585.",
            link: "",
        },
        {
            year: "2019",
            content:
                "Krall, M., Polak, M.A., (2019), “Experimental study on Concrete Beams with Different Arrangements of GFRP Flexural and Shear Reinforcements” Engineering Structures, 198,109333.",
            link: "",
        },
        {
            year: "2019",
            content:
                "Wosatko A., Winnicki, A., Polak M.A., and Pamin, J., (2019), “Role of dilatancy angle in plasticity-based models of concrete”,  Archives of Civil and Mechanical Engineering, 19 (4), ‏ 1268-1283.",
            link: "",
        },
        {
            year: "2019",
            content:
                "Barrage, R., Potapenko, S., Polak, M.A., (2019), “Modelling Transversely Isotropic Fiber Reinforced Composites with Unidirectional Fibers and Microstructure”, Mathematics and Mechanics of Solids, 24(110, ‏ 3444-3455.",
            link: "",
        },
        {
            year: "2019",
            content:
                "Drygala, I, Polak, M.A., Dulinska, J., (2019), “Vibration serviceability assessment of GFRP pedestrian bridges”, Engineering Structures, 184, 176-185",
            link: "",
        },
        {
            year: "2019",
            content:
                "Arczewska P., Polak MA. , Penlidis A., (2019), “Relation between Tensile Strength and Modulus of Rupture for GFRP Reinforcing Bars”, ASCE Journal of Materials in Civil Engineering, 31(2), No. 0418362.",
            link: "",
        },
        {
            year: "2019",
            content:
                "Cai, L and Polak, M.A., (2019), “A theoretical solution to predict pulling forces in horizontal directional drilling installations”, Tunneling and Undergraduate Space Technology, 83, 313-323.",
            link: "",
        },
        {
            year: "2019",
            content:
                "Sardashti, P., Stewart, K.M.E., Polak, M.A., Tzoganakis, C., Penlidis, A., (2019), “Operational Maps Between Molecular Properties and Environmental Stress Cracking Resistance (ESCR)”, Journal of Applied Polymer Science, 136(4), No. 47006.",
            link: "",
        },
        {
            year: "2018",
            content:
                "Wosatko, A. Genikomsou A., Pamin J., Polak M.A., and Winnicki A., (2018), “Examination of Two regularized Damage Plasticity Models for Concrete with Regards to Crack Closing” Int. Journal of Fracture Mechanics, 194, 190-211.",
            link: "",
        },
        {
            year: "2018",
            content:
                "Genikomsou, A.S., Milligan, G., Polak, (2018) “Modeling Parameters in Punching Shear Finite Element Analysis of Concrete Slabs” ACI SP 328, in honour of Prof. M.P. Collins– invited.",
            link: "",
        },
        {
            year: "2018",
            content:
                "Balomenos, G.P., Genikomsou, A.S., and Polak, M.A. (2018). Investigation of the effect of openings of interior RC flat slabs, Structural Concrete fib,  19 (‏ 6), ‏ 1672-1681.",
            link: "",
        },
        {
            year: "2018",
            content:
                "Genikomsou, A.S., Balomenos, G.P., Arczewska, P., Polak, M.A. (2018). “Transverse Shear Testing of GFRP Reinforcing Bars with Reduced Cross Section”, ASCE J. Comp. Constr., 22(5). No.04018041.",
            link: "",
        },
        {
            year: "2018",
            content:
                "Sepiani, H., Polak, M.A., Penlidis, A., (2018), “Constitutive equations and finite element implementation of isochronous nonlinear viscoelastic behaviour” ASME, Journal of Engineering Materials and Technology,140(4), No. 041004.",
            link: "",
        },
        {
            year: "2018",
            content:
                "Sepiani, H. L., Polak, M.A., Penlidis, A., (2018), “Modelling Short and Long Term Time-dependent Nonlinear Behaviour of Polyethylene”, Mechanics of Advanced Materials and Structures, 25(7), 600-610 .",
            link: "",
        },
        {
            year: "2018",
            content:
                "Sleiman, N., Barrage, R., Milligan, G., Polak, M.A., (2018), Testing and Finite Element Analysis of GFRP Reinforced Concrete Frame Joints”, FRPRCS, Amer. Concr. Institute ACI-SP-327.",
            link: "",
        },
        {
            year: "2018",
            content:
                "Arczewska, P., Polak, M.A., and Penlidis, A., (2018), “Deterioration of Tensile and Shear Strength of GFRP Bars” FRPRCS, American Concrete Institute ACI-SP-327. ",
            link: "",
        },
        {
            year: "2018",
            content:
                "Krall, M., Polak, M.A., (2018), “Testing and Strut-and-Tie Modelling of Beams with GFRP Flexural and Shear Reinforcements”, ACI SP Towards Sustainable Infrastructure with Fiber Reinforced Polymer Composites, SP-322.",
            link: "",
        },
        {
            year: "2017",
            content:
                "Cai, L., Guangli, X., Polak , M.A., and Knight, M. (2017), “Horizontal Directional Drilling Pulling Forces Prediction Methods – a Critical Review” Tunneling and Underground Space Techn. 69: 85-93.",
            link: "",
        },
        {
            year: "2017",
            content:
                "Genikomsou, A.S., Polak, M.A., (2017),” Effect of Openings on Punching Shear Strength of RC Slabs-Finite Element Investigation”, ACI Structural Journal, 117(5):1249-1261, doi: 10.14359/51689871.",
            link: "",
        },
        {
            year: "2017",
            content:
                "Balomenos, G.P., Genikomsou, A.S., Pandey, M.D. and Polak, M.A. (2017). “Probabilistic analysis of interior reinforced concrete slabs”, ACI Special Publication (ACI SP-321-2) Recent Developments in Two-Way Slabs: Design, Analysis, Construction, and Evaluation, 2.1-2.16.",
            link: "",
        },
        {
            year: "2017",
            content:
                "Genikomsou, A.S., Polak, M.A., (2017),” Finite Element Analysis of RC Flat Slabs with Different Amount and Placement of Shear Bolts”, ACI Special Publication (ACI SP-321-6) Recent Developments in Two-Way Slabs: Design, Analysis, Construction, and Evaluation, 6.1-6.19.",
            link: "",
        },
        {
            year: "2017",
            content:
                "Genikomsou, A.S., Polak, M.A., (2017), ”3D Finite element investigation of the compressive membrane action effect in reinforced concrete flat slabs”, Engineering Structures, Elsevier, 136:233-244.",
            link: "http://dx.doi.org/10.1016/j.engstruct.2017.01.024",
        },
        {
            year: "2017",
            content:
                "Topuzi, D.  Polak, M.A., Narasimhan, S., (2017), Seismic Retrofit of Reinforced Concrete Slab-Column Connections Using Flexible Shear Reinforcement, ACI Structural Journal, ACI Structural Journal, 114(06), 1471-1481",
            link: "",
        },
        {
            year: "2017",
            content:
                "Genikomsou, A.S., Polak, M.A., (2017),” 3-D Finite Element Analysis of Punching Shear of RC Flat Slabs using Abaqus”, American Concrete Institute Special Publication (ACI SP-315) Punching shear of structural concrete slabs, 101-116",
            link: "",
        },
        {
            year: "2017",
            content:
                "Topuzi, D., Polak, M.A., Narasimhan, S., (2017),” Seismic Retrofit of Concrete Slabs against Punching Shear: Testing and Modelling”, American Concrete Institute Special Publication (ACI SP-315) Punching shear of structural concrete slabs",
            link: "",
        },
        {
            year: "2017",
            content:
                "Kirlangic, A. S., Cascante, C., Polak, M. (2017) 'Characterization of Piezoelectric Accelerometers Beyond the Nominal Frequency Range. ASTM International Geotechnical Testing Journal, 40 (1), 37-46,",
            link: "https://doi.org/10.1520/GTJ20150091",
        },
        {
            year: "2016",
            content:
                "Genikomsou, A.S., Polak, M.A., (2016),” Finite Element Analysis of reinforced concrete slabs with punching shear reinforcement”, ASCE Journal of Structural Engineering, 142(12)",
            link: "",
        },
        {
            year: "2016",
            content:
                "Arczewska P., Polak MA., Penlidis A., (2016). Determination of properties and quality of GFRP reinforcing bars for concrete structures, International Journal of Materials Research and Technology, 15(4), 225 – 261",
            link: "",
        },
        {
            year: "2016",
            content:
                "Polak, M.A., Walbridge S., Lai, D., Luckai, J., Masnavi, A. (2016), “Assessment of Reinforced Concrete Highway Bridges”, Transportation Research Record, 2550, 38-45 pp",
            link: "",
        },
        {
            year: "2016",
            content:
                "Kirlangic, A. S., Cascante, C., Polak, M. (2016), 'Assessment of Concrete Beams with Irregular Defects Using Surface Waves'. ACI Materials Journal, 113(1) 73-81.",
            link: "",
        },
        {
            year: "2015",
            content:
                "Genikomsou, A., Polak, M.A., (2015) “Finite Element Analysis of Punching Shear of Concrete Slabs using Damaged Plasticity Model In Abaqus, Engineering Structures, 98(4):38-48",
            link: "",
        },
        {
            year: "2015",
            content:
                "Balomenos G.P., Genikomsou A.S., Polak M.A. and Pandey M.D. (2015), “Efficient method for probabilistic finite element analysis with application to reinforced concrete slabs”, Engineering Structures, 103(8), 85-101.",
            link: "doi:10.1016/j.engstruct.2015.08.038",
        },
        {
            year: "2015",
            content:
                "Kirlangic, S., Cascante, G., Polak M.A., (2015), “Condition Assessment of Cementitious Materials Using Surface Waves in Ultrasonic Frequency Range”, Geotech. Test. J., 38(2),139-149",
            link: "",
        },
        {
            year: "2015",
            content:
                "Wosatko, A., Pamin J., Polak, M.A., (2015) 'Application of Damage-Plasticity Models in Finite Element Analysis of Punching Shear', Computers and Structures, 151, 73–85",
            link: "",
        },
        {
            year: "2015",
            content:
                "Sardashti, P., C. Tzoganakis, M. Zatloukal, M.A. Polak and A. Penlidis (2015). Rheological indicators for environmental stress cracking resistance of polyethylene. Intern. Polymer Processing (IPP), 30(1), 70-81.",
            link: "",
        },
        {
            year: "2014",
            content:
                "Charbonneau, L., Polak, M.A., Penlidis, A., (2014) “Mechanical Properties of ETFE Foils, Testing and Modelling, Construction and Building Materials, Vol. 60. 63-71.",
            link: "",
        },
        {
            year: "2014",
            content:
                "Luckai, J., Polak, M.A., Walbridge, S., (2014),“Evaluating the Effects of Spalling on the Structural Capacity of Reinforced Concrete Bridge Girders” Can. J. Civ. Eng. 41: 197–205.",
            link: "",
        },
        {
            year: "2014",
            content:
                "Sardashti, P. Scott, A., Tzoganakis, C., Polak, M.A., Penlidis, A., (2014), “Effect of Temperature on Environmental Stress Cracking Resistance and Crystal Structure of Polyethylene”, J. Macromol. Sci., Pure & Appl. Chem., vol 51, no 3, pgs 1-14.",
            link: "",
        },
        {
            year: "2014",
            content:
                "Kuebler, M., Polak, M.A., (2014), “Critical Review of the CSA A14-07 Design Provisions For Torsion in Prestressed Concrete”, Can. J. Civ. Eng. 41: 304–314.",
            link: "",
        },
        {
            year: "2014",
            content:
                "Behjat, Y., Cheng, J. J., Polak, M. A., & Penlidis, A., (2014), Effect of Molecular Structure on the Short-Term and Long-Term Mechanical Behavior of High-Density Polyethylene”, ASCE Journal of Materials in Civil Engineering, J. Mater. Civ. Eng. 2014.26:795-802.",
            link: "",
        },
        {
            year: "2014",
            content:
                "Sardashti, P. Tzoganakis K., Polak, M.A., Penlidis, A., (2014), “Radiation Induced Long Chain Branching in High-Density Polyethylene through a Reactive Extrusion Process”, Macromol. React. Eng., Macromol. React. Eng. 8, 100–111",
            link: "",
        },
        {
            year: "2014",
            content:
                "Mirhoseiny, S. , Polak, M.A., Pandey, M.,(2014)” Nuclear Radiation Effect On The Behaviour  Of Reinforced Concrete Elements” , Nuclear Eng. Design. 269(SI): 57-65",
            link: "",
        },
        {
            year: "2013",
            content:
                "Polak, M.A, Bu, W. (2013), “Design Considerations for Shear Bolts in Punching Shear Retrofit of RC Slabs”, ACI Structural Journal, 110 (1), 15-25.",
            link: "",
        },
        {
            year: "2012",
            content:
                "Sardashti, P. Tzoganakis K., Polak, M.A., Penlidis, A., (2012), “Improvement of Hardening Stiffness Test as an Indicator of Environmental Stress Cracking Resistance of Polyethylene, J. Macromol. Sci., Pure & Appl. Chem., 49(9), 689-698.",
            link: "",
        },
        {
            year: "2012",
            content:
                "Kuebler, M., Polak, M.A., (2012), “Pure Torsion Tests on Prestressed Concrete Poles” , PCI Journal, SPR 2012,  120-141.",
            link: "",
        },
        {
            year: "2012",
            content:
                "Alvarado-Contreras, J., Polak, M.A., Penlidis, A., (2012), “Numerical Implementation of Damage-Coupled Material Law for Semicrystalline Polyethylene”, Engineering Computations.,29(3-4), 295-320.",
            link: "",
        },
        {
            year: "2011",
            content:
                "Bu, W., Polak, M.A., (2011) “Effect of Openings and Shear Bolt Pattern in Seismic Retrofit of Reinforced Concrete Slab-Column Connections”, Engineering Structures, 33(12), 3329-3340.",
            link: "",
        },
        {
            year: "2011",
            content:
                "Cheng, J. J., Polak, M. A., & Penlidis, A., (2011) “Influence of Micromolecular Structure on Environmental Stress Cracking Resistance of High Density Polyethylene”, Tunneling and Underground Space Technology, 26(4), 582-593.",
            link: "",
        },
        {
            year: "2011",
            content:
                "Cheng, J. J., Polak, M. A., & Penlidis, A., (2011), 'An Alternative Approach to Estimating Parameters in Creep Models of High-Density Polyethylene ' Polymer Engineering and Science, 51(7) 1227-1235.",
            link: "",
        },
        {
            year: "2011",
            content:
                "Lawler, N., Polak, M.A., (2011) “Development of FRP Shear Bolts for Punching Shear Retrofit of Reinforced Concrete Slabs”, ASCE Journal of Composites in Construction, 15(4), 591-601.",
            link: "",
        },
        {
            year: "2011",
            content:
                "Yang, Y., Cascante G., Polak, M.A., (2011), “New Method for the In-situ Evaluation of Material Damping Using the Wavelet Transform”, Journal of Geotechnical and Geoenvironmental Engineering, ASCE, 137 (8), 798-808.",
            link: "",
        },
        {
            year: "2010",
            content:
                "Alvarado-Contreras, J., Polak, M.A., Penlidis, A., (2010), “Micromechanical Damage in     Semicrystalline Polyethylene”, Journal of Engineering Materials and Technology-Transactions of the ASME, 132(4).",
            link: "",
        },
        {
            year: "2010",
            content:
                "Cheng, J. J., Alvarado-Contreras, J. A., Polak, M. A., & Penlidis, A., (2010), “Chain Entanglements and Mechanical Behaviour of High Density Polyethylene”, Journal of Engineering Materials and Technology-Transactions of the ASME, 132(1), p. 011016.",
            link: "",
        },
        {
            year: "2010",
            content:
                "Royal, A. C. D., Polak, M. A., Rogers, C. D. F. and Chapman, D. N., (2010), “Estimating the Pull-in Forces Associated with Long Distance Horizontal Directional Drilling”, Institution of Civil Engineers’ Geotechnical Engineering, 163(4), 197-208.",
            link: "",
        },
        {
            year: "2010",
            content:
                "Yang, Y., Cascante G., Polak, M.A., (2010), “Nondestructive Evaluation of the Depth of Surface-Breaking Cracks in Concrete Pipes”, Tunneling and Underground Space Technology, 25(6), 736-744.",
            link: "",
        },
        {
            year: "2009",
            content:
                "* Cheng, J. J., Polak, M. A., & Penlidis, A., (2009), 'Polymer Network Mobility and Environmental Stress Cracking Resistance of High Density Polyethylene' Polymer-Plastics Technology and Engineering,  48(12), 1252-1261.",
            link: "",
        },
        {
            year: "2009",
            content:
                "Yang, Y., Cascante G., Polak, M.A., (2009), “Numerical and Experimental Study on the Detection of Depth of Surface-Breaking Cracks in Concrete”, Journal of Nondestructive Evaluations, 42(6), 501-512.",
            link: "",
        },
        {
            year: "2009",
            content:
                "Yang, Y., Cascante G., Polak, M.A., (2009), “Depth Detection of Surface Breaking Cracks in Concrete Plates using Fundamental Lamb Modes”, NDT&E International, 42 (6), 501-512",
            link: "",
        },
        {
            year: "2009",
            content:
                "Bu, W., Polak, M.A., (2009), “Seismic Retrofit of RC Slab-Column Connections using Shear Bolts”, ACI Structural Journal, 106(4), 514-522",
            link: "",
        },
        {
            year: "2009",
            content:
                "Cheng, J., Polak, M.A., Penlidis, A. (2009), “Phase Interconnectivity and Environmental Stress Cracking Resistance of Polyethylene: A Crystalline Phase Investigation, J. Macromol. Sci., Pure & Appl. Chem., A46(6).",
            link: "",
        },
        {
            year: "2008",
            content:
                "Cheng, J., Polak, M.A., Penlidis, A., (2008), “A Tensile Strain Hardening Test Indicator of Environmental Stress Cracking Resistance”, Journal of Macromolecular Science: Pure and Applied Chemistry, Part A, 45(8), 599-611.",
            link: "",
        },
        {
            year: "2008",
            content:
                "Alvarado-Contreras, J., Polak, M.A., Penlidis, A., (2008), “A Computational Procedure for a Damage-Coupled Viscoplastic Material Law for Crystalline Polyethylene”, Engineering Computations, 25( 7-8),  612-636.",
            link: "",
        },
        {
            year: "2007",
            content:
                "Petersen, L., Lohaus, L., Polak, M.A., (2007), “Effect of Chemical and Physical Loads on Concrete Properties, Bond and Bending Behaviour”, ACI Materials Journal, 104 (4): 369-378.",
            link: "",
        },
        {
            year: "2008",
            content:
                "Liu, H., Polak, M.A., Penlidis, A., (2008), “A Practical Approach to Modeling Time-Dependent Nonlinear Creep Behaviour of Polyethylene for Structural Applications” Polymer Engineering and Science, 48(1), 159-167",
            link: "",
        },
        {
            year: "2007",
            content:
                "Guan, H., Polak, M.A., (2007),“Finite Element Studies of RC Slab-Edge Column Connections With Openings” CJCE, 34 (8): 952-965.",
            link: "",
        },
        {
            year: "2007",
            content:
                "Cheng, E, Polak, M.A., (2007), “Theoretical Model for Calculating Pulling Loads for Pipes in Horizontal Directional Drilling, Tunneling and Underground Space Technology Journal, 22 (5-6): 633-643.",
            link: "",
        },
        {
            year: "2007",
            content:
                "Alvarado-Contreras, J., Polak, M.A., Penlidis, A., (2007), “Micromechanical Approach to Modelling Damage in Crystalline Polyethylene”, Polymer Engineering and Science, 47 (4): 410-420.",
            link: "",
        },
        {
            year: "2006",
            content:
                "Polak, M.A., (2006), Application of Shear Bolts for Punching Shear Retrofit of Reinforced Concrete Flat Slabs”, Archives of Civil Engineering, LII, 2, Polish Academy of Sciences.",
            link: "",
        },
        {
            year: "2005",
            content:
                "Polak, M.A., El-Salakawy, E., Hammill, N., (2005), “Shear Reinforcement for Concrete Slabs”, Punching Shear in Reinforced Concrete Slabs,  ACI SP 232, 75-9",
            link: "",
        },
        {
            year: "2005",
            content:
                "Zerwer, A., Polak, M.A., Santamarina, J.C., (2005), “Detection of Surface Breaking Cracks in Concrete Members using Rayleigh Waves”, Journal of Env.  & Eng. Geophysics, 10 (3): 295-306",
            link: "",
        },
        {
            year: "2005",
            content:
                "Adetifa, B., Polak, M.A., (2005), “Retrofit of Interior Slab Column Connections for Punching using Shear Bolts”, ACI Structural Journal, 102(2), 268-274.",
            link: "",
        },
        {
            year: "2005",
            content:
                "Polak, M.A., (2005), “Shell Finite Element Analysis of Reinforced Concrete Plates Supported on Columns”, Engineering Computations: International Journal of Computer Aided Engineering and Software,  22(3/4),  409-429.",
            link: "",
        },
        {
            year: "2005",
            content:
                "Polak, M.A., (2005), “Ductility of Reinforced Concrete Flat Slab-Column Connections”, Computer-Aided Civil and Infrastructure Engineering, 20(3), 184-193.",
            link: "",
        },
        {
            year: "2005",
            content:
                "Polak, M.A., Chu, D., (2005), “Pulling Loads for PE Pipes in Horizontal Directional Drilling; Theoretical Modelling and Parametric Study”, ASCE Journal of Infrastructure Systems, 11(2), 142-150.",
            link: "",
        },
        {
            year: "2005",
            content:
                "Polak, M.A., (2005), 'Analysis of Polyethylene Pipe Behaviour in Horizontal Directional Drilling Field Tests' Canadian Journal of Civil Engineering, 31, 1-13.",
            link: "",
        },
        {
            year: "2004",
            content:
                "El-Salakawy, E., Soudki, K., Polak, M.A., (2004), “Punching Shear Behaviour of Flat Slabs Strengthened with FRP Laminates”, ASCE J. of Composites in Construction, 8(5), 384-392.",
            link: "",
        },
        {
            year: "2004",
            content:
                "Polak, M.A., Duyvestyn, G.M., Knight, M.A., (2004), “Experimental Strain Analysis for Polyethylene Pipes Installed by Horizontal Directional Drilling”, Tunnelling and Underground Space Technology, 19, 205-216.",
            link: "",
        },
        {
            year: "2003",
            content:
                "Zerwer, A., Polak, M.A., Santamarina, J.C., (2003), “Rayleigh Wave Propagation for the Detection of Near Surface Discontinuities: Finite Element Study”, Journal of Nondestructive Evaluations, 22(2), 39-52.",
            link: "",
        },
        {
            year: "2003",
            content:
                "Sinha, S., Fieguth, P., Polak, M.A., (2003), “Computer Vision Techniques for Automatic Structural Assessment of Underground Pipes”, Computer Aided Civil and Infrastructure Engineering, 18, 95-112.",
            link: "",
        },
        {
            year: "2003",
            content:
                "El-Salakawy, E., Polak, M.A., Soudki, K., (2003), “New Shear Strengthening Technique for Concrete Slabs”, ACI  Structural Journal, 100 (3), 297-304.",
            link: "",
        },
        {
            year: "2002",
            content:
                "El-Salakawy, E., Polak, M.A., Soudki, K., (2002), “Rehabilitation of Reinforced Concrete Slab-Column Connections”, Canadian Journal of Civil Engineering, 29(4), 602-611.",
            link: "",
        },
        {
            year: "2002",
            content:
                "Polak, M.A., Blackwell, K., Killen, D., (2002), 'Influence of Reinforcement Size and Distribution on Deflections of RC Members', ACI SP – 210, “Deflection Control for the Future”, 19-29.",
            link: "",
        },
        {
            year: "2002",
            content:
                "Zerwer, A., Polak, M.A., Santamarina, J.C., (2002), “The Effects of Surface Cracks on Rayleigh Wave Propagation: An Experimental Study”, ASCE Journal of Structural Engineering, 128(2), 240-248.",
            link: "",
        },
        {
            year: "2001",
            content:
                "Polak, M.A.  Lasheen, A., (2001), “Mechanical Modelling for Pipes in Horizontal Directional Drilling”, Tunnelling and Underground Space Technology, 16, Supplement 1, 47-55.",
            link: "",
        },
        {
            year: "2000",
            content:
                "Zerwer, A., Polak, M.A., Santamarina, J.C., (2000), “Experimental Investigation of Wave Propagation in Thin Plexiglas Plates: Implications for Modeling and Measuring Rayleigh Waves”, NDT&E International, 33, 33-41.",
            link: "",
        },
        {
            year: "2000",
            content:
                "elinas, M., Polak, M.A., McKim, R., (2000), “Field Tests on High Density Polyethylene Pipes Installed Using Horizontal Directional Drilling”, ASCE J.Infrastructure Systems, 6(4),130-137.",
            link: "",
        },
        {
            year: "2000",
            content:
                "El-Salakawy, E.F., Polak, M.A., Soliman, M.H., (2000), “Reinforced Concrete Slab-Column Edge Connections with Shear Studs”, Canadian Journal of Civil Engineering, 27, 338-348.",
            link: "",
        },
        {
            year: "1999",
            content:
                "El-Salakawy, E.F., Polak, M.A., Soliman, M.H., (1999), “Reinforced Concrete Slab-Column Edge Connections with Openings”, ACI Structural Journal, 96(1), 79-87.",
            link: "",
        },
        {
            year: "1998",
            content:
                "Polak, M.A., (1998), “Shear Analysis of Reinforced Concrete Shells Using Degenerate Elements”, Computers and Structures, 68, 17-29.",
            link: "",
        },
        {
            year: "1998",
            content:
                "El-Salakawy, E.F., Polak, M.A., Soliman, M.H., (1998), “Reinforced Concrete Slab-Column Edge Connections Subjected to High Moments”, Canadian Journal of Civil Engineering, 25(3), 526-538.",
            link: "",
        },
        {
            year: "1998",
            content:
                "Polak, M.A., Killen, D.T., (1998), “The Influence of the Reinforcing Bar Diameter on the Behaviour of R.C. Members in Bending and In-Plane Tension”, ACI Structural Journal, 95(5), 471-479.",
            link: "",
        },
        {
            year: "1998",
            content:
                "* Polak, M.A., Blackwell, K.G., (1998), “Modeling Tension in Reinforced Concrete Members Subjected to Bending and Axial Load”, ASCE Journal of Structural Eng., 124(9), 1018-1024.",
            link: "",
        },
        {
            year: "1998",
            content:
                "Polak, M.A., Blackwell, K.G., (1998), “Reinforced Concrete Members Subjected to Bending and In-Plane Loading”, ACI Structural Journal, 95(6), 740-748.",
            link: "",
        },
        {
            year: "1998",
            content:
                "Polak, M.A., (1998), “Thermal Analysis of Reinforced Concrete Shells”, ASCE Journal of Structural Engineering, 124(1), 105-108.",
            link: "",
        },
        {
            year: "1998",
            content:
                "Polak, M.A., (1998), “Modelling Punching Shear of RC Slabs Using Layered Finite Elements”, ACI Structural Journal, 95(1), 71-80.",
            link: "",
        },
        {
            year: "1996",
            content:
                "Polak, M.A., Dubas, J.J., (1996), “Shear Design of High Strength Concrete Beams - Canadian Code Perspective”, Canadian Journal of Civil Engineering, CJCE, 23(4), 809-819.",
            link: "",
        },
        {
            year: "1996",
            content:
                "Polak, M.A., (1996), “Effective Stiffness Model for Reinforced Concrete Slabs”, ASCE Journal of Structural Engineering, 122(9), 1925-1930.",
            link: "",
        },
        {
            year: "1996",
            content:
                "Polak, M.A., Scanlon, A. Phillips, D., (1996), “Deflection Analysis of Reinforced Concrete Members Using Finite Element Method”, Recent Developments in Deflection Evaluation of Concrete, ACI SP-161, 75-96.",
            link: "",
        },
        {
            year: "1994",
            content:
                "Polak, M.A., Vecchio, F.J., (1994), “Reinforced Concrete Shell Elements Subjected to Bending and Membrane Loads”, ACI Structural Journal, 119(12), 261-268.",
            link: "",
        },
        {
            year: "1993",
            content:
                "Polak, M.A., Vecchio, F.J., (1993), “Nonlinear Analysis of Reinforced Concrete Shells” ASCE, Journal of Structural Engineering, 119 (12), 3439-3462.",
            link: "",
        },
        {
            year: "1990",
            content:
                "Ziobron, W., Polak, M.A., (1990), “Accuracy of Evaluation of the Prestressing Force on the Basis of a Cable Elongation Measurements in Prestressed Tanks”, Polish Academy of Sciences, ed. Ossolineum, 63-73.",
            link: "",
        },
    ]);

    useEffect(() => {
        // Sort the publications array by year when the component mounts
        const sortedPublications = [...publications].sort(
            (a, b) => b.year - a.year
        );
        setPublications(sortedPublications);
    }, []);

    return (
        <div>
            <ul>
                {publications.map((publication, index) => (
                    <li key={index}>
                        {publication.content}
                        <span> </span>
                        <a
                            href={publication.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {publication.link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PublicationList;
