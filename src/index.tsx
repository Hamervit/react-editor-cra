import ReactDOM from "react-dom/client";
// import { AppContainer } from "react-hot-loader";
// import { LocaleProvider } from "antd";
// import koKR from "antd/lib/locale-provider/ko_KR";
// import enUS from "antd/lib/locale-provider/en_US";
import App from "./App.tsx";
// import { register } from "./serviceWorker";
// import i18next from "i18next";
import { i18nClient } from "./EditorRG/i18n";

// const antResources = {
//     ko: koKR,
//     "ko-KR": koKR,
//     en: enUS,
//     "en-US": enUS,
// };

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

const render = (Component: any) => {
    ReactDOM.createRoot(document.getElementById("root")).render(
        // // <AppContainer>
        //     {/* <LocaleProvider locale={antResources[i18next.language]}> */}
        <Component />
        //     {/* </LocaleProvider> */}
        // {/* </AppContainer> */}
    );
};

i18nClient();

render(App);
