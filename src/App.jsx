import React, { useState } from 'react';
import './App.css';
import TechieStudent from './Student';
import SearchBox from './Student/SearchBox';
import { StudentList } from './Student/StudentList';

// import Form from './Form'

function App() {
  const [searchbox, setsearchbox] = useState('');
  const [searchedStudent, setsearchedStudent] = useState(StudentList);

  function handleInputBox(event) {
    setsearchbox(event.target.value);
    handleSearchedStudent(event.target.value);
    console.log(searchbox)
  }

  function handleSearchedStudent(searchText) {
   try {
    const filtered = StudentList.filter((student) =>
      student.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setsearchedStudent(filtered);
    console.log("hi",filtered)
    
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="m-auto">
        <h1 className="text-center mt-10 mb-5 text-3xl font-semibold">Student List</h1>
        <SearchBox searchChange={handleInputBox} />
      </div>
      <div className="flex justify-center mt-6">
        {
          searchedStudent.length > 0 ? (<TechieStudent StudentList={searchedStudent} />): (<h1 className='-mt-20 text-red-600'>No Student Found</h1>)
        }
      </div>
    </div>
  );
}

export default App;
