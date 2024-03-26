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

  console.log(`Class: ${course.name}`);
   const newData = [];


  // grab students info
  for (i = 0; i< submissions.length; i++){     // iterating through the LearnerSubmissions
    let student_id = submissions[i]['learner_id'];
    let exist = false;
    
    
    for (j = 0; j < newData.length; j++) { // iterating through the empty array
        if (newData[j].id == student_id){
         // console.log("inside if statment", submissions[i]) // keep only once instance of the student, 
          
         newData[j] [submissions[i]['assignment_id']]=submissions[i]['submission']['score'];  // if id does exsit add all other properties from LearnerSubm
          newData[j]['avg'] += submissions[i]['submission']['score']; // sum of student scores
          exist = true;

      }

          
    }  if(!exist) {
      // console.log(submissions[i]['submission']['score'])
      let obj ={
          id: submissions[i]['learner_id'],
          [submissions[i]['assignment_id']]: submissions[i]['submission']['score'],
          avg: submissions[i]['submission']['score'],
          
          // avg: avg_num,
          

      }  
      // console.log(obj)

      newData.push(obj) // add id to new array

                                              
  }


}
console.log(newData)


  // save the assignments as keys in the object
  // assignment score
  // with id as the key
 


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


//   let key = "name"
//   let value = "jordan"

//   let obj ={
//     [key] : value
//   }
//   obj[key] = value


//   console.log(obj) /// {name:"jordan"}
let numArr = [];
for (let i = 0; i < LearnerSubmissions.length; i++){
  let num = LearnerSubmissions[i]['submission']['score'];
  numArr.push(num);

}
let avg = numArr.reduce((acc , curr,) => acc + curr, 0 );

// console.log(avg)
// let av = ([LearnerSubmissions[i]['submission']['score']].reduce((acc, curr) => (acc += curr), 0));
// console.log(parseInt(av)
// console.log(numArr);



for(i = 0; i < AssignmentGroup['assignments'].length; i++){
  let sumArr = [];
  let exist = false;
  let points = AssignmentGroup['assignments'][i]['points_possible'];
  console.log(points)
  for(j = 0; j < sumArr.length; j++){
      console.log(sumArr[j])
  if(sumArr[j] != points){
      sumArr.push(points);
  }
  console.log(sumArr);
  
}
console.log(sumArr);
  
  
}

