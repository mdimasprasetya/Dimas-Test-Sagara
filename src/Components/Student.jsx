import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DropdownFilter from "./DropdownFilter";
import { FaSearch } from "react-icons/fa";
import Table from "./Table";
import Modal from "./Modal";
import { localData } from "../data/localData";

export const Student = () => {
  const [students, setStudents] = React.useState(localData);
  const [studentSearch, setStudentSearch] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [isEdit, setIsEdit] = React.useState(false);
  const [id, setId] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsEdit(false);
    setId("");
    setIsOpen(false);
    setSearch("");
    setStudentSearch([]);
  };
  const handleModalEdit = (id) => {
    setId(id);
    setIsEdit(true);
    setIsOpen(true);
  };
  const addStudent = (student) => {
    const id = Math.floor(Math.random() * 1000);
    const newStudent = { id, ...student };
    setStudents([...students, newStudent]);
    handleCloseModal();
  };
  const editStudent = (student) => {
    setStudents(students.map((std) => (std.id === id ? student : std)));
    handleCloseModal();
  };
  const handleDelete = (id) => {
    setStudents(students.filter((std) => std.id !== id));
  };
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    setStudentSearch(
      students.filter((std) =>
        std.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  React.useEffect(() => {
    if (filter === "name") {
      const arrStudent = [...students];
      arrStudent.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setStudentSearch(arrStudent);
      return;
    }
    setStudentSearch(students);
}, [filter]);
return (
    <div className="w-full bg-[#F4F4F4]">
      <Sidebar />
      <Navbar />
      <div>
        <p className="text-black ml-80 mt-6 font-bold text-2xl">DATA STUDENT</p>
      </div>
      <div className="flex mt-6 justify-center content-center items-center">
        <DropdownFilter onChange={setFilter} value={filter} />
        <button
          className="btn text-white bg-[#A51535] ml-4 h-[10px]"
          onClick={handleOpenModal}
        >
          + Add User
        </button>
        <div className="flex items-center gap-x-5 ml-auto pr-10 ">
          <div className="relative md:w-65">
            <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
              <button className="p-1 focus:outline-none text-white md:text-black">
                <FaSearch />
              </button>
            </span>
            <input
              type="text"
              className="w-full px-2 py-1 pl-12 rounded shadow outline-none md:block"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <img src="Input.png" alt="" className="w-[15%]" />
        </div>
      </div>
      <Table
        onEdit={handleModalEdit}
        onDelete={handleDelete}
        data={(search || filter) ? studentSearch : students}
      />

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={isEdit ? editStudent : addStudent}
        isEdit={isEdit}
      />
    </div>
  );
};
