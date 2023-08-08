import React from "react";
import getText, { words } from "../getText";

function Lession() {
  return (
    <div>
      <span className="secondary-heading heading">{getText(words.bilim)}</span>
      <span className="secondary-heading">{getText(words.tillar)}</span>

      <table className="table">
        <thead>
          <tr>
            <th rowSpan={2} className="title-td">{getText(words.til)}</th>
            <th colSpan={3} className="title-td">{getText(words.mulk)}</th>
          </tr>
          <tr>
            <th className="title-td">{getText(words.xat)}</th>
            <th className="title-td">{getText(words.oqish)}</th>
            <th className="title-td">{getText(words.sozlovchi)}</th>
          </tr>
         
        </thead>
        <tbody>
            <tr>
                <td>{getText(words.ozbek)}</td>
               <td> <input required></input></td>
               <td> <input required></input></td>
               <td> <input required></input></td>
            </tr>
            <tr>
                <td>{getText(words.ruskiy)}</td>
                <td> <input required></input></td>
                <td> <input required></input></td>
                <td> <input required></input></td>
            </tr>
            <tr>
                <td>{getText(words.english)}</td>
                <td> <input required></input></td>
                <td> <input required></input></td>
                <td> <input required></input></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Lession;
