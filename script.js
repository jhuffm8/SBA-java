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

    console.log(`Class: ${course.name}`);
     const newData = []

    // grab students info
    for (i in submissions){
      let student_id = submissions[i]['learner_id'];
      let exist = false;
      for (j = 0; j < newData.length; j++) {
        if (newData[j] == student_id){
          exist = true;

        }
      } if(!exist) {
        newData.push(student_id); // add id to new array

      }
      console.log(newData);
     


      // let assigment_id = submissions[i]['assignment_id'];
      // let grade = submissions[i]['submission']['score'];


       // grab assignment info
    // for ( i in ag.assignments) {
      
    //   let id = ag.assignments[i]['id'];
    //   let possible_point = ag.assignments[i]['points_possible'];
    //   let name = ag.assignments[i]['name'];
    //   let due_date = ag.assignments[i]['due_at'];
      

    // }


    // console.log(newData);

    }

   
    
   

   
  

    



   











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
  }
getLearnerData(CourseInfo,AssignmentGroup,LearnerSubmissions)
 
let date = new Date();
// need to iterate over assingment group and pull out id and point possible
for ( i in AssignmentGroup.assignments) {
  // console.log(AssignmentGroup.assignments[i])
  let id = AssignmentGroup.assignments[i]['id'];
  let possible_point = AssignmentGroup.assignments[i]['points_possible'];
  let due_date = AssignmentGroup.assignments[i]['due_at'];
  // console.log(due_date);

  
  // console.log(AssignmentGroup.assignments[i]['points_possible']);
}



// iterating through learner sub to get info needed for final results

// for (i = 0; i < LearnerSubmissions.length; i++){
//   let student_id = LearnerSubmissions[i]['learner_id'];
//   let assigment_id = LearnerSubmissions[i]['assignment_id'];
 
// }



// let studentmap = LearnerSubmissions.map((i) => ({
//   id: i.learner_id

// }));
// console.log(studentmap);



