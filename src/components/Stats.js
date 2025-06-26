export default function Stats({ items }) {

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  // const percentage = ((numPacked / numItems) *100).toFixed(2);
  if (!items.length)
    return <footer className="stats">
      <em>
        Start adding some items to yout list 🚀
      </em>
    </footer>;


  return <footer className="stats">
    <em>
      {percentage === 100 ? 'You got everything! Ready to go ✈️' :
        ` 💼 You have ${numItems} items on your list, and you already packed  ${numPacked} (${percentage}%)`}
    </em>
  </footer>;
}
