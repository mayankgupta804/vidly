import React from "react";

const ListGroup = ({
  items,
  onItemSelect,
  selectedItem,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            selectedItem === item
              ? "list-group-item active"
              : "list-group-item "
          }
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
