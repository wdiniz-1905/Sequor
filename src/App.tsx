import * as React from "react";
import DataInputForm from "./components/DataInputForm";
import DataOutputTable from "./components/DataOutputTable";
import { TableHidden } from "./ComponentHidden";

/* *
 * Father component receive nameBuffer,passwordBuffer and buttonLabelBuffer from child DataInputForm.
 */
const App = () => {
  const [nameArray, setNameArray] = React.useState([""]);
  const [passwordArray, setPasswrodArray] = React.useState([""]);
  const [tableHiddenLogic, setTableHiddenLogic] = React.useState(false);
  const addNewFormState = (
    nameBuffer: string,
    passwordBuffer: string,
    buttonLabelBuffer: string
  ): void => {
    TableHidden(
      nameArray,
      passwordArray,
      tableHiddenLogic,
      setNameArray,
      setPasswrodArray,
      setTableHiddenLogic,
      nameBuffer,
      passwordBuffer,
      buttonLabelBuffer
    );
  };

  return (
    <div>
      <DataInputForm addNewFormState={addNewFormState} />
      <DataOutputTable
        nameArray={nameArray}
        passwordArray={passwordArray}
        tableHiddenLogic={tableHiddenLogic}
      />
    </div>
  );
};
export default App;
