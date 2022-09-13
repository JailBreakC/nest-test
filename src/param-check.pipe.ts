import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParamCheckPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('fired');
    console.log({ value, metadata });
    return value;
  }
}
