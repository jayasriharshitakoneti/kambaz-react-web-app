export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="MARKS">Marks</option>
              <option value="CGPA">CGPA</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="MAIL">Mail</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" />
          <td>
            Online Entry Options
            <br />
            <input type="checkbox" name="online-entries" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="online-entries" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="online-entries"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="online-entries"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="online-entries" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" />
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" value="2024-05-13" id="wd-due-date" />
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" />
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input type="date" value="2024-05-06" id="wd-available-from" />
            <br />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" value="2024-05-20" id="wd-available-until" />
            <br />
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>&nbsp;</td>
          <td>
            <button>Cancel</button> <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
