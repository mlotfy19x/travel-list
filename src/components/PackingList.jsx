import PackingListItem from './PackingListItem';
import { useState } from 'react';

export default function PackingList({
    items,
    onRemoveItem,
    onCheckItem,
    onClearAll,
}) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems = [];
    switch (sortBy) {
        case 'description': {
            sortedItems = items.slice().sort((a, b) => {
                a.description.localeCompare(b.description);
            });
            break;
        }
        case 'packed': {
            sortedItems = items.filter((item) => item.packed);
            break;
        }
        case 'un_packed': {
            sortedItems = items.filter((item) => !item.packed);
            break;
        }
        default: {
            sortedItems = items;
            break;
        }
    }

    return (
        <div className="list">
            <ul style={{ overflow: 'hidden' }}>
                {sortedItems.map((item) => (
                    <PackingListItem
                        key={item.id}
                        item={item}
                        onRemoveItem={onRemoveItem}
                        onCheckItem={onCheckItem}
                    />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort By input order</option>
                    <option value="description">Sort By description</option>
                    <option value="packed">Sort By Packed status</option>
                    <option value="un_packed">Sort By UnPacked status</option>
                </select>
                <button onClick={onClearAll}>Clear all</button>
            </div>
        </div>
    );
}
