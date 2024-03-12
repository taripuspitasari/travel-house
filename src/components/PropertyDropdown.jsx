import React, {useState, useContext} from "react";
// import icons
import {RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
// import handless ui
import {Menu} from "@headlessui/react";
// import house context
import {HouseContext} from "./HouseContext";

const PropertyDropdown = () => {
  const {property, setProperty, properties} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn text-left w-full"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] leading-tight">{property}</div>
          <div className="text-[13px]">Select your type</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu ">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-orange-700 transition"
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
