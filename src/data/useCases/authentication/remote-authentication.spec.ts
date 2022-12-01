import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";
describe("RemoteAuthentication", () => {
  test("Should call HttpClient with correct url", async () => {
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const spy = jest.spyOn(httpPostClientSpy, "post");
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth({ email: "any_email", password: "any_password" });
    expect(sut.url).toBe(url);
    expect(spy).toHaveBeenCalledWith(url);
  });
});
