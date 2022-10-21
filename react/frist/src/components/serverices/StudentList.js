import axios from "axios";

const baseUrl="http://localhost:3000/student";
class StudentList {
    getAllStudentList(){
        return axios.get(baseUrl);
    }
}
export default StudentList