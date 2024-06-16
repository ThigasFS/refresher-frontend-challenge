import styled from "styled-components";

const Container = styled.div`
  margin: 2em auto;
  padding: 1.5em;
  width: 92%;
  height: auto;
  text-align: center;
  background-color: #ffcd00;
  border-radius: 2em;
`;

const Paragraph = styled.p`
  font-size: 3em;
  font-family: "Poppins";
  margin-bottom: 10px;
`;

const Body = styled.p`
  font-size: 2em;
  font-family: "Poppins";
  margin-top: 0;
`;

function Apresentation() {
  return (
    <Container>
      <Paragraph>
        <strong>Trends</strong>
      </Paragraph>
      <Body>
        Ache o <strong>seu</strong> design
      </Body>
    </Container>
  );
}

export default Apresentation;
