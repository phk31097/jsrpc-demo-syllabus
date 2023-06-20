import { RpcServiceMapping } from "@philippkoch/jsrpc";
import { RpcClient } from "@philippkoch/jsrpc";
import { SyllabusService } from "../shared/syllabus-service";
export interface ServiceMapping extends RpcServiceMapping {
    SyllabusService: RpcClient<SyllabusService>;
}