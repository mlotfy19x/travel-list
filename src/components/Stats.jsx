export default function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>
                    🫗 No items yet, Start Adding some items to your packing
                    list 🚀
                </em>
            </footer>
        );
    }

    const itemsCount = items.length;
    const itemsPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round(
        itemsCount > 0 ? (itemsPacked / itemsCount) * 100 : 0
    );

    return (
        <footer className="stats">
            {itemsCount > 0 && (
                <em>
                    {percentage === 100
                        ? '🎉 Congrats! You are ready to go! ✈️'
                        : `👜 you have ${itemsCount} items on your list, and you already packed ${itemsPacked} (${percentage}%)`}
                </em>
            )}
        </footer>
    );
}
