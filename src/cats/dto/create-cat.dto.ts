/**
 * 在 contoller 中进行 service 调用的时候
 * 如果涉及到参数的传递, 那么 dto class 和  interface 是可以互通的
 * 但前提是:
 *  controller中 传递的参数的dto类型 要满足
 *  service中方法的参数类型
 */

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  // readonly belong: string;
}

export class UpdateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class ListAllEntities {
  readonly name: string;
  readonly limit: number;
  readonly offset: number;
}
