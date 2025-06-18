import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Space, Card, Typography } from 'antd';
import {
  fetchStudents, addStudent, updateStudent, deleteStudent
} from '../actions/userActions';
import StudentTable from '../components/StudentTable';


const { Title } = Typography;

const StudentManagement = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.student);

  const [form, setForm] = useState({ name: '', diem: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editId !== null) {
      dispatch(updateStudent(editId, form));
      setEditId(null);
    } else {
      dispatch(addStudent(form));
    }
    setForm({ name: '', diem: '' });
  };

  const handleEdit = (student) => {
    setForm({ name: student.name, diem: student.diem });
    setEditId(student.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div style={{ padding: 40, display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '900px' }}>
        <Title level={3}>Quản lý sinh viên</Title>
        <Space style={{ marginBottom: 24 }}>
          <Input
            placeholder="Tên sinh viên"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: 300 }}
          />
          <Input
            placeholder="Điểm"
            name="diem"
            value={form.diem}
            onChange={handleChange}
            style={{ width: 300 }}
          />
          <Button type="primary" onClick={handleSubmit}>
            {editId !== null ? 'Lưu' : 'Thêm'}
          </Button>
        </Space>
        <StudentTable
          students={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Card>
    </div>
  );
};

export default StudentManagement;
