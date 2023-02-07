import axios from 'axios'

const GetYear = async obj =>{
    const year= await  axios.post('http://localhost:9000/year',{...obj})
    return year;
}
export default GetYear;