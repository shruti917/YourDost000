import React, { useState, useEffect } from "react";
import Table from "./Table";
import Buttons from "./Buttons";
import Sortingbtn from "../features/Sortingbtn";
import Filterbtn from "../features/Filterbtn";
import Searchbtn from "../features/Searchbtn";

const UserTable = ({ users  }) => {
   const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredUsers(users);   
  }, [users]);

  const usersPerPage = 3;
console.log(filteredUsers);

  //  PAGINATION (slice AFTER filtering)
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

 
  return (
    <div>
  
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>  
            {/* Search */}
             <Searchbtn filtered={{ users, setFilteredUsers }} setCurrentPage={setCurrentPage} />
      
            {/* Filter */}
            <Filterbtn filtered={{ users, setFilteredUsers }} setCurrentPage={setCurrentPage} />
          
            {/* Sort */}
           <Sortingbtn filtered={{ users, setFilteredUsers }} setCurrentPage={setCurrentPage} />

      </div>

            {/* Table */}
            <Table currentUsers={currentUsers}/>

            {/* Pagination */}
            <Buttons page={{currentPage, setCurrentPage}}/>
    </div>
  );
};

export default UserTable;


