import styled from 'styled-components';

const BackgroundDiv = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: #efd5db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 8px solid beige;
  padding: 12px 48px 48px;
  min-height: 500px;
  max-width: calc(100vw - 96px);
`;

const DivList = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  margin: 0;
`;
const DivText = styled.div`
  display: flex;
  margin: 10px;
`;

const DivButton = styled.div`
  display: flex;
  margin: 10px;
`;

export { DivText, DivButton, ContentDiv, Title, BackgroundDiv, DivList };
