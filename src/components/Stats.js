// OVERALL STATS
export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding things for the tour 🧳</em>
      </p>
    );

  const itemsLength = items.length;
  const packedLength = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedLength / itemsLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have got everything now 😊"
          : `You have ${itemsLength} items in your list and you have packed 
          ${packedLength} items ${percentage}%`}
      </em>
    </footer>
  );
}
