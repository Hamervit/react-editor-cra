import { Button, Modal, Tooltip } from "antd";
import i18next from "i18next";
import { Component } from "react";
import { Flex } from "../flex";
import { ShortcutHelp } from "../help";
import Icon from "../icon/Icon";

interface IProps {
    currentEditor: string;
}

class Title extends Component<IProps> {
    state = {
        visible: false,
    };

    handlers = {
        goGithub: () => {
            window.open("https://github.com/salgum1114/react-design-editor");
        },
        goDocs: () => {
            window.open(
                "https://salgum1114.github.io/react-design-editor/docs"
            );
        },
        showHelp: () => {
            this.setState({
                visible: true,
            });
        },
    };

    render() {
        const { visible } = this.state;
        return (
            <Flex
                style={{
                    background:
                        "linear-gradient(141deg,#23303e,#404040 51%,#23303e 75%)",
                }}
                flexWrap="wrap"
                flex="1"
                alignItems="center"
            >
                <Flex style={{ marginLeft: 8 }} flex="0 1 auto">
                    <span
                        style={{ color: "#fff", fontSize: 24, fontWeight: 500 }}
                    >
                        React Design Editor
                    </span>
                    <Tooltip
                        title={i18next.t("action.go-github")}
                        overlayStyle={{ fontSize: 16 }}
                    >
                        <Button
                            className="rde-action-btn"
                            style={{
                                color: "white",
                            }}
                            shape="circle"
                            size="large"
                            onClick={this.handlers.goGithub}
                        >
                            <Icon name="github" prefix="fab" size={1.5} />
                        </Button>
                    </Tooltip>
                    <Tooltip
                        title={i18next.t("action.go-docs")}
                        overlayStyle={{ fontSize: 16 }}
                    >
                        <Button
                            className="rde-action-btn"
                            style={{
                                color: "white",
                            }}
                            shape="circle"
                            size="large"
                            onClick={this.handlers.goDocs}
                        >
                            <Icon name="book" prefix="fas" size={1.5} />
                        </Button>
                    </Tooltip>
                    <Tooltip
                        title={i18next.t("action.shortcut-help")}
                        overlayStyle={{ fontSize: 16 }}
                    >
                        <Button
                            className="rde-action-btn"
                            style={{
                                color: "white",
                            }}
                            shape="circle"
                            size="large"
                            onClick={this.handlers.showHelp}
                        >
                            <Icon name="question" prefix="fas" size={1.5} />
                        </Button>
                    </Tooltip>
                </Flex>
                <Flex flex="1" justifyContent="flex-end">
                    <ins
                        className="adsbygoogle"
                        style={{
                            display: "inline-block",
                            width: 600,
                            height: 60,
                        }}
                        data-ad-client="ca-pub-8569372752842198"
                        data-ad-slot="5790685139"
                    />
                </Flex>
                <Modal
                    visible={visible}
                    onCancel={() => this.setState({ visible: false })}
                    closable={true}
                    footer={null}
                    width="50%"
                >
                    <ShortcutHelp />
                </Modal>
            </Flex>
        );
    }
}

export default Title;
