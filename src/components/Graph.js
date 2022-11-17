function Graph(props) {
  const { maxValue, value } = props;
  const height = (value / maxValue) * 100;
  const style = {
    height: height + "%",
  };
  return <div className="bar" style={style}></div>;
}

export default Graph;
