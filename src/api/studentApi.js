import axios from 'axios';

// 👇 Thay đổi URL này thành API backend thực tế của bạn (Spring Boot hoặc JSON Server)
const API_URL = 'http://localhost:8081/api/students'; // Ví dụ với Spring Boot

// 📥 GET - Lấy danh sách sinh viên
export const fetchStudentsApi = () => {
  return axios.get(API_URL);
};

// ➕ POST - Thêm sinh viên mới
export const addStudentApi = (student) => {
  return axios.post(API_URL, student);
};

// ✏️ PUT - Cập nhật sinh viên
export const updateStudentApi = (id, student) => {
  return axios.put(`${API_URL}/${id}`, student);
};

// ❌ DELETE - Xóa sinh viên
export const deleteStudentApi = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
