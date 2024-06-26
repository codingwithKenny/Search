import React from 'react';
// import { StudentList } from './StudentList';
import Card from '@/shared/card';

const TechieStudent = ({StudentList}) => {
  return (
    <div className="flex flex-wrap flex justify-center grid gap-x-8 gap-y-4 grid-cols-3">
      {StudentList.map((student, index) => ( 
        <Card key={index} {...student} />
      ))}
    </div>
  );
};

export default TechieStudent;
