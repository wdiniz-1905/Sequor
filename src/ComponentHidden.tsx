export const TableHidden = (
  nameArray: Array<string>,
  passwordArray: Array<string>,
  tableHiddenLogic: boolean,
  setNameArray: any,
  setPasswrodArray: any,
  setTableHiddenLogic: any,
  nameBuffer: string,
  passwordBuffer: string,
  buttonLabelBuffer: string
) => {
  if (nameBuffer && passwordBuffer) {
    setNameArray(nameArray.concat(nameBuffer));
    setPasswrodArray(passwordArray.concat(passwordBuffer));

    if (buttonLabelBuffer === "Save") {
      setTableHiddenLogic(!tableHiddenLogic);
    } else {
      setTableHiddenLogic(true);
    }
  } else {
    if (buttonLabelBuffer === "Save") {
      alert("Please fill all fields!");
    } else {
      setTableHiddenLogic(false);
    }
  }
};

export const FormHidden = (
  setButtonLabel: any,
  setFormHiddenLogic: any,
  setNewName: any,
  setNewSenha: any,
  newName: string,
  newPassword: string,
  buttonLabel: string
) => {
  if (buttonLabel === "Save" && newName !== "" && newPassword !== "") {
    //console.log("entrou");
    setButtonLabel("Back");
    setFormHiddenLogic(true);
  } else {
    setButtonLabel("Save");
    setFormHiddenLogic(false);
  }
  setNewName("");
  setNewSenha("");
};
