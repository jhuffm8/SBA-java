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

function getLearnerData(course, ag, submissions) {

  const newData = [];

  let dueAssignment = ag['assignments'].filter((item) => {// filter out only due assignments
    return Date.parse(item.due_at) < Date.now();
    
  })

let grade_id = dueAssignment.map((item) => { // map out just the id numbers from array
  return item.id;
})



 let graded = submissions.filter((item) =>  // filter out the assignment sub tht are not due yet
 { 
  let result = grade_id.find((id) => { // locate the id from assignments not due and compare to submissions
  return id == item.assignment_id
 })
 if(result){
  return true;
 } else {
  return false;
 }
})

for(student of graded){  // grab info from student array
  let student_id = student['learner_id'];
  let assignment_id = student['assignment_id']
  let submitted = Date.parse(student['submission']['submitted_at']);
  let exist = false;
  let sum = graded.map((item) => {
    return item.submission['score']
  })

  let found = dueAssignment.find((item) => { // grab items from dueAsignment list
    // console.log(item.due_at)
    if(item.id === assignment_id) return true;
  })
  
  let due_date = Date.parse(found.due_at); 
  let score = student['submission']['score']/found.points_possible;
  let total = score.toFixed(2);

   for(let assign of newData){
    if(assign.id == student_id){

      assign[found['id']] = Number(total);
      exist = true;
      
    }
     
    }
    if(!exist){

      let obj ={

        id: student_id,
        [found['id']]: Number(total),
        avg: (Number(total) + score / found.points_possible)
        
        

      }

      newData.push(obj);

   }

// console.log(assignment_id)
   
}
console.log(newData)



}
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



getLearnerData(CourseInfo,AssignmentGroup,LearnerSubmissions);