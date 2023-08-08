import React from "react";
import getText, { words } from "../getText";

function Bilimlar() {
  return (
    <div>
      <span className="secondary-heading heading">{getText(words.komp)}</span>

      <table className="table">
        <thead></thead>
        <tbody>
        <tr>
            <td className="title-td">{getText(words.word)}</td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getText(words.c)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td className="title-td">{getText(words.excel)}</td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getText(words.inter)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td className="title-td">{getText(words.power)}</td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getText(words.veb)}</td>
            <td>
              <input required></input>
            </td>
          </tr> 
        </tbody>
      </table>
    </div>
  );
}

export default Bilimlar;
