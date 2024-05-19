import React, { useState, useEffect } from 'react';

function fetchData(url = '') {
  return fetch(url)
    .then(response => response.json());
}

function createData(url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

function updateData(url = '', data = {}) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

function deleteData(url = '') {
  return fetch(url, {
    method: 'DELETE'
  })
  .then(response => response.json());
}

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [formData, setFormData] = useState({ questionName: '', questionType: '', answer: '' });

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const url = 'http://localhost:5000/questions';
        const data = await fetchData(url);
        setQuestionData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDataFromServer();
  }, []);

  const handleCreate = async () => {
    try {
      const newQuestion = {
        questionName: formData.questionName,
        questionType: formData.questionType,
        answer: formData.answer
      };
      const url = 'http://localhost:5000/questions';
      const createdQuestion = await createData(url, newQuestion);
      setQuestionData(createdQuestion);
      // Clear the form after creating the question
      setFormData({ questionName: '', questionType: '', answer: '' });
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedQuestion = {
        ...questionData,
        questionName: 'Updated Question'
      };
      const url = `http://localhost:5000/questions/${updatedQuestion._id}`;
      const updatedData = await updateData(url, updatedQuestion);
      setQuestionData(updatedData);
    } catch (error) {
      setError(error);
    }
  };

  const handleDelete = async () => {
    try {
      const url = `http://localhost:5000/questions/${questionData._id}`;
      await deleteData(url);
      setQuestionData(null);
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='ml-[400px] bg-white text-black p-8'>
      <h1 className='text-3xl mb-4'>Admin Dashboard</h1>
      <div className='mb-4'>
        <label htmlFor="questionName" className='block mb-2'>Question Name:</label>
        <input type="text" id="questionName" name="questionName" value={formData.questionName} onChange={handleChange} className='border border-gray-300 px-2 py-1 rounded-md w-full' />
      </div>
      <div className='mb-4'>
        <label htmlFor="questionType" className='block mb-2'>Question Type:</label>
        <input type="text" id="questionType" name="questionType" value={formData.questionType} onChange={handleChange} className='border border-gray-300 px-2 py-1 rounded-md w-full' />
      </div>
      <div className='mb-4'>
        <label htmlFor="answer" className='block mb-2'>Answer:</label>
        <textarea id="answer" name="answer" value={formData.answer} onChange={handleChange} className='border border-gray-300 px-2 py-1 rounded-md w-full'></textarea>
      </div>
      <button onClick={handleCreate} className='bg-black text-white px-4 py-2 rounded-md mr-2'>Create Question</button>
    
    </div>
  );
};

export default AdminDashboard;
