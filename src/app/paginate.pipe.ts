import { Pipe, PipeTransform } from "@angular/core";
import { TagResults } from "./data.service";

@Pipe({
  name: "paginate"
})
export class PaginatePipe implements PipeTransform {
  transform(value: TagResults[], ...args: any[]): any {
    const start = args[0] * args[1];
    const end = start + args[1];
    return value ? value.slice(start, end) : [];
  }
}
