const Container = styled.div`
  text-align: center;
`;

const addOne = () => ({ type: "ADD_ONE" });

const initialState = { counter: 0 };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const store = Redux.createStore(rootReducer);

// const mapStateToProps = state => {
//   return { counter: state.counter };
// };
// const mapDispatchToProps = {
//   addOne
// };

// const connectWithCounter = ReactRedux.connect(
//   mapStateToProps,
//   mapDispatchToProps
// );

const wrapWithStoreProvider = Component => props => (
  <ReactRedux.Provider store={store}>
    <Component {...props} />
  </ReactRedux.Provider>
);

const App = ({ children }) => {
  return (
    <Container>
      <h1>Hi</h1>

      {children({ addOne })}
    </Container>
  );
};

const AppContainer = wrapWithStoreProvider(App);
export { App, AppContainer as default };

// ReactDOM.render(<App />, document.querySelector("#app"));
