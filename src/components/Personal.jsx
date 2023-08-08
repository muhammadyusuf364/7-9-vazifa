import React from "react";
import getText, { words } from "../getText";
import file from "./file.svg";

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function Personal({ formValues, handleChange }) {
  const fileChange = async (e) => {
    const base64 = await blobToBase64(e.target.files[0]);
    handleChange({
      target: {
        name: "photo",
        value: base64,
      },
    });
    console.log(base64);
  };
  return (
    <div>
      <span className="secondary-heading">{getText(words.personal)}</span>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan={2} className="title-td">
              {getText(words.fio)}
            </td>
            <td colSpan={2}>
              <input
                name="fio"
                required
                value={formValues.fio}
                onChange={handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getText(words.date_of_birth)}</td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getText(words.place_of_birth)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td className="title-td">{getText(words.citizin)}</td>
            <td>
              <input required></input>
            </td>
            <td className="title-td">{getText(words.nationalit)}</td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td className="title-td">{getText(words.contact)}</td>
            <td>
              <label htmlFor="dom">{getText(words.home_tel)}</label>
              <input type="tel" required id="dom"></input>
            </td>
            <td>
              <label htmlFor="call">{getText(words.cell_tel)}</label>
              <input type="tel" required id="call"></input>
            </td>
            <td>
              <label htmlFor="work">{getText(words.work_tel)}</label>
              <input type="tel" required id="work"></input>
            </td>
          </tr>

          <tr>
            <td className="title-td">{getText(words.email)}</td>
            <td>
              <input type="email" required></input>
            </td>
            <td className="title-td">{getText(words.extra_contact)}</td>
            <td>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="title-td">
              {getText(words.place_of_live)}
            </td>
            <td colSpan={2}>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">
              {getText(words.place_of_current)}
            </td>
            <td colSpan={2}>
              <input required></input>
            </td>
          </tr>

          <tr>
            <td colSpan={2} className="title-td">
              {getText(words.photo)}
            </td>
            <td colSpan={2}>
              <label>
                <input
                  style={{ display: "none" }}
                  name="photo"
                  required
                  onChange={fileChange}
                  type="file"
                  accept="image/*"
                />
                <img width={100} src={formValues.photo || file} alt="" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Personal;
