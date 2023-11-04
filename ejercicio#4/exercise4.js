

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {
  const commonCourses = [];

  for (const course1 of courses1) {
    for (const course2 of courses2) {
      if (course1 === course2) {
        commonCourses.push(course1);
      }
    }
  }

  return commonCourses;
}

const commonCourses = findCommonCourses(student1Courses, student2Courses);

if (commonCourses.length > 0) {
  console.log('Common courses:');
  commonCourses.forEach(course => {
    console.log(course);
  });
} else {
  console.log('There are no common courses.');
}