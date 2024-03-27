import { useEffect, useState } from "react";
import axios from "axios";
// import { fetchTasks } from "../api/taskApi"
import Model from "./Model";
import EditModel from "./EditModel";

export default function Task() {
  const fetchTasks = () => {
    axios
      .get("http://localhost:5000/v1/tasks")
      .then((res) => {
        console.log(res);
        setTasks(res.data);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  function addTask(task) {
    axios
      .post("http://localhost:5000/v1/tasks", task)
      .then((res) => {
        console.log("Task added successfully", res);
        fetchTasks();
      })
      .catch((err) => {
        console.error("Error adding task", err);
      });
  }
  function editTask(taskId, taskUpdates) {
    axios
      .put(`http://localhost:5000/v1/tasks/${taskId}`, taskUpdates)
      .then((res) => {
        console.log("Task updated successfully", res);
        fetchTasks();
      })
      .catch((err) => {
        console.error("Error updating task", err);
      });
  }

  const [tasks, setTasks] = useState();
  const [editTrue, setEditTrue] = useState(false);
  const [show, setshow] = useState(false);
  const [defaults, setDefault] = useState("");

  const openModal = () => {
    console.log("first");
    setshow(true);
  };

  const closeModal = () => {
    console.log("second");
    setshow(false);
  };

  const closeEditModal = () => {
    console.log("second");
    setEditTrue(false);
  };

  const handleEdit = (id) => {
    const filteredTasks = tasks.filter((task) => task.id === id);
    setDefault(filteredTasks[0]);
    setEditTrue(true);
    console.log("first");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  function deleteTask(taskId) {
    axios
      .delete(`http://localhost:5000/v1/tasks/${taskId}`)
      .then((res) => {
        console.log("Task deleted successfully", res);
        fetchTasks();
      })
      .catch((err) => {
        console.error("Error deleting task", err);
      });
  }

  return (
    <>
      <div className="bg-white py-24 sm:py-32 flex-1">
        {/* <h1 className="">Asshad</h1> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Tasks
            </h2>
            <button
              class="mx-auto mt-5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-3 px-8 text-white font-semibold rounded-lg shadow-md"
              onClick={openModal}
            >
              New
            </button>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tasks &&
              tasks.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">{post.date}</time>
                    <a
                      href={"/"}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "#dd1313" }}
                        onClick={() => deleteTask(post.id)}
                      ></i>
                    </div>
                    <div>
                      <i
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#0156e9" }}
                        onClick={() => handleEdit(post.id)}
                      ></i>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
      {show && <Model closeModal={closeModal} addTask={addTask} />}
      {editTrue && (
        <EditModel
          closeModal={closeEditModal}
          editTask={editTask}
          defaultValues={defaults}
        />
      )}
    </>
  );
}
