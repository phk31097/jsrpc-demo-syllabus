import {SyllabusService} from "../shared/syllabus-service";
import {Rpc} from "@philippkoch/jsrpc";
import {Course} from "../shared/course-interface";
import {ALL_COURSES} from "./course-data";
import {CourseSearch} from "../shared/course-search-interface";

@Rpc
export class SyllabusServiceImplementation implements SyllabusService {
  getCourses(search: CourseSearch): Course[] {
    if (!search.filter) return ALL_COURSES.slice(0, search.limit);
    const filterLowercase = search.filter.toLowerCase();
    return (ALL_COURSES as Course[]).filter(course => {
      if (course.name.toLowerCase().includes(filterLowercase)) {
        return true;
      }
      if (course.description.toLowerCase().includes(filterLowercase)) {
        return true;
      }
      return false;
    }).slice(0, search.limit);
  }
}
