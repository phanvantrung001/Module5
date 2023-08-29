import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name: "", phone: "", email: "" },
      isValid: true,
      indexSelected: -1,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      (prevState) => ({
        form: {
          ...prevState.form,
          [name]: value,
        },
      }),
      () => this.checkInvalidForm()
    );
  };

  handleSelect = (studentSelected, index) => {
    this.setState({
      form: { ...studentSelected },
      indexSelected: index,
    });
  };

  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const isValid =
      name.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      /^\d+$/.test(phone);

    this.setState({
      isValid: isValid,
    });
  };

  handleSubmit = () => {
    const { form, isValid, indexSelected, studentList } = this.state;
    const { name, phone, email } = form;

    if (isValid && name && phone && email) {
      if (indexSelected > -1) {
        const updatedStudentList = [...studentList];
        updatedStudentList.splice(indexSelected, 1, { name, phone, email });
        this.setState({
          studentList: updatedStudentList,
          form: { name: "", phone: "", email: "" },
          isValid: true,
          indexSelected: -1,
        });
      } else {
        const newStudent = { name, phone, email };
        this.setState((prevState) => ({
          studentList: [...prevState.studentList, newStudent],
          form: { name: "", phone: "", email: "" },
          isValid: true,
          indexSelected: -1,
        }));
      }
    } else {
      this.setState({ isValid: false });
    }
  };

  handleDelete = (index) => {
    const { studentList } = this.state;
    const updatedStudentList = [...studentList];
    updatedStudentList.splice(index, 1);
    this.setState({
      studentList: updatedStudentList,
    });
  };

  render() {
    const { studentList, form, isValid } = this.state;

    return (
      <div>
        <div>
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input name="name" value={form.name} onChange={this.handleChange} />
            {!isValid && !form.name && (
              <p style={{ color: "red" }}>Vui Lòng nhập tên.</p>
            )}
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={this.handleChange}
            />
            {!isValid && !form.phone && (
              <p style={{ color: "red" }}>Vui lòng điền số điện thoai.</p>
            )}
          </div>
          <div>
            <label>Email: </label>
            <input
              name="email"
              value={form.email}
              onChange={this.handleChange}
            />
            {!isValid && !form.email && (
              <p style={{ color: "red" }}>Vui lòng nhập email.</p>
            )}
          </div>
          {!isValid && (
            <p style={{ color: "red" }}>
              Điền đầy đủ các thông tin trước khi thêm vào danh sách .
            </p>
          )}
          <button onClick={this.handleSubmit}>Thêm mới</button>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ten</th>
                <th scope="col">sdt</th>
                <th scope="col">email</th>
                <th scope="col">cong cu</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>
                    <button onClick={() => this.handleSelect(student, index)}>
                      Sửa
                    </button>
                    <button
                      onClick={() => {
                        const confirmed = window.confirm(
                          "Bạn có chắc chắn muốn xoá không?"
                        );
                        if (confirmed) {
                          this.handleDelete(index);
                        }
                      }}
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Student;
