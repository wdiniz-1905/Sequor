import * as React from "react";
import "../mystyle.css";
import { Button, Div, H3, Input, Form } from "../mystyled";
import { FormHidden } from "./../ComponentHidden";

const DataInputForm = (props: {
  addNewFormState(
    newName: string,
    newPassword: string,
    buttonLabel: string
  ): void;
}) => {
  /*
   *
   */
  const [newName, setNewName] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [buttonLabel, setButtonLabel] = React.useState("Save");
  const [formHiddenLogic, setFormHiddenLogic] = React.useState(false);
  const updateNewName = (event: any) => setNewName(event.target.value);
  const updateNewPassword = (event: any) => setNewPassword(event.target.value);
  const handleAddNewInputs = () => {
    props.addNewFormState(newName, newPassword, buttonLabel);
    FormHidden(
      setButtonLabel,
      setFormHiddenLogic,
      setNewName,
      setNewPassword,
      newName,
      newPassword,
      buttonLabel
    );
  };
  return (
    <Div>
      <H3>Sequor Automação e Sistemas</H3>
      <Form>
        <Input
          type="text"
          value={newName}
          onChange={updateNewName}
          hidden={formHiddenLogic}
          className="input1"
          placeholder="Name"
        />
        <br />
        <Input
          type="password"
          value={newPassword}
          onChange={updateNewPassword}
          hidden={formHiddenLogic}
          className="input2"
          placeholder="Password"
        />
      </Form>
      <div className="buttonDiv">
        <Button onClick={handleAddNewInputs}>{buttonLabel}</Button>
      </div>
    </Div>
  );
};
export default DataInputForm;
