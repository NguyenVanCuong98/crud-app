import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, editStudent, deleteStudent } from '../actions/studentActions';

const HomeContent = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);

  const [name, setName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddStudent = () => {
    if (name.trim() === '') return;
    if (editingIndex !== null) {
      dispatch(editStudent(editingIndex, { name }));
      setEditingIndex(null);
    } else {
      dispatch(addStudent({ name }));
    }
    setName('');
  };

  const handleEditStudent = (index) => {
    setName(students[index].name);
    setEditingIndex(index);
  };

  const handleDeleteStudent = (index) => {
    dispatch(deleteStudent(index));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Management</h1>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddStudent}>
          {editingIndex !== null ? 'Save' : 'Add'}
        </button>
      </div>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="3">No students</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>
                  <button onClick={() => handleEditStudent(index)}>Edit</button>
                  <button onClick={() => handleDeleteStudent(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HomeContent;
