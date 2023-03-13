import React from "react";
import Card from "./Card";

export default function MainSection(pros) {
    return (
        <div className="main-container">
            <Card
                img = "katie-zaferes.png"
                rating ="5.0"
                reviewCount={6}
                country="CA"
                title="Life Lessons with Katie Zaferes"
                price={136} 
            />
        </div>
    );
}



