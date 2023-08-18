import { Component } from "react";
import Title from "./EditorRG/components/layout/Title";
import FlowContainer from "./EditorRG/containers/FlowContainer";
import { ImageMapEditor } from "./EditorRG/editors";

type EditorType = "imagemap" | "workflow" | "flow" | "hexgrid" | "fiber";

interface IState {
  activeEditor: EditorType;
}

class App extends Component<any, IState> {
  state: IState = {
    activeEditor: "imagemap",
  };

  handleChangeEditor = ({ key }: any) => {
    this.setState({
      activeEditor: key,
    });
  };

  renderEditor = (activeEditor: EditorType) => {
    switch (activeEditor) {
      case "imagemap":
        return <ImageMapEditor />;
    }
  };

  render() {
    const { activeEditor } = this.state;
    return (
      <div className="rde-main">
        <div className="rde-title">
          <Title currentEditor={activeEditor} />
        </div>
        <FlowContainer>
          <div className="rde-content">{this.renderEditor(activeEditor)}</div>
        </FlowContainer>
      </div>
    );
  }
}

export default App;
