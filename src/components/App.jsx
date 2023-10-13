import { useState } from 'react';
import Header from './Header';
import List from './List';
import Search from './Search';
import TodoList from './TodoList';
import TombolBawah from './TombolBawah';
import { groceryItems } from './data';

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, complete: !item.complete } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleSearch(searchTerm) {
    setItems((items) => items.filter((item) => item.task.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  function handleAll() {
    setItems(groceryItems);
  }

  function handleDone() {
    setItems((items) => items.filter((item) => item.complete));
  }

  function handleTodo() {
    setItems((items) => items.filter((item) => !item.complete));
  }

  function handleDeleteDoneTasks() {
    setItems((items) =>
      items.map((item) => ({
        ...item,
        complete: !item.complete && item.complete,
      }))
    );
  }

  function handleEditItem(id, newText) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, task: newText } : item)));
  }

  return (
    <div className="konten">
      <Header />
      <Search onAddItem={handleAddItem} onSearch={handleSearch} />
      <TodoList onAllClick={handleAll} onDoneClick={handleDone} onTodoClick={handleTodo} />
      <List items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onEditItem={handleEditItem} />
      <TombolBawah onDeleteDoneClick={handleDeleteDoneTasks} onClearItems={handleClearItems} />
    </div>
  );
}
