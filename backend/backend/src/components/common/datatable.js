//file: AyesOnAi\backend\backend\src\components\common\datatable.js


import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "../../utilities/users-service";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const Datatable = ({ myData, myClass, multiSelectOption, pagination }) => {
  const [open, setOpen] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const [data, setData] = useState(myData);
  const selectRow = (e, i) => {
    if (!e.target.checked) {
      setCheckedValues(checkedValues.filter((item, j) => i !== item));
    } else {
      checkedValues.push(i);
      setCheckedValues(checkedValues);
    }
  };

  const handleRemoveRow = () => {
    const updatedData = myData.filter(function (el) {
      return checkedValues.indexOf(el.id) < 0;
    });
    setData([...updatedData]);
    toast.success("Successfully Deleted !");
  };

  const renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          data[cellInfo.index][cellInfo.index.id] = e.target.innerHTML;
          setData({ myData: data });
        }}
        dangerouslySetInnerHTML={{
          __html: myData[cellInfo.index][cellInfo.index.id],
        }}
      />
    );
  };
// the user Id isnt being cought 
  const handleDelete = async (index, userId) => {
    
    if (window.confirm("Are you sure you wish to delete this item?")) {
      try {
      
        const message = await deleteUser(userId); // You are calling deleteUser(userId) here
        console.log("message: " + message);
        toast.success(message);
        const del = data;
        del.splice(index, 1);
        setData([...del]);
        console.log("delete done");
      } catch (error) {
        console.log("this didnt delete")
        console.log(error);
        toast.error(error);
      }
    }
  };

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const columns = [];
  for (const key in myData[0]) {
    let editable = renderEditable;
    if (key === "image") {
      editable = null;
    }
    if (key === "status") {
      editable = null;
    }
    if (key === "avtar") {
      editable = null;
    }
    if (key === "vendor") {
      editable = null;
    }
    if (key === "order_status") {
      editable = null;
    }

    columns.push({
      name: <b>{Capitalize(key.toString())}</b>,
      header: <b>{Capitalize(key.toString())}</b>,
      selector: (row) => row[key],
      Cell: editable,
      style: {
        textAlign: "center",
      },
    });
  }

  if (multiSelectOption === true) {
    columns.push({
      name: <b>Action</b>,
      id: "delete",
      accessor: (str) => "delete",
      cell: (row, index) => (
        <div>
          <span onClick={() => handleDelete(index, row._id)}>
            
            <i
              className="fa fa-trash"
              style={{
                width: 35,
                fontSize: 20,
                padding: 11,
                color: "#e4566e",
              }}
            ></i>
          </span>
        </div>
      ),
      style: {
        textAlign: "center",
      },
      sortable: false,
    });
  } else {
    columns.push({
      name: <b>Action</b>,
      id: "delete",
      accessor: (str) => "delete",
      cell: (row, index) => (
        <div>
          <span onClick={() => handleDelete(index,row._id)}>
            <i
              className="fa fa-trash"
              style={{
                width: 35,
                fontSize: 20,
                padding: 11,
                color: "#e4566e",
              }}
            ></i>
          </span>

          <span>
            <i
              onClick={onOpenModal}
              className="fa fa-pencil"
              style={{
                width: 35,
                fontSize: 20,
                padding: 11,
                color: "rgb(40, 167, 69)",
              }}
            ></i>
            <Modal
              isOpen={open}
              toggle={onCloseModal}
              style={{ overlay: { opacity: 0.1 } }}
            >
              <ModalHeader toggle={onCloseModal}>
                <h5 className="modal-title f-w-600" id="exampleModalLabel2">
                  Edit Product
                </h5>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label htmlFor="recipient-name" className="col-form-label">
                      Category Name :
                    </Label>
                    <Input type="text" className="form-control" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="message-text" className="col-form-label">
                      Category Image :
                    </Label>
                    <Input
                      className="form-control"
                      id="validationCustom02"
                      type="file"
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  color="primary"
                  onClick={() => onCloseModal("VaryingMdo")}
                >
                  Update
                </Button>
                <Button
                  type="button"
                  color="secondary"
                  onClick={() => onCloseModal("VaryingMdo")}
                >
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </span>
        </div>
      ),
      style: {
        textAlign: "center",
      },
      sortable: false,
    });
  }
  return (
    <div>
      <Fragment>
        <DataTable
          data={data}
          columns={columns}
          className={myClass}
          pagination={pagination}
          striped={true}
          center={true}
        />

        <ToastContainer />
      </Fragment>
    </div>
  );
};

export default Datatable;
