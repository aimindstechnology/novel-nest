const services = {
    bcs0: {
        title: "Construction and Development",
        description: `There are three sectors of construction: buildings, infrastructure and industrial:
        Building construction is usually further divided into residential and
        non-residential.
        The works includes all investigative, monitoring, surveying, engineering,
        excavation,
        remediation, removal, construction, civil, infrastructure or other works associated
        with
        the development of the Project`
    },
    bcs1: {
        title: "Planning and Designing",
        description: `Planning involves identifying all the required steps to build a structure,
        splitting them into defined activities, ordering these steps logically, and
        determining the necessary materials, manpower, and equipment. Design is a process of
        creating the description of a new facility, usually represented by detailed plans
        and specifications; construction planning is a process of identifying activities and
        resources required to make the design a physical reality.`
    },
    bcs2: {
        title: "Structural Detailing",
        description: `It is process by which the design Ota structural system is drafted in a form that a
        builder can use for construction for easy establishment. AutoCAD Structural
        Detailing is Computer-aided Design (CAD) software for structural engineers,
        detailers and fabricators that helps create detailing and fabrication shop drawings.
        Steel Detailing interprets architectural and structural engineering drawings to gain
        a thorough working knowledge of the overall design intent of a building or
        structure.`
    },
    bcs3: {
        title: "Estimation and Costing",
        description: `The main purpose is to provide to volume of work for cost control and to see that
        the adequate options of materials are explored during the execution of the project.`
    },
    bsc4: {
        title: "Architectural Services",
        description: `The main purpose is to provide to volume of work for cost control and to see that the
        adequate options of materials are explored during the execution of the project.`
    },
    bsc5: {
        title: "Surveying Services",
        description: `Boundary surveys, construction staking, easement surveys, land partitions, well
        staking, topographic mapping, and more.`
    },
    bcs6: {
        title: "Material Testing",
        description: `It involves the essential examination of all structural materials used in the
        construction of a project. Industry players need to ensure that their products can
        withstand certain conditions and comply with increasingly complex national and
        international building standards and regulations.`
    },
    es0: {
        title: "STP & ETP Designing",
        description: `We design Sewage Treatment Plant (STP) and Effluent Treatment Plant (ETP) for
        various types and natures of wastewater, effluents which includes advanced
        physico-chemical treatment processes and Biological treatment process with tertiary
        treatment systems for the removal of organic, inorganic, oil and grease, heavy
        metals & suspended solids, etc…`
    },
    es1: {
        title: "Testing",
        description: `pH, Hardness, Alkalinity, Acidity, Turbidity, TDS, TSS, BOD, COD, Heavy metals
        concentration, etc.,`
    },
    es2: {
        title: "Indoor/Outdoor Air Quality Monitoring",
        description: `PM(10 & 2.5), CO, SOx, NOx, O3, Benzene, Total VOCs, Radon, etc.,`
    },
    es3: {
        title: "Solid Waste Management",
        description: `Quantification of Household Hazardous Waste (HHW), Construction and Demolition
        Debris, Industrial/Commercial Waste, Hazardous Waste Lamps, Regulated Medical Waste,
        etc.`
    },
    gs0: {
        title: "Standard Penetration Test",
        description: `It is developed to provide geotechnical engineering properties for foundation design
        purposes. The test is carried out within a borehole. The results can be used to
        determine the relative density, bearing capacity, and settlement of granular soil.`
    },
    gs1: {
        title: "Sieve Analysis",
        description: `An analytical technique used to determine the particle size distribution of a
        granular material with macroscopic granular sizes. The sieve analysis technique
        involves several layers of sieves with different grades of sieve opening sizes.`
    },
    gs2: {
        title: "Vane Shear and Direct Shear Test",
        description: `An experimental procedure conducted in geotechnical engineering practice and research
        that aims to determine the shear strength of soil materials. Shear strength is
        defined as the maximum resistance that a material can withstand when subjected to
        shearing.`
    },
    gs3: {
        title: "Permeability Test",
        description: `Soil permeability is the property of the soil to transmit water and air and is one of
        the most important qualities to consider for fish culture. A pond built in
        impermeable soil will lose little water through seepage.`
    },
    gs4: {
        title: "Unconfined Compression Test",
        description: `A laboratory testing method to assess the mechanical properties of rocks and
        fine-grained soils. It provides a measures of the undrained strength and the
        stress-strain characteristics of the rock or soil.`
    },
    gs5: {
        title: "Atterberg Limit Test",
        description: `Basic measure of the critical water contents of a fine-grained soil: its shrinkage
        limit, plastic limit, and liquid limit. Depending on its water content, a soil may
        appear in one of four states: solid, semi-solid, plastic and liquid.`
    }
}

const triggerServiceModal = (service) => {
    let serviceInfo = services[service];
    document.getElementById('serviceModalTitle').innerText = serviceInfo.title;
    document.getElementById('serviceModalDescription').innerText = serviceInfo.description;
    document.getElementById('serviceModalTrigger').click();
}