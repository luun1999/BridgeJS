import { getAppInfo } from "zmp-sdk/apis"


window.getAppInfo = function getZaloApplication() {
    console.log("getZaloApplication ===========");

    getAppInfo({
        success: (data) => {
            // xử lý khi gọi api thành công
            const { name, version } = data;
        },
        fail: (error) => {
            // xử lý khi gọi api thất bại
            console.log(error);
        }
    });
}

