import { useState } from "react";
import { useSelector } from "react-redux";
import "./CodeEditor.css";

export default function CodeEditor() {
  const selectedProblem = useSelector(
    (state) => state.problem.selectedProblem
  );

  const [code, setCode] = useState(
    selectedProblem?.starterCode || ""
  );

  return (
    <div className="editor-container">

      <div className="editor-header">

        <div className="editor-title">
          <h3>Code Editor</h3>
        </div>

        <div className="language-box">
          <label>Language</label>

          <select disabled>
            <option>Java</option>
          </select>
        </div>

      </div>

      <textarea
        className="editor-textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
      />

      <div className="editor-footer">

        <button className="run-btn">
          Run
        </button>

        <button className="submit-btn">
          Submit
        </button>

      </div>

    </div>
  );
}