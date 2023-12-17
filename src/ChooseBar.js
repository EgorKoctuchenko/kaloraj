import "./ChooseBar.css";

function ChooseBar({
  onAddItemClick,
  onYourMaxClick,
  onYourDelete,
  onYourRename,
}) {
  return (
    <div className="tool">
      <h2 className="title">Kaloraj</h2>
      <ul className="tool_list">
        <li onClick={onAddItemClick}>Добавить</li>
        <li onClick={onYourRename}>Изменить</li>
        <li onClick={onYourDelete}>Удалить</li>
        <li onClick={onYourMaxClick}>Рассчитать свою норму</li>
      </ul>
      <h2 className="lang">RU</h2>
    </div>
  );
}

export default ChooseBar;
