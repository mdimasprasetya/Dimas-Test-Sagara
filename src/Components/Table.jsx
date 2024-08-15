// eslint-disable-next-line no-unused-vars
import React from "react";

export const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className="pl-72 border-black mt-10 mr-10">
      <div className="overflow-x-auto">
        <table className="table border border-gray-400">
          {" "}
          {/* Border hanya di bagian luar tabel */}
          {/* <!-- head --> */}
          <thead className="bg-gray-200">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Instance</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.instance}</td>
                <td>{item.createdAt}</td>
                <td>
                  <button className="flex">
                    <img onClick={() => onDelete(item.id)} src="delete.svg" alt="" />
                    <img onClick={() => onEdit(item.id)} src="edit.svg" alt="" />
                  </button>
                </td>
              </tr>
            ))}
            {/*             
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>mdimaspr07@gmail.com</td>
              <td>08343538848</td>
              <td>Universitas Muhammadiyah Tangerang</td>
              <td>Thursday, August 15 2024</td>
              <td>
                <button className='flex'>
                  <img src="delete.svg" alt="" />
                  <img src="edit.svg" alt="" />
                </button>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            {/* <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>mdimaspr07@gmail.com</td>
              <td>083843538848</td>
              <td>Universitas Muhammadiyah Tangerang</td>
              <td>Thursday, August 15 2024</td>
              <td>
                <button className="flex">
                  <img src="delete.svg" alt="" />
                  <img src="edit.svg" alt="" />
                </button>
              </td>
            </tr> */}
            {/* <!-- row 3 --> */}
            {/* <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>mdimaspr07@gmail.com</td>
              <td>083843538848</td>
              <td>Universitas Muhammadiyah Tangerang</td>
              <td>Thursday, August 15 2024</td>
              <td>
                <button className="flex">
                  <img src="delete.svg" alt="" />
                  <img src="edit.svg" alt="" />
                </button>
              </td>
            </tr>{" "} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
