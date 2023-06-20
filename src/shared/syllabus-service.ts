import {RpcService} from "@philippkoch/jsrpc";
import {Course} from "./course-interface";
import {CourseSearch} from "./course-search-interface";

export interface SyllabusService extends RpcService {
  getCourses(search: CourseSearch): Course[];
}
