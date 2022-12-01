import { HttpPostClient } from "../protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient {
  async post(url: string) {
    return Promise.resolve();
  }
}
