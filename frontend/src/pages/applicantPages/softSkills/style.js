import styled from "styled-components";

export const SoftSkillsWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.page < 1?"100vw":props.page == 1?"0vw":"-100vw"};
  transition: left 1s ease;
`