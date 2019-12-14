const primaryColor = "#337ab7";

const toggledOnStyles = {
  backgroundColor: polished.darken(0.15, primaryColor),
  borderColor: polished.darken(0.25, primaryColor),
  "&:hover,&:active,&:focus": {
    backgroundColor: polished.darken(0.2, primaryColor),
    borderColor: polished.darken(0.3, primaryColor)
  }
};

const toggledOffStyles = {
  backgroundColor: primaryColor,
  borderColor: polished.darken(0.1, primaryColor),
  "&:hover,&:active,&:focus": {
    backgroundColor: polished.darken(0.1, primaryColor),
    borderColor: polished.darken(0.2, primaryColor)
  }
};

const ToggleButton = styled.button`
  ${props => (props.on ? toggledOnStyles : toggledOffStyles)},
  display: inline-block;
  padding: 6px 12px;
  marginbottom: 0;
  fontsize: 14px;
  fontweight: 400;
  lineheight: 1.4;
  textalign: center;
  cursor: pointer;
  borderradius: 4px;
  color: #fff;
`;

const Toggle = ({ children, initialToggledOn, onToggle }) => {
  const [toggledOn, setToggledOn] = React.useState(initialToggledOn || false);

  const handleToggleClick = () => setToggledOn(!toggledOn);

  return (
    <ToggleButton
      on={toggledOn ? 1 : 0} // bug on styled-comps
      onClick={() => {
        handleToggleClick();
        onToggle();
      }}
      data-testid="button"
    >
      {children}
    </ToggleButton>
  );
};

Toggle.propTypes = {
  initialToggledOn: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};

const TogglerText = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

const CounterText = styled.div`
  font-size: 20px;
  margin: 20px;
`;

const Toggler = ({ addOne }) => {
  const texts = ["Toggle Me", "Toggled"];
  const [text, setText] = React.useState(texts[0]);
  const [inputText, setinputText] = React.useState("");

  const { counter } = ReactRedux.useSelector(state => state);
  const dispatch = ReactRedux.useDispatch();

  const onToggleText = () => (text === texts[0] ? texts[1] : texts[0]);
  return (
    <>
      <Toggle
        onToggle={() => {
          setText(onToggleText());
          // dispatch(addOne());
        }}
      >
        <TogglerText>{text}</TogglerText>
      </Toggle>

      <CounterText>{counter}</CounterText>

      <input
        type="text"
        value={inputText}
        onChange={e => setinputText(e.target.value)}
        data-testid="input"
      />
    </>
  );
};

export { Toggler as default, Toggle };
