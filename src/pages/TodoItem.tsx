// TodoItem.tsx
import React, { useState } from 'react';
import { TodoStatus } from './Homepage';
import {Save,OctagonX,Trash2,Pencil} from 'lucide-react'

interface TodoItemProps {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
  completed: boolean;
  onStatusChange: (id: number, newStatus: TodoStatus, title: string, description: string) => void;
  onDelete: (id: number) => void;
  // Remove the line below if onUpdate is not used
  onUpdate: (id: number, newStatus: TodoStatus, newTitle: string, newDescription: string) => Promise<void>;
}


const TodoItem: React.FC<TodoItemProps> = ({ id, title, description, status, onStatusChange, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTitle(title);
    setUpdatedDescription(description);
  };

  const handleSaveClick = async () => {
    console.log('Before update:', id, status, updatedTitle, updatedDescription);
    await onUpdate(id, status, updatedTitle, updatedDescription);
    console.log('After update:', id, status, updatedTitle, updatedDescription);
    setIsEditing(false);
  };
    

  return (
    <div className={`todo ${status}`}>
      {isEditing ? (
        <div className='flex flex-col gap-1'>
          <b className='ml-2'>Title : </b><input className='rounded-lg ml-2 text-center'
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value) 
            }
          />
          <b >Description : </b>
          <input className='rounded-lg text-center'
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h3><b>Title : </b>{title}</h3>
          <p><b>Description : </b>{description}</p>
        </div>
      )}
      
      <select
        value={status} className='rounded-md mt-2'
        onChange={(e) => onStatusChange(id, e.target.value as TodoStatus, title, description)}
      >
        <option value={TodoStatus.Pending}>Pending</option>
        <option value={TodoStatus.InProgress}>In Progress</option>
        <option value={TodoStatus.Done}>Done</option>
      </select>

      {isEditing ? (
        <div className='flex gap-5 p-3'>
          <button onClick={handleSaveClick}><Save /></button>
          <button onClick={handleCancelClick}><OctagonX /></button>
        </div>
      ) : (
        <button onClick={handleUpdateClick} className='p-2'><Pencil /></button>
      )}

      <button onClick={() => onDelete(id)} className='pl-3'><Trash2 /></button>
    </div>
  );
};

export default TodoItem;
