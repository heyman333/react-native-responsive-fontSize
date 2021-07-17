import { RFValue, RFPercentage } from "../index";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Dimensions } from "react-native";

jest.mock("react-native/Libraries/Utilities/Dimensions");
jest.mock("react-native-iphone-x-helper");
describe("react-native-responsive-fontsize", () => {
  jest.mock("react-native/Libraries/Components/StatusBar/StatusBar", () => ({
    currentHeight: 100,
  }));

  test("when iPhoneX is false RFValue", () => {
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 100, height: 680 }))
    );
    isIphoneX.mockReturnValue(false);
    expect(RFValue(20)).toBe(20);
  });

  test("when iPhoneX is false RFPercentage", () => {
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 100, height: 680 }))
    );
    isIphoneX.mockReturnValue(false);
    expect(RFPercentage(3)).toBe(20);
  });

  test("when iPhoneX is true RFValue", () => {
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 100, height: 680 }))
    );
    isIphoneX.mockReturnValue(true);
    expect(RFValue(20)).toBe(18);
  });

  test("when iPhoneX is true RFPercentage", () => {
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 100, height: 680 }))
    );
    isIphoneX.mockReturnValue(true);
    expect(RFPercentage(3)).toBe(18);
  });

  test("when width is bigger than height RFValue", () => {
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 680, height: 100 }))
    );
    isIphoneX.mockReturnValue(true);
    expect(RFValue(20)).toBe(20);
  });

  test("when width is bigger than height RFPercentage", () => {
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 680, height: 100 }))
    );
    isIphoneX.mockReturnValue(true);
    expect(RFPercentage(3)).toBe(20);
  });

  test("when Platform is android RFValue", () => {
    jest.mock("react-native/Libraries/Utilities/Platform", () => ({
      OS: "android",
      select: () => null,
    }));
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 100, height: 680 }))
    );
    isIphoneX.mockReturnValue(true);
    expect(RFValue(20)).toBe(17);
  });

  test("when Platform is android RFPercentage", () => {
    Dimensions.get.mockImplementationOnce(
      jest.fn(() => ({ width: 100, height: 680 }))
    );
    isIphoneX.mockReturnValue(true);
    expect(RFPercentage(3)).toBe(17);
  });
});
