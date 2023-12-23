import styled from "styled-components";
import writeBackground from "assets/writeBackground.svg";

export const Write = styled.form`
  position: fixed;
  width: 80%;
  aspect-ratio: 2/3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${writeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  filter: blur(0px);
  padding: 30px 30px 0 30px;
`;

export const NameLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToFrom = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1px;
`;

export const Name = styled.input`
  font-size: 1.2rem;
  color: white;
  width: 5rem;
  background: transparent;
  border: none;
  outline: none;
  margin-bottom: 7.5px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const Arrow = styled.img`
  width: 2.5rem;
`

export const Message = styled.textarea`
  width: 100%;
  height: 55%;
  font-size: 0.75rem;
  color: white;
  background: transparent;
  border: none;
  outline: none;
  margin-top: 10px;
  margin-bottom: 25px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cancel = styled.button`
  font-size: 0.9rem;
  width: 27.5%;
  padding: 10px 0;
  color: white;
  background-color: #db4455;
  border: none;
  border-radius: 7.5px;
`;

export const Submit = styled.button`
  font-size: 0.9rem;
  width: 67.5%;
  padding: 10px 0;
  color: white;
  background-color: #5ea152;
  border: none;
  border-radius: 7.5px;
`;
