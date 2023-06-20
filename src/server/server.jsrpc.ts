import { RpcServer } from "@philippkoch/jsrpc/server";
import { JsrpcProject } from "@philippkoch/jsrpc/server";
import { SyllabusServiceImplementation } from "./syllabus-service-implementation";
new RpcServer(JsrpcProject.init().configuration.server, [{ listensTo: ["SyllabusService"], service: new SyllabusServiceImplementation() }]).listen();