import React,
{
  useState
}
from "react";

import axios from "axios";

function FileUpload() {

  const [file,
  setFile] =
  useState(null);

  const handleUpload =
  async () => {

    const formData =
    new FormData();

    formData.append(
      "file",
      file
    );

    await axios.post(

      "http://localhost:5000/api/upload-json",

      formData

    );

    alert(
      "Data uploaded successfully"
    );

  };

  return (

    <div
    style={{
      textAlign: "center",
      marginTop: "30px"
    }}
    >

      <input
        type="file"
        accept=".json"
        onChange={e =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <br />

      <button
        onClick={handleUpload}
        style={{

          marginTop: "15px",

          padding:
          "10px 20px",

          background:
          "#286FB4",

          color: "white",

          border: "none",

          borderRadius: "6px",

          cursor: "pointer"

        }}
      >
        Upload JSON
      </button>

    </div>

  );

}

export default FileUpload;