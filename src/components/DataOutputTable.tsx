import * as React from "react";
import "../mystyle.css";
const DataOutputTable = (props: {
  tableHiddenLogic: boolean;
  nameArray: Array<string>;
  passwordArray: Array<string>;
}) => {
  return (
    <div className="dataList" hidden={!props.tableHiddenLogic}>
      <table>
        <caption>
          <b>
            <p className="nameDados">Users subscribed</p>
          </b>
        </caption>
        <tr>
          <th>Name</th>
          <th>Password</th>
        </tr>
        <tr>
          <td>
            {props.nameArray.map((nameBuffer: string) => {
              return (
                <b className="name" hidden={!props.tableHiddenLogic}>
                  {nameBuffer}
                  <hr />
                </b>
              );
            })}
          </td>
          <td>
            {props.passwordArray.map((passwordBuffer: string) => {
              return (
                <b className="name" hidden={!props.tableHiddenLogic}>
                  {passwordBuffer}
                  <hr />
                </b>
              );
            })}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default DataOutputTable;
