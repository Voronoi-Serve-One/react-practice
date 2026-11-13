import React, { useEffect, useState } from "react";
import TestModal from "./TestModal";

const ExampleItem = () => {
  const [items, setItems] = useState(() => {
    const savedItem = localStorage.getItem("items");
    return savedItem ? JSON.parse(savedItem) : [];
  });
  const [recentDel, SetRecentDel] = useState(null);

  const [modal, setModal] = useState({
    type: "",
    isopen: false,
    content: "",
    buttons: [],
  });
  const [notif, setNotifs] = useState({
    type: "",
    isopen: false,
    content: "",
  });

  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const deleteModal = (item, index) => {
    setModal({
      type: "conf",
      isopen: true,
      content: `Delete This Item? ${item}`,
      buttons: [
        {
          label: "Yes",
          onclick: () => {
            handleDeleteItem(index);
          },
        },
        {
          label: "Cancel",
          onclick: () => {
            setModal({ isopen: false, content: "", buttons: [] });
          },
        },
      ],
    });
  };
  const handleNotifications = (cont) => {
    setNotifs({
      type: "notif",
      isopen: true,
      content: cont,
    });

    setTimeout(() => {
      setNotifs((prev) => ({
        ...prev,
        type: "",
        isopen: false,
        content: "",
      }));
    }, 3000);
  };
  const handleAddItem = () => {
    if (!inputValue.trim()) {
      handleNotifications("Please Enter Something");
      return;
    }
    handleNotifications("Item Successfully Added");
    setItems((prev) => [...prev, inputValue.trim()]);
    setInputValue("");
  };
  const handleDeleteItem = (index) => {
    const deleted = items[index];
    SetRecentDel({
      item: deleted,
      index: index,
    });
    setItems((prev) => prev.filter((each, i) => i !== index));
    setModal({ type: "", isopen: false, content: "", buttons: [] });
    handleNotifications("Item Deleted Successfully");
  };
  const handleUndo = () => {
    setItems((prev) => {
      const copy = [...prev];
      copy.splice(recentDel.index, 0, recentDel.item);
      return copy;
    });
    handleNotifications("Undid Deletion");
    SetRecentDel(null);
  };
  return (
    <div>
      {items.length === 0 ? (
        <p>No Current Items</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteModal(item, index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <input
        value={inputValue}
        type="text"
        placeholder="Enter Item"
        onChange={handleInput}
      />
      <button onClick={handleAddItem}>Add Item</button>
      {recentDel && <button onClick={handleUndo}>Undo Delete</button>}
      <TestModal type={modal.type} isopen={modal.isopen}>
        <p>{modal.content}</p>
        {modal.buttons &&
          modal.buttons.map((btn, i) => (
            <button key={i} onClick={btn.onclick}>
              {btn.label}
            </button>
          ))}
      </TestModal>
      <TestModal type={notif.type} isopen={notif.isopen}>
        <p>{notif.content}</p>
      </TestModal>
    </div>
  );
};

export default ExampleItem;
