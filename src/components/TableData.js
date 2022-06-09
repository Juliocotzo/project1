import React from "react";

const TableData = ({ data }) => {
  return (
    <div>
      <table className="table mt-4">
        <thead>
          <tr>
            <td>SO_ID</td>
            <td>SO_NAME</td>
            <td>OMP_ID</td>
            <td>SO_CREATED_WHEN</td>
            <td>SO_MODIFIED_WHEN</td>
            <td>SO_PARENT_ID</td>
            <td>SO_STATUS</td>
            <td>SFDC_ID</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.SO_ID}</td>
              <td>{row.SO_NAME}</td>
              <td>{row.OMP_ID}</td>
              <td>{row.SO_CREATED_WHEN}</td>
              <td>{row.SO_MODIFIED_WHEN}</td>
              <td>{row.SO_PARENT_ID}</td>
              <td>{row.SO_STATUS}</td>
              <td>{row.SFDC_ID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
