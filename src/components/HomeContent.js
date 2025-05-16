import React, { useState } from 'react';
import { Table, Input, Button, Space, Typography, Card,message  } from 'antd';

const { Title } = Typography;

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [diem, setDiem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddStudent = () => {
    if (!name.trim()) {
      message.warning('Please enter a student name.');
      return;
    }
    setStudents([...students, { name , diem }]);
    setName('');
    setDiem('');
    message.success('Student added successfully!');
  };

  const handleEditStudent = (index) => {
    setName(students[index].name);
    setDiem(students[index].diem)
    setEditingIndex(index);
  };

  const handleSaveEdit = () => {
    if (!name.trim()) {
      message.warning('Please enter a student name.');
      return;
    }
    const updatedStudents = [...students];
    updatedStudents[editingIndex] = { name , diem };
    setStudents(updatedStudents);
    setEditingIndex(null);
    setName('');
    setDiem('');
    message.success('Student updated successfully!');
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    message.success('Student deleted successfully!');
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (_, __, index) => index + 1,
      width: '5%',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Điểm',
      dataIndex: 'diem',
      key: 'diem',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, __, index) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditStudent(index)}>
            Edit
          </Button>
          <Button type="primary" danger onClick={() => handleDeleteStudent(index)}>
            Delete
          </Button>
        </Space>
      ),
      width: '20%',
    },
  ];
 
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 0',    // khoảng cách trên dưới
        backgroundColor: '#f0f2f5',  // nền sáng nhẹ cho đẹp
        minHeight: '100vh',   // đủ chiều cao
      }}
    >
      <Card
        style={{
          width: '900px',
          padding: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // bóng nhẹ
          borderRadius: '8px',   // bo góc
          background: '#ffffff', // nền trắng
        }}
      >
        <Title level={3}>Quản lý sinh viên</Title>
  
        <Space style={{ marginBottom: 24 }}>
          <Input
            placeholder="Nhập tên sinh viên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: 300 }}
          />
          <Input
            placeholder="Nhập điểm sinh viên"
            value={diem}
            onChange={(e) => setDiem(e.target.value)}
            style={{ width: 300 }}
          />
          {editingIndex !== null ? (
            <Button type="primary" onClick={handleSaveEdit}>
              Save
            </Button>
          ) : (
            <Button type="primary" onClick={handleAddStudent}>
              Add
            </Button>
          )}
        </Space>
  
        <Table
          size="small"
          columns={columns}
          dataSource={students}
          rowKey={(record, index) => index}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );  
};

export default StudentManagement;
