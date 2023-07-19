import React, { useState } from 'react';
import { Button, Form, ListGroup, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [editTaskModalShow, setEditTaskModalShow] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  const handleInputChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleAddTask = () => {
    if (currentTask.trim() !== '') {
      const newTask = { id: Date.now(), text: currentTask, completed: false };
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleOpenEditModal = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditedTaskText(taskText);
    setEditTaskModalShow(true);
  };

  const handleCloseEditModal = () => {
    setEditTaskId(null);
    setEditedTaskText('');
    setEditTaskModalShow(false);
  };

  const handleSaveEditedTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editTaskId) {
        return { ...task, text: editedTaskText };
      }
      return task;
    });
    setTasks(updatedTasks);
    handleCloseEditModal();
  };

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="centered-div">
      <div className='navigation-div'>
        <Link key="main" to="/" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>Todo</Link>
        <Link key="gallery" to="/gallery" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>Gallery</Link>
        <Link key="system" to="/system" style={{ textDecoration: 'none', padding: '0.5rem', margin: '0 0.5rem', color: 'blue', borderRadius: '4px', background: 'lightgray' }}>System Details</Link>
      </div>
      <div className="todo-app-container">
        <h1 className="app-title">Todo App</h1>

        <Form>
          <Form.Group controlId="formTask">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={currentTask}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className='add-button'>
            <Button variant="primary" onClick={handleAddTask}>
              Add Task
            </Button>
          </div>
        </Form>

        <ListGroup className="mt-4">
          {tasks.map((task) => (
            <ListGroup.Item
              key={task.id}
              className={`task-item ${task.completed ? 'completed' : ''}`}
            >
              <span
                className="task-text"
                onClick={() => handleTaskComplete(task.id)}
              >
                {task.text}
              </span>
              <div className="task-actions">
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => handleOpenEditModal(task.id, task.text)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <Modal
        show={editTaskModalShow}
        onHide={handleCloseEditModal}
        centered
        className="edit-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formEditedTask">
            <Form.Label>Edited Task</Form.Label>
            <Form.Control
              type="text"
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEditedTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
