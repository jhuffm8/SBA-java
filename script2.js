// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
       due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  let id = 1
//   let found = AssignmentGroup['assignments'].find((item)=>{
//     if(item.id === id) return true
//   })
// let found

//   for (const iterator of AssignmentGroup['assignments']) {
//     if(iterator.id === id) found = iterator
//   }
//   console.log(found.points_possible)
  

//   const newData = [];
// 
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
//   1970
// google way to convert a string date to a time stamp
// console.log(Date.now())
  function getLearnerData(course, ag, submissions) {

    console.log(`Class: ${course.name}`);
     const newData = [];
     let sum = 0
   

     let openAssignment = submissions.filter((item)=>{

     })
       // if item is not due return true 

    // grab students info
    for (let assignment of openAssignment){     // iterating through the LearnerSubmissions
      let student_id = assignment['learner_id'];
      let exist = false;
      let score = assignment['submission']['score']
     let assignmentId = assignment['assignment_id']
     let date_submitted = Date.parse(assignment['submission']['submitted_at'])

     let found = ag['assignments'].find((item) => {
        if (item.id === assignmentId) return true
     } )
    
  console.log(found.due_at)



      for (let student of newData) { // iterating through the empty array
          if (student.id == student_id){
           // console.log("inside if statment", assignment) // keep only once instance of the student, 
            
           student[assignment['assignment_id']]=score;  // if id does exsit add all other properties from LearnerSubm
            // student'avg'] += score; // sum of student scores
            exist = true;

        }
      
            
      }  if(!exist) {
        // console.log(score)
        let obj ={
            id: assignment['learner_id'],
            [assignment['assignment_id']]: score,
            // avg: score,
        
            

        }  
        newData.push(obj) // add id to new array

                                           
    }
 

}
  


console.log(newData)


  

    // here, we would process this data to achieve the desired result.
    //const result = [
    //  {
      //  id: 125,
      //  avg: 0.985, // (47 + 150) / (50 + 150)
       // 1: 0.94, // 47 / 50
       // 2: 1.0 // 150 / 150
     // },
      //{
       // id: 132,
      //  avg: 0.82, // (39 + 125) / (50 + 150)
       // 1: 0.78, // 39 / 50
       // 2: 0.833 // late: (140 - 15) / 150
     // }
    //];
  
    //return result;

//   console.log(student_obj);


  }

  getLearnerData(CourseInfo,AssignmentGroup,LearnerSubmissions)


// let numArr = [];
// for (let i = 0; i < LearnerSubmissions.length; i++){
//     let num = LearnerSubmissions[i]['submission']['score'];
//     numArr.push(num);

// }
// let avg = numArr.reduce((acc , curr,) => acc + curr, 0 );

