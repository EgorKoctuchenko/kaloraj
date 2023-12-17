import "./ChooseBar.css";

function ChooseBar({
  onAddItemClick,
  onYourMaxClick,
  onYourDelete,
  onYourRename,
  LANG_CH,
  setSelected,
}) {
  return (
    <div className="tool">
      <h2 className="title">Kaloraj</h2>
      <ul className="tool_list">
        <li onClick={onAddItemClick}>{LANG_CH.Menu1}</li>
        <li onClick={onYourRename}>{LANG_CH.Menu2}</li>
        <li onClick={onYourDelete}>{LANG_CH.Menu3}</li>
        <li onClick={onYourMaxClick}>{LANG_CH.Menu4}</li>
      </ul>
      <h2 onClick={setSelected} className="lang">
        {LANG_CH.Lang}
      </h2>
    </div>
  );
}

export default ChooseBar;
