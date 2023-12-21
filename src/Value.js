///
///
///
///Информация касательно калорий, которы уже были поглощены
///а также, лимит калорийности
///
///
///
import "./Value.css";
//Использование props. Везде использовалось фактические названия,
//Но для практики и разнообразия, решил попробовать props
//(в прямом смысле слова - props)
function Value(props) {
  var ResultKkal = <span className="">{props.YourKaloraj}</span>;
  //Если же, достигнут лимит калорийности. Например, употребленно
  //3000ккал, когда лимит - 2000, тогда значение подсветится красным
  if (props.YourKaloraj > props.currentValue) {
    ResultKkal = <span className="is_bad">{props.YourKaloraj}</span>;
  }
  return (
    <div>
      <h1 className="kkal_value">
        {ResultKkal} / <span>{props.DayLimit}</span>
        {props.LANG_CH.Ccal}
      </h1>
    </div>
  );
}

export default Value;
