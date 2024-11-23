import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;

  const existingEnrollment = enrollments.find(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
  if (existingEnrollment) {
    throw new Error("User is already enrolled in this course.");
  }

  const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId };
  enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;

  const initialLength = enrollments.length;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );

  if (Database.enrollments.length === initialLength) {
    throw new Error("User is not enrolled in this course.");
  }

  return { userId, courseId };
}

export function getUserEnrollments(userId) {
  const { enrollments } = Database;

  return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function getCourseEnrollments(courseId) {
  const { enrollments } = Database;

  return enrollments.filter((enrollment) => enrollment.course === courseId);
}
