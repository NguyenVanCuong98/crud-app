import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students?.map((s) => (
          <React.Fragment key={s.id}>
            <li>{s.name}</li>
            <li>{s.diem}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
