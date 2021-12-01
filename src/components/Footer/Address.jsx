import React from "react";
import styled from "styled-components";

const AddressContainer = styled.div`
  font-size: 80%;
`;

const Address = () => (
    <AddressContainer>
      <p>
        Enrollment Management
        <br />
        1000 Asp Ave
        <br />
        Norman, OK 73019
      </p>
    </AddressContainer>
  )
export default Address;
