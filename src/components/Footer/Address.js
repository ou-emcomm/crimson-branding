import React from "react";
import styled from "styled-components";

const AddressContainer = styled.div`
  font-size: 80%;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Address = () => {
  return (
    <AddressContainer>
      <p>
        Admissions and Recruitment
        <br />
        1000 Asp Ave, Room 127
        <br />
        Norman, OK 73019
        <br />
        <Link href="tel:405-325-2151">(405) 325-2151</Link>
      </p>
    </AddressContainer>
  );
};
export default Address;
