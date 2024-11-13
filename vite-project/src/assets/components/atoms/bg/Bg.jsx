import { useState } from "react";
import InputElement from "../inputElement/InputElement"; 

const Bg = () => {
    const [name, setName] = useState("0000 0000 0000 0000");
    const [number, setNumber] = useState("e.g. Jane Appleseed")
    const [month, setMonth] = useState("MM")
    const [year, setYear] = useState("YY")


    const addNumber = (e) => {
        let addNameSurName = e.target.value.replace(/[^a-zA-Z ]/g, "");  
        addNameSurName = addNameSurName.replace(/\s+/g, " "); 
        setNumber(addNameSurName);
    };

    const addName = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");  
        value = value.replace(/(\d{4})(?=\d)/g, "$1 ");  
        setName(value);
    };

    const addMonth = (e) => {
        let addMonth = e.target.value.replace(/[^0-9]/g, "");  
        setMonth(addMonth);
    };
    const addYear = (e) => {
        let addYear = e.target.value.replace(/[^0-9]/g, "");  
        setYear(addYear);
    };
  return (
    <div className="flex flex-row-reverse justify-around">
        <div className="">
            <div>
                <p className="text-[12px] font-normal tracking-[2px] uppercase text-[#21092F]">Cardholder Name</p>
                <InputElement type={number} maxLength={16} placeholder={"e.g. Jane Appleseed"} onChange={addName} /> 
            </div>
            <div>
                <p>Card Number</p>
                <InputElement maxLength={16} placeholder={"e.g. 1234 5678 9123 0000"} onChange={addNumber} /> 
            </div>
            <div>
                <div>
                    <p className="text-[12px] font-normal tracking-[2px] uppercase text-[#21092F]">Exp. Date (MM/YY)</p>
                    <InputElement maxLength={2} placeholder={"MM"} onChange={addMonth} /> 
                    <InputElement maxLength={2} placeholder={"YY"} onChange={addYear} /> 
                </div>
                <div>
                    <p className="text-[12px] font-normal tracking-[2px] uppercase text-[#21092F]">CVC</p>
                    <InputElement maxLength={3} placeholder={"e.g. 123"} onChange={addNumber} /> 
                </div>
            </div>
        </div>

        <div className="relative bg-gradient-to-r from-[#D53AFF] to-[#FF834A] w-[447px] h-[245px] rounded-[8px]">
            <p  className="absolute top-[40px] left-[40px] text-white text-[28px]">{name}</p>
            <p  className="absolute top-[90px] left-[40px] text-white text-[28px]">{number}</p>
            <div>
                <p className="absolute bottom-[10px] right-[60px] text-white text-[28px]">{month}/</p>  
                <p className="absolute bottom-[10px] right-[25px] text-white text-[28px]">{year}</p> 
            </div>
        </div>
    </div>
  );
};

export default Bg;