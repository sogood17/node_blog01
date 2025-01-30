import {useState} from "react";
import {Editor} from "@tinymce/tinymce-react";

const PostEditor = () => {
  const [content, setContent] = useState("");
  const TinyMCE_API_key = process.env.REACT_APP_TINYMCE_API_KEY;
  const handleEditorChange = (content) => {
    setContent(content);
  };

  return (
    <div className="post-editor__container">
      <Editor
        apiKey={TinyMCE_API_key}   //api key
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "code"
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | image code",
        }}
        onEditorChange={handleEditorChange}
      />
      <h3>HTML Output:</h3>
      <textarea
        value={content}
        readOnly
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  )
}

export default PostEditor;