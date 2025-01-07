import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
    const [items, setItems] = useState([]);

    const handleAdd = (item) => {
        setItems([...items, item]);
    };

    const handleRemove = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const handleCheck = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    };

    const handleClearAll = () => {
        window.confirm('Are you sure you want clean the list ❌?') &&
            setItems([]);
    };

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAdd} />
            <PackingList
                items={items}
                onRemoveItem={handleRemove}
                onCheckItem={handleCheck}
                onClearAll={handleClearAll}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
