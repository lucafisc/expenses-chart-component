function Graph(props) {
  const { maxValue, value } = props;
  const height = (value / maxValue) * 100;
  const style = {
    height: height + "%",
  };
  return (
    <div className="bar-container">
      <div className="bar" style={style}>
        <div className="bar-legend">
          <p>${value}</p>
        </div>
      </div>
    </div>
  );
}

export default Graph;
