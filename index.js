import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";


marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const defaultContent = `
# Hey There,
## This is Divine Patrick
### Yes I code


\`<div>Inline element</div>\`

\`\`\`
const multiLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Bold text**
![My Profile  Pic](https://divinepatrick.vercel.app/img/myprofile-2.png)

[My LinkedIn](www.linkedin.com/in/divinepatrick)

> Block Quote

1. List item one
2. List item two
`

const Editor = ({ content, handleTextareaChange }) => 
  <textarea value={content} onChange={handleTextareaChange} id="editor" />

const Previewer = ({content}) => (
  <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}
  />
);

const App = () => {
  const [content, setContent] = React.useState(defaultContent)
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div class="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));
