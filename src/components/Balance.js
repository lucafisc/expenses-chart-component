import Logo from "../images/logo.svg";

function Balance(props) {
  const { amount } = props;
  return (
    <div className="balance">
      <div className="text">
        <h2>My Balance</h2>
        <h1>${amount}</h1>
      </div>
      <img src={Logo} alt="Logo"></img>
    </div>
  );
}

export default Balance;
