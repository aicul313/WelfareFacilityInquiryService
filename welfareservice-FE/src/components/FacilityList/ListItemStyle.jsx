import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.whiteColor};
  color: ${(props) => props.theme.colors.impactColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 400;
`;

export const FacilityName = styled.span`
  width: 25%;
  margin-left: 40px;
`;

export const FacilityType = styled.span`
  width: 25%;
  margin-left: 5px;
`;

export const FacilityNumber = styled.span`
  width: 15%;
  margin-left: 5px;
`;

export const FacilityAddress = styled.span`
  width: 45%;
  margin-left: 5px;
`;