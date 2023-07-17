import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import DataItem from "./components/DataItem";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";
import HeaderComponent from "./components/Header";

// redux hooks
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, dragEnd, editData } from "./actions";

import Logo from "./assets/images/logo.png";
import {
  AddInputimg,
  DividerBottomApp,
  DividerTopApp,
  InputApp,
  StyledContent,
  StyledDiv,
  StyledLayout,
  StyledRowApp,
} from "./common/styledComponents";

const App = () => {
  const [isAddingData, setIsAddingData] = useState(false);
  const [newData, setNewData] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteItemIndex, setDeleteItemIndex] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleAddData = () => {
    if (newData) {
      const currentDate = new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      const newDataItem = {
        value: newData,
        createdDate: currentDate,
      };

      if (editIndex !== null) {
        dispatch(editData(editIndex, newDataItem));
        setEditIndex(null);
      } else {
        dispatch(addData(newDataItem));
      }
      setNewData("");
      setIsAddingData(false);
    }
  };

  const handleEditData = (index) => {
    const item = data[index];
    setNewData(item.value);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setNewData("");
    setEditIndex(null);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddData();
    }
  };

  const handleDeleteDataConfirmation = (index) => {
    setDeleteModalVisible(true);
    setDeleteItemIndex(index);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteData(deleteItemIndex));
    setDeleteModalVisible(false);
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false);
    setDeleteItemIndex(null);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    // Reorder the data array based on the drag and drop result
    const newData = Array.from(data);
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);

    // Update the state with the new data order
    dispatch(dragEnd(result));
  };

  return (
    <StyledLayout>
      <HeaderComponent setIsAddingData={setIsAddingData} />

      <StyledContent>
        {isAddingData ? (
          <div className="item-container">
            <Row justify={"center"} align={"middle"}>
              <Col xs={24}>
                <DividerTopApp />

                <StyledRowApp>
                  <Col>
                    <Row>
                      <AddInputimg
                        src={Logo}
                        preview={false}
                        width={32}
                        height={32}
                      />
                      <InputApp
                        placeholder="Name your project"
                        value={newData}
                        onChange={(e) => setNewData(e.target.value)}
                        onKeyPress={handleInputKeyPress}
                      />
                    </Row>
                  </Col>
                </StyledRowApp>

                <DividerBottomApp />
              </Col>
            </Row>
          </div>
        ) : null}

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="data">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="item-container"
              >
                {data.map((item, index) => (
                  <Draggable
                    key={index}
                    draggableId={`item-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <StyledDiv
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        draggableProps={provided.draggableProps.style}
                      >
                        <DataItem
                          item={item}
                          newData={newData}
                          editIndex={editIndex}
                          setNewData={setNewData}
                          handleAddData={handleAddData}
                          handleEditData={() => handleEditData(index)}
                          handleCancelEdit={handleCancelEdit}
                          handleDeleteDataConfirmation={() =>
                            handleDeleteDataConfirmation(index)
                          }
                          index={index}
                        />
                      </StyledDiv>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </StyledContent>

      <DeleteConfirmationModal
        visible={deleteModalVisible}
        handleConfirmDelete={handleConfirmDelete}
        handleCancelDelete={handleCancelDelete}
      />
    </StyledLayout>
  );
};

export default App;
