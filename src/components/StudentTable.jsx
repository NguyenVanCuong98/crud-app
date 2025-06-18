// src/components/StudentTable.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../actions/userActions';
import { Card, List, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './StudentTable.css'; // 👈 import CSS riêng

const { Title, Text } = Typography;

const StudentTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const students = useSelector((state) => state.student.students);

  return (
    <div className="student-page">
      <Card
        title={<Title level={3}>📋 Danh sách sinh viên</Title>}
        bordered={false}
        className="student-card"
      >
        {students?.length === 0 ? (
          <Text type="secondary">Không có sinh viên nào.</Text>
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={students}
            renderItem={(s, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <UserOutlined
                      style={{ fontSize: '24px', color: '#1890ff', marginTop: 5 }}
                    />
                  }
                  title={<Text strong>{index + 1}. {s.name}</Text>}
                  description={
                    <Text>
                      Điểm: <Text type="danger">{s.diem}</Text>
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    </div>
  );
};

export default StudentTable;
