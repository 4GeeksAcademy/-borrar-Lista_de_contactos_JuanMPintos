import ContactCard from "../component/ContactCard";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";



const contactos = () => {
    return (
        <div>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </div>
    )
}

