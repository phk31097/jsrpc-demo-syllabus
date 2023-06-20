import {Component, OnInit} from '@angular/core';
import {Course} from "../shared/course-interface";
import {RpcClient, RpcClientFactory} from "@philippkoch/jsrpc";
import {ServiceMapping} from "../client/client.jsrpc";
import {SyllabusService} from "../shared/syllabus-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  filter: string = '';
  limit = 10;
  courses: Course[] = [];
  service: RpcClient<SyllabusService>;

  public constructor() {
    this.service = new RpcClientFactory({
      host: 'http://localhost',
      port: 3000
    }).getClient<ServiceMapping>().SyllabusService;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service
      .getCourses({filter: this.filter, limit: this.limit})
      .then(courses => this.courses = courses);
  }
}
