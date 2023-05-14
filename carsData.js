const products = [
    {
        id: 1,
        path: "/Model3",
        title: "Model 3",
        backgroundImg: "model32.jpg",
        carOption: "View Inventory",
        description:
            "Tesla All-Wheel Drive has two independent motors for imporved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.",
        price: 41940,
        inStock: true,
        highlights: [
            "Auto Lane Change",
            "Autopark",
            "Summon",
            "Full Self-Driving Computer",
            "Traffic Light and Stop Sign Contorl"
        ],
        quantity: 1,
        ref: null,

        ChargingOffer: "New Model 3 vehicles qualify for a federal tax credit for eligible buyers: $3,750 for Rear-Wheel Drive and Long Range, and $7,500 for Performance.",
        Range: "272",
        top_speed: "140",
        accelaration: "5.8",

        plaidSpecs: [""],
        PlaidFeatures: [  
            "Quickest accelerating car in production today",
            "0-60 mph: 1.99s",
            "1/4 mile: 9.23@155 mph trap speed",
            "1,020 horsepower",
            "Three high performance motors with carbon - sleeved rotors",
            "Torque vectoring",
            "Higher thermal capability brake pads",
            "Carbon fiber spoiler"
        ]


    },
    {
        id: 2,
        path: "/ModelY",
        title: "Model Y",
        inStock: true,
        backgroundImg: "modely.jpg",
        carOption: "Leasing starting at $349/mo",

        description:
            "With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.",
        price: 57940,
        highlights: [
            "Auto Lane Change",
            "Autopark",
            "Summon",
            "Full Self-Driving Computer",

            "Traffic Light and Stop Sign Control",
        ],
        quantity: 1,
        ref: null,
        ChargingOffer: "All new Model Y vehicles qualify for a federal tax credit for eligible buyers.",
        Range: "330",
        top_speed: "135",
        accelaration: "4.8",
        plaidSpecs: [""],

        PlaidFeatures: [  
            "Quickest accelerating car in production today",
            "0-60 mph: 1.99s",
            "1/4 mile: 9.23@155 mph trap speed",
            "1,020 horsepower",
            "Three high performance motors with carbon - sleeved rotors",
            "Torque vectoring",
            "Higher thermal capability brake pads",
            "Carbon fiber spoiler"]


    },
    {
        id: 3,
        path: "/ModelX",
        title: "Model X",
        backgroundImg: "modelx.jpg",
        price: 108940,
        inStock: true,
        carOption: "View Inventory",
        description:
            "Tesla designed Model X from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.",
        highlights: [
            "Auto Lane Change",
            "Autopark",
            "Summon",
            "Full Self-Driving Computer",
            "Traffic Light and Stop Sign Control",
        ],
        quantity: 1,
        ref: null,
        ChargingOffer: "Receive three years of unlimited free Supercharging with purchase of a new Model S or Model X. Finance your purchase for as low as 3.99%.",
        Range: "348",
        top_speed: "149",
        accelaration: "3.8",

        plaidSpecs: [""],
        PlaidFeatures: [ 
            "Quickest accelerating car in production today",
            "0-60 mph: 1.99s",
            "1/4 mile: 9.23@155 mph trap speed",
            "1,020 horsepower",
            "Three high performance motors with carbon - sleeved rotors",
            "Torque vectoring",
            "Higher thermal capability brake pads",
            "Carbon fiber spoiler"]



    },
    {
        id: 4,
        path: "/ModelS",
        title: "Model S",
        carOption: "View Inventory",


        description:
            "Tesla designed Model S from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.",
        backgroundImg: "models.jpg",
        price: 93740,
        inStock: false,

        highlights: [
            "Navigate on Autopilot",
            "Auto Lane Change",
            "Autopark",
            "Summon",
            "Full Self-Driving Computer",
            "Traffic Light and Stop Sign Control",
        ],
        quantity: 1,
        ref: null,
        ChargingOffer: "Receive three years of unlimited free Supercharging with purchase of a new Model S or Model X.",
        Range: "405",
        top_speed: "149",
        accelaration: "3.1",


        plaidSpecs: [""],
        PlaidFeatures: [  
            "Quickest accelerating car in production today",
            "0-60 mph: 1.99s",
            "1/4 mile: 9.23@155 mph trap speed",
            "1,020 horsepower",
            "Three high performance motors with carbon - sleeved rotors",
            "Torque vectoring",
            "Higher thermal capability brake pads",
            "Carbon fiber spoiler"]

    },
    {
        id: 5,
        path: "/SolarPanels",
        title: "Solar Panels",
        description: "Tesla designed Model S from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.",
        carOption: "Lowest Cost Solar Panels in America",
        backgroundImg: "solar panel.jpg",
        price: 11000,
        inStock: true,



        plaidSpecs: [""]

    },
    // {
    //     id: 6,
    //     title :"PowerWall",
    //     description:"",
    //     backgroundImg:"powerwall.avif",
    //     price: 999,
    //     inStock:true

    // }

]
export default products;