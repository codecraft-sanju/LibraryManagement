// import React, { useEffect, useState } from "react";
// import { UserData } from "../context/User";
// import { toast } from "react-toastify";
// import {Link} from "react-router-dom";

// const Admin = () => {
//   const { getAllUsers, editUser, deleteUser } = UserData();

//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editUserId, setEditUserId] = useState(null);
//   const [editName, setEditName] = useState("");
//   const [editEmail, setEditEmail] = useState("");

//   // Fetch all users on page load
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const userList = await getAllUsers();
//       setUsers(userList);
//     };
//     fetchUsers();
//   }, [getAllUsers]);

//   // Handle delete user
//   const handleDelete = async (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       await deleteUser(userId);
//       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
//       toast.success("User deleted successfully!");
//     }
//   };

//   // Handle edit user (start editing)
//   const handleEdit = (user) => {
//     setEditUserId(user._id);
//     setEditName(user.name);
//     setEditEmail(user.email);
//   };

//   // Save the edited user details
//   const handleSave = async (userId) => {
//     await editUser(userId, editName, editEmail);
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user._id === userId ? { ...user, name: editName, email: editEmail } : user
//       )
//     );
//     setEditUserId(null);
//     toast.success("User updated successfully!");
//   };

//   // Filter users based on search term
//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-4 text-white">
//       <div className="flex items-center justify-between w-full mb-2">
//       <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
//       <Link to={"/home"} className="flex items-center justify-center p-2 text-white bg-green-500 rounded-md">Home</Link>
//       </div>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by name, email, or role"
//         className="w-full p-2 mb-4 text-black border rounded"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* User Table */}
//       <table className="w-full border border-collapse border-gray-300">
//         <thead>
//           <tr>
//             <th className="p-2 border border-gray-300">Name</th>
//             <th className="p-2 border border-gray-300">Email</th>
//             <th className="p-2 border border-gray-300">Role</th>
//             <th className="p-2 border border-gray-300">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <tr key={user._id} className="text-center">
//                 <td className="p-2 border border-gray-300">
//                   {editUserId === user._id ? (
//                     <input
//                       type="text"
//                       value={editName}
//                       onChange={(e) => setEditName(e.target.value)}
//                       className="w-full p-1 text-black border rounded"
//                     />
//                   ) : (
//                     user.name
//                   )}
//                 </td>
//                 <td className="p-2 border border-gray-300">
//                   {editUserId === user._id ? (
//                     <input
//                       type="text"
//                       value={editEmail}
//                       onChange={(e) => setEditEmail(e.target.value)}
//                       className="w-full p-1 text-black border rounded"
//                     />
//                   ) : (
//                     user.email
//                   )}
//                 </td>
//                 <td className="p-2 border border-gray-300">{user.role}</td>
//                 <td className="p-2 space-x-2 border border-gray-300">
//                   {editUserId === user._id ? (
//                     <>
//                       <button
//                         onClick={() => handleSave(user._id)}
//                         className="px-3 py-1 text-white bg-green-500 rounded"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditUserId(null)}
//                         className="px-3 py-1 text-white bg-gray-500 rounded"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => handleEdit(user)}
//                         className="px-3 py-1 text-white bg-blue-500 rounded"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(user._id)}
//                         className="px-3 py-1 text-white bg-red-500 rounded"
//                       >
//                         Delete
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="p-4 text-gray-500">
//                 No users found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Admin;


import React, { useEffect, useState } from 'react';
import { UserData } from '../context/User';
import { useAttendance } from '../context/Attendance';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Admin = () => {
  const { getAllUsers, editUser, deleteUser } = UserData();
  const { attendanceHistory, fetchAttendanceHistory } = useAttendance();

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getAllUsers();
      setUsers(userList);
    };

    fetchUsers();
    fetchAttendanceHistory(); // Fetch attendance history
  }, [getAllUsers, fetchAttendanceHistory]);

  return (
    <div className="p-4 text-white">
      <div className="flex items-center justify-between w-full mb-2">
        <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
        <Link
          to={'/home'}
          className="flex items-center justify-center p-2 text-white bg-green-500 rounded-md"
        >
          Home
        </Link>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email, or role"
        className="w-full p-2 mb-4 text-black border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* User Table */}
      <h2 className="mt-4 text-xl font-bold">Users</h2>
      <table className="w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">Name</th>
            <th className="p-2 border border-gray-300">Email</th>
            <th className="p-2 border border-gray-300">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="p-2 border border-gray-300">{user.name}</td>
                <td className="p-2 border border-gray-300">{user.email}</td>
                <td className="p-2 border border-gray-300">{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-4 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Attendance Table */}
      <h2 className="mt-6 text-xl font-bold">Attendance Records</h2>
      <table className="w-full mt-4 border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">Date</th>
          </tr>
        </thead>
        <tbody>
          {attendanceHistory.length > 0 ? (
            attendanceHistory.map((date, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border border-gray-300">{date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="1" className="p-4 text-center text-gray-500">
                No attendance records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;

