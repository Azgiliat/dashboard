/* eslint-disable  @typescript-eslint/no-explicit-any */

type FirebaseRequest = (...args: any[]) => Promise<any>;
export enum Method {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}
interface BaseRequestParams {
  method: Method;
  url: string;
}
interface GetRequestParams extends BaseRequestParams {
  method: Method.GET;
  query?: string[];
}
interface PostRequestParams extends BaseRequestParams {
  method: Method.POST;
  data: unknown;
}

export type RequestParams =
  | BaseRequestParams
  | GetRequestParams
  | PostRequestParams;

function isFirebaseRequest(
  requester: FirebaseRequest | RequestParams,
): requester is FirebaseRequest {
  return typeof requester === 'function';
}

export function baseRequest<T extends FirebaseRequest>(
  requester: T,
): ReturnType<T>;
export function baseRequest<T = any>(requestParams: RequestParams): Promise<T>;
export function baseRequest<T = any>(requester: any) {
  let executor: null | typeof requester = null;
  if (isFirebaseRequest(requester)) {
    executor = requester;
  } else {
    executor = () => <T>fetch(requester.url, {
        method: requester.method,
      }).then((res) => res.json());
  }

  return executor().catch((err: Error) => {
    // TODO catch some global errors and show in toaster
    throw err;
  });
}
