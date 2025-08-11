
export default function Item({ item, OnDeleteItems, onToggleItems }) {
  return <li>
    <input
      type="checkbox"
      checked={item.packed}
      onChange={() => onToggleItems(item.id, item.packed)}
    />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
    <button onClick={() => OnDeleteItems(item.id)}>❌</button>
  </li>;
}
