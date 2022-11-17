import { useEffect, useState } from "react";
import Graph from "./Graph";

function Spending(props) {
  const { spending } = props;
  const [total, setTotal] = useState(0);
  const [highest, setHighest] = useState(0);
  useEffect(() => {
    setTotal(spending.reduce((partialSum, a) => partialSum + a, 0));
  }, [spending]);
  useEffect(() => {
    setHighest(Math.max(...spending));
  }, [spending]);
  const bars = spending.map((item) => (
    <Graph value={item} maxValue={highest} />
  ));

  return (
    <div className="spending">
      <h1>Spending - last 7 days</h1>
      <div className="graphs">{bars}</div>
      <h1>{total}</h1>
    </div>
  );
}

export default Spending;

//  const productColors = product_colors.map((color, index) => (
//     <ProductColor color={color} key={color + index} />
//   ));
