import React from "react";

const ExtraComponents = () => {
    return (
        <div className="max-w-6xl mx-auto my-12 px-4">
            {/* Section Title */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-8 text-center">
                Assume this section does something 🌱
            </h1>

            {/* Carousel */}
            <div className="carousel w-full rounded-2xl overflow-hidden shadow-lg">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://organifer.com/wp-content/uploads/2024/06/tree-and-tulip-flowers-in-spring-garden-keukenhof-2023-11-27-05-35-29-utc-min-scaled.jpg"
                        className="w-full h-64 md:h-80 object-cover rounded-2xl"
                        alt="Garden 1"
                    />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVuc3xlbnwwfHwwfHx8MA%3D%3D"
                        className="w-full h-64 md:h-80 object-cover rounded-2xl"
                        alt="Garden 2"
                    />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://www.floridastateparks.org/sites/default/files/styles/callout/public/media/image/32081134_Alfred_B__Maclay_Gardens_State_Park_Celeb_Spd4Pmlc4pfw3h828XgQoet18q0ABlZBh.jpg?itok=NORiXqxy"
                        className="w-full h-64 md:h-80 object-cover rounded-2xl"
                        alt="Garden 3"
                    />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://www.visitmelbourne.com/-/media/atdw/melbourne/see-and-do/nature-and-wildlife/parks-and-gardens/581550ed26e339ebae5306830a485b05_1600x1200.jpeg?ts=20250904350609"
                        className="w-full h-64 md:h-80 object-cover rounded-2xl"
                        alt="Garden 4"
                    />
                </div>
            </div>

            {/* Carousel navigation */}
            <div className="flex w-full justify-center gap-2 py-4">
                <a href="#item1" className="btn btn-xs bg-green-100 text-green-700 hover:bg-green-200">
                    1
                </a>
                <a href="#item2" className="btn btn-xs bg-green-100 text-green-700 hover:bg-green-200">
                    2
                </a>
                <a href="#item3" className="btn btn-xs bg-green-100 text-green-700 hover:bg-green-200">
                    3
                </a>
                <a href="#item4" className="btn btn-xs bg-green-100 text-green-700 hover:bg-green-200">
                    4
                </a>
            </div>
            <div className="mx-auto text-center">
                im too tired to add anything else. gn. main functionality of authentication and crud works so W
            </div>
        </div>
    );
};

export default ExtraComponents;