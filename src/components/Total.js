function Total(props) {
  const { total } = props;

  return (
    <div className="total-container">
      <hr></hr>
      <p>Total this month</p>
      <div className="numbers">
        <h1>${total}</h1>
        <div>
          <h4>+2.5%</h4>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

export default Total;
