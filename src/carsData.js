const products = [
    {
        id: 1,
        title: "Model 3",
        backgroundImg: "model32.jpg",
        carOption:"View Inventory",
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
        ref: null
    },
    {
        id: 2,
        title: "Model Y",
        inStock: true,
        backgroundImg: "modely.jpg",
        carOption:"Leasing starting at $349/mo",

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
    },
    {
        id: 3,
        title: "Model X",
        backgroundImg: "modelx.jpg",
        price: 108940,
        inStock: true,
        carOption:"View Inventory",
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
    },
    {
        id: 4,
        title: "Model S",
        carOption:"View Inventory",


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
    },
    {
        id: 5,
        title: "Solar Panels",
        description: "Tesla designed Model S from the ground-up as an electric vehicle — each component, including batteries, motors and exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.",
        carOption: "Lowest Cost Solar Panels in America",
        backgroundImg: "solar panel.jpg",
        price: 11000,
        inStock: true
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