import axios from 'axios'

export const fetchTasks = () =>{
    axios.get('http://localhost:3000/tasks').then((res) => {
      console.log(res);
      return res
    }).catch((err) => {
      console.log(err)
      return err
    })
}