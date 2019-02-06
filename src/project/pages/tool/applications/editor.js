import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html"; //turn to HTML
import draftToMarkdown from "draftjs-to-markdown"; //turn to markdown
import "./editor.scss";
//https://www.npmjs.com/package/react-draft-wysiwyg
//https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp

export default class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: "",
      editorContent: undefined //content of edit
    };
  }
  //state change of edit
  onEditorStateChange = editorState => {
    console.log("aa"); //先触发aa
    this.setState({
      editorState: editorState
    });
  };
  //content change
  onEditorChange = editorContent => {
    console.log("bb");
    this.setState({
      editorContent: editorContent
    });
  };

  imageUploadCallBack = file =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
      const data = new FormData(); // eslint-disable-line no-undef
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });

  render() {
    const { editorContent, editorState } = this.state;
    return (
      <div>
        <Row>
          <Col span={24}>
            <div className="cloud-box">
              <Card title="Rich Text Editor " bordered={true}>
                <Editor
                  editorState={editorState}
                  // toolbarClassName="home-toolbar"
                  //wrapperClassName="home-wrapper"
                  editorClassName="home-editor123"
                  //edit state change
                  onEditorStateChange={this.onEditorStateChange}
                  toolbar={{
                    history: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    fontFamily: {
                      options: [
                        "SimSun",
                        "SimHei",
                        "KaiTi",
                        "Microsoft YaHei",
                        "Arial"
                      ]
                    }
                    // image: { uploadCallback: this.imageUploadCallBack },
                  }}
                  //content change
                  onContentStateChange={this.onEditorChange}
                  placeholder="Please type your content"
                  onFocus={() => {
                    console.log("focus");
                  }}
                  onBlur={() => {
                    console.log("blur");
                  }}
                  //onTab={() => {console.log('tab'); return true;}}
                  //localization={{ locale: 'zh', translations: {'generic.add': 'Add'} }}
                />
              </Card>
            </div>
          </Col>
          <Col span={8}>
            <Card title="Turn to HTML" bordered={true}>
              <pre>{draftToHtml(editorContent)}</pre>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Turn to MarkDown" bordered={true}>
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {draftToMarkdown(editorContent)}
              </pre>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Turn to JSON" bordered={true}>
              <pre style={{ whiteSpace: "normal" }}>
                {JSON.stringify(editorContent)}
              </pre>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
