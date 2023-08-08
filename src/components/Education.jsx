import React from "react";
import getText, { words } from "../getText";

function Education() {
  return (
    <div>
      <span className="secondary-heading">{getText(words.education)}</span>
      <table className="table">
        <thead>
          <tr>
            <th className="title-td">{getText(words.enter_data)}</th>
            <th className="title-td">{getText(words.finish)}</th>
            <th className="title-td">{getText(words.name_of_instut)}</th>
            <th className="title-td">{getText(words.field)}</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td><input required></input></td>
                <td><input required></input></td>
                <td><input required></input></td>
                <td><input required></input></td>
            </tr>
            <tr>
                <td><input required></input></td>
                <td><input required></input></td>
                <td><input required></input></td>
                <td><input required></input></td>
            </tr>
            <tr>
                <td colSpan={2} className="title-td">{getText(words.exstra_edu)}</td>
                <td colSpan={2}><input required></input></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Education;
