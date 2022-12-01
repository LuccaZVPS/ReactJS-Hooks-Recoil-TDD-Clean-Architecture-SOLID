import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  test("Should call HttpClient with correct url", async () => {
    class HttpPostClient implements HttpPostClient {
      async post(url: string) {
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostClient = new HttpPostClient();
    const spy = jest.spyOn(httpPostClient, "post");
    const sut = new RemoteAuthentication(url, httpPostClient);
    await sut.auth({ email: "any_email", password: "any_password" });
    expect(sut.url).toBe(url);
    expect(spy).toHaveBeenCalledWith(url);
  });
});
