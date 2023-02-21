import styled from "styled-components";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Telephone } from "@styled-icons/foundation/Telephone";
import { Time } from "@styled-icons/ionicons-outline/Time";
import { Map } from "@styled-icons/boxicons-regular/Map";


export const EmailIcon = styled(EmailOutline)`
    width: 4.5em;
    color: #08A6E4;
    margin-right: 20px;
    border: 2.5px solid #08A6E4;
    border-radius: 50%;
    padding: 5px;
`;

export const TelephoneIcon = styled(Telephone)`
    width: 4.5em;
    color: #08A6E4;
    margin-right: 20px;
    border: 2.5px solid #08A6E4;
    border-radius: 50%;
    padding: 5px;
`;

export const TimeIcon = styled(Time)`
    width: 2.3em;
    color: #08A6E4;
    margin-right: 10px;
    border: 2px solid #08A6E4;
    border-radius: 50%;
    padding: 3px;
`;

export const LocationIcon = styled(Map)`
    width: 2.3em;
    color: #08A6E4;
    margin-right: 10px;
    border: 2px solid #08A6E4;
    border-radius: 50%;
    padding: 3px;
`;