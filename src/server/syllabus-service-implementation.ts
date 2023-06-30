import {SyllabusService} from "../shared/syllabus-service";
import {Rpc} from "@philippkoch/jsrpc";
import {Course} from "../shared/course-interface";
import {ALL_COURSES} from "./course-data";
import {CourseSearch} from "../shared/course-search-interface";

@Rpc
export class SyllabusServiceImplementation implements SyllabusService {
  getCourses(search: CourseSearch): Course[] {
    return ALL_COURSES.filter(course => this.isIncluded(course, search.filter)).slice(0, search.limit);
  }

  isIncluded(course: Course, filter: string): boolean {
    if (!filter) return true;
    return (course.name + course.description).toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  }
}
