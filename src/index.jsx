const Container = styled.div`
  text-align: center;
`;

const App = ({ children }) => {
  return (
    <Container>
      <h1>Hi</h1>

      {children}
    </Container>
  );
};

export default App;
// ReactDOM.render(<App />, document.querySelector("#app"));
