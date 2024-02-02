"use client"
import React, { useState } from 'react'
import { add_task, remove_task, edit_task } from "@/app/features/taskSlice"
import { useDispatch, useSelector } from 'react-redux'
import CustomModal from '@/app/home/CustomModal';


function homepage() {
  const tasks = useSelector(state => state.task.tasks);
  const [newTask, setNewTask] = useState({ title: '', detail: '' });
  const [editTask, setEditTask] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [editContent, setEditContent] = useState(editTask);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal1 = (task) => {
    setModalOpen1(true);
    setEditTask(task)
  };

  const closeModal1 = () => {
    setModalOpen1(false);
  };

  const dispatch = useDispatch();
  const handleAddTask = () => {
    try {
      dispatch(add_task({ id: Date.now(), ...newTask }))
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleRemoveTask = (delete_id) => {
    try {
      dispatch(remove_task({ id: delete_id }));
    }
    catch (err) {
      console.log(err);
    }
  }
  const handleEditTask = (id) => {
    try {
      dispatch(edit_task({ id, ...editContent }));
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='homediv'>
      <button onClick={openModal} className='addbtn'>Add a task</button>

      <div className="contents">
        {tasks?.map((task) => (
          <div className='content_div'>
            <p>  <b>Title</b> : {task.title}</p>
            <p><b>Detail</b>: {task.detail}</p>
            <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
            <button onClick={() => openModal1(task)} >Edit</button>
          </div>
        ))}

      </div>

      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="formdiv">
          <span><b>Title</b></span>
          <input type="text" className='titleinput'
            onChange={(e) => setNewTask({ title: e.target.value })}
          />
          <br />
          <span><b>Detail</b></span>
          <textarea name="detail" id="detail" cols="39" rows="5" className='taskdetail'
            onChange={(e) => setNewTask({ ...newTask, detail: e.target.value })}></textarea>
          <br />
          <button className='addbtn' onClick={handleAddTask}>Add</button>
        </div>
      </CustomModal>

      <CustomModal isOpen={isModalOpen1} onClose={closeModal1}>
        <div className="formdiv">
          <span><b>Title</b></span>
          <input type="text" className='titleinput'
            defaultValue={editTask.title}
            onChange={(e) => setEditContent({ ...editTask, title: e.target.value })}
          />
          <br />
          <span><b>Detail</b></span>
          <textarea name="detail" id="detail" cols="39" rows="5" className='taskdetail'
            defaultValue={editTask.detail}
            onChange={(e) => setEditContent({ ...editTask, detail: e.target.value })}></textarea>
          <br />
          <button className='addbtn' onClick={() => handleEditTask(editTask.id)}>Edit</button>
        </div>
      </CustomModal>
    </div>
  )
}

export default homepage