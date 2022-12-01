import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";
describe("RemoteAuthentication", () => {
  interface SutTypes {
    sut: RemoteAuthentication;
    httpPostClientSpy: HttpPostClientSpy;
  }
  const makeSut = (): SutTypes => {
    var url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);

    return {
      httpPostClientSpy,
      sut,
    };
  };
  test("Should call HttpClient with correct url", async () => {
    const { httpPostClientSpy, sut } = makeSut();
    const spy = jest.spyOn(httpPostClientSpy, "post");
    await sut.auth({ email: "any_email", password: "any_password" });
    expect(sut.url).toBe("any_url");
    expect(spy).toHaveBeenCalledWith("any_url");
  });
});
