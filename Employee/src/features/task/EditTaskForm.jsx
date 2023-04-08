import { useGetTasksQuery, useUpdateTaskMutation } from "./taskSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";

const EditTaskForm = () => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const { taskId } = useParams();
  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  const navigate = useNavigate();
  const {
    task,
    isSuccess,
    isLoading: isLoadingTask,
  } = useGetTasksQuery("getTasks", {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      task: data?.entities[taskId],
      isSuccess,
      isLoading,
    }),
  });
 
  const onSaveTaskClick = async (e) => {
    e.preventDefault;
    try {
      const response = await updateTask({
        id: task?.id,
        title,
        description,
        completion: status,
        priority: priority,
      }).unwrap();
      setTitle("");
      setDescription("");
      setStatus("");
      
      navigate(`/dash/task/${taskId}`);
    } catch (err) {
      console.log("Failed to save task", err);
    }
  };
  // cancel changes made to task
  const cancelSave = () => {
    navigate(`/dash/task/${taskId}`);
  };
  //   set default values of title descriptiion status
  useEffect(() => {
    if (isSuccess) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.completion);
      setPriority(task.priority);
    }
  }, [isSuccess, task?.title, task?.description, task?.completion]);

  if (isLoadingTask) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  if (!task) {
    return (
      <section>
        <p>No Task found</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Edit Task</h2>
      <form onSubmit={onSaveTaskClick}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            // value={title}
            defaultValue={title}
            onBlur={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            // value={description}
            defaultValue={description}
            onBlur={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="status">Status: {status}</label>
          <select
            name="status"
            id="status"
            defaultValue={status}
            onBlur={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Late Delivery">Late Delivery</option>
            <option value="Started">In Progress</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            defaultValue={priority}
            onBlur={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <button onClick={cancelSave}>Cancel Changes</button>
          <button>Save Changes</button>
        </div>
      </form>
      
    </section>
  );
};

export default EditTaskForm;
