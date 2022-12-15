import React from "react";
import Sidebar from "../../components/ui/Sidebar";
import Navbar from "../../components/ui/Navbar";
import './List.scss'
import DataTable from "../../components/datatable/DataTable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar />
        <DataTable/>
      </div>
    </div>
  );
};

export default List;
