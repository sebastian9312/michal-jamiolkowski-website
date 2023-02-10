import * as React from "react";
import styled from "styled-components";
import { Flex } from "../utils/Flex.styled";

import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";

const IconStyles = {
    fontSize: "5em",
    color: "#08A6E4",
    marginRight: "20px",
    border: "3px solid #08A6E4",
    borderRadius: "50%",
    padding: "10px"
};

const StyledContactBox = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 30px 80px;
    
    span {
        font-size: 1.4em;
    }
`;


const ContactContainer = () => (
    <Flex style={{ margin: "0 auto" }}>
        <StyledContactBox>
            <AiOutlineMail style={IconStyles} />
            <span><a href="mailto: abc@example.com">user.user@gmail.com</a></span>
        </StyledContactBox>
        <StyledContactBox>
            <FaPhone style={IconStyles} />
            <span><a href="tel:123-456-7890p123">666-666-666</a></span>
        </StyledContactBox>
    </Flex>
);

// const ContactContainer = () => (
//     <div style={{ margin: "20px auto 0" }}>
//         <StyledContactBox>
//             <BsFillPersonFill style={IconStyles} />
//             <span>REHABILITACJA DOROSŁYCH</span>
//         </StyledContactBox>
//         <StyledContactBox>
//             <AiOutlineMail style={IconStyles} />
//             <span>user.user@gmail.com</span>
//         </StyledContactBox>
//         <StyledContactBox>
//             <FaPhone style={IconStyles} />
//             <span>666-666-666</span>
//         </StyledContactBox>
//         <StyledContactBox>
//             <GoLocation style={IconStyles} />
//             <span>ul.Polna 23J, Warszawa</span>
//         </StyledContactBox>
//     </div>
// );

export default ContactContainer;