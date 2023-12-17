import "./Value.css";

function Value(props) {
  var ResultKkal = <span className="">{props.YourKaloraj}</span>;
  if (props.YourKaloraj > props.currentValue) {
    ResultKkal = <span className="is_bad">{props.YourKaloraj}</span>;
  }
  return (
    <div>
      <h1 className="kkal_value">
        {ResultKkal} / <span>{props.DayLimit}</span> ккал
      </h1>
    </div>
  );
}

export default Value;
