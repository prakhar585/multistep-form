import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [yoe, setYoe] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState(0);
  const [skills, setSKills] = useState([]);
  const [errors, setErrors] = useState({});
  const [projectCount, setProjectCount] = useState("");
  const [managementExp, setManagementExp] = useState(false);
  const [teamSize, setTeamSize] = useState("");
  const [remoteWork, setRemoteWork] = useState(false);

  const validationStep = (step) => {
    const newErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!firstName.trim()) {
        newErrors.firstName = "First name is required";
        isValid = false;
      }

      if (!lastName.trim()) {
        newErrors.lastName = "Last name is required";
        isValid = false;
      }

      if (!email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        newErrors.email = "Email format is invalid";
        isValid = false;
      }
    }

    if (step === 2) {
      if (!jobTitle.trim()) {
        newErrors.jobTitle = "Job title is Required";
        isValid = false;
      }

      if (yoe < 0) {
        newErrors.yoe = "Years of experience cannot be negative";
        isValid = false;
      }

      if (skills.length === 0) {
        newErrors.skills = "Select at least one skill";
        isValid = false;
      }
    }

    if (step === 3) {
      if (!startDate) {
        newErrors.startDate = "Select your date of Joining";
        isValid = false;
      } else {
        const selectedDate = new Date(startDate);
        const today = new Date();

        // Reset hours to compare just the dates
        today.setHours(0, 0, 0, 0);

        // Check if date is valid
        if (isNaN(selectedDate.getTime())) {
          newErrors.startDate = "Please enter a valid date";
          isValid = false;
        }
        // Check if date is in the future
        else if (selectedDate < today) {
          newErrors.startDate = "Start date must be today or later";
          isValid = false;
        }
      }


      if(!salary){
        newErrors.salary = "Come on Expect something?"
        isValid= false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePrevious = () => {
    if (currentPage >= 2 && currentPage <= 4) {
      setCurrentPage((prevValue) => prevValue - 1);
    }
  };

  const handleNext = () => {
    if (currentPage >= 1 && currentPage <= 4) {
      if (validationStep(currentPage)) {
        setCurrentPage((prevValue) => prevValue + 1);
      }
    }
  };

  const handleSubmit = () => {
    alert("Thank you! Your response has been recorded");
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSKills([...skills, value]);
    } else {
      setSKills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div className="App">
      {/* header with a progress bar and numbers */}
      <Header currentPage={currentPage} />

      {/* Rendering personal page*/}

      <div className="container">
        {currentPage === 1 && (
          <div className="form-container">
            <h3>Personal Information</h3>
            <div>
              <label htmlFor="">First Name</label>
              <br></br>
              <input
                className={errors.firstName ? "input-error" : "input-box"}
                required
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <br></br>
              <input
                 className={errors.lastName ? "input-error" : "input-box"}
                required
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              ></input>
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Email</label>
              <br></br>
              <input
                 className={errors.email ? "input-error" : "input-box"}
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>
        )}

        {/* Professional Page */}
        {currentPage === 2 && (
          <div className="form-container">
            <h3>Professional Information</h3>
            <div>
              <label htmlFor="">Job Title</label>
              <br></br>
              <input
                 className={errors.jobTitle ? "input-error" : "input-box"}
                type="text"
                placeholder="Enter Job Title"
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              ></input>
              {errors.jobTitle && (
                <p className="error-message">{errors.jobTitle}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Years of experience</label>
              <br></br>
              <input
                 className={errors.yoe ? "input-error" : "input-box"}
                required
                type="number"
                placeholder="YOE"
                value={yoe}
                onChange={(e) => {
                  setYoe(e.target.value);
                }}
              ></input>
              {errors.yoe && <p className="error-message">{errors.yoe}</p>}
            </div>
            <div className="skills-section">
              <label>Skills (select at least one)</label>
              <div className="checkbox-group">
                {[
                  "JavaScript",
                  "React",
                  "HTML/CSS",
                  "Node.js",
                  "TypeScript",
                ].map((skill) => (
                  <div key={skill}  className={errors.firstName ? "input-error" : "checkbox-item"}>
                    <input
                      type="checkbox"
                      id={`skill-${skill}`}
                      value={skill}
                      checked={skills.includes(skill)}
                      onChange={handleSkillChange}
                    />
                    <label htmlFor={`skill-${skill}`}>{skill}</label>
                  </div>
                ))}
              </div>
              {errors.skills && (
                <p className="error-message">{errors.skills}</p>
              )}
            </div>

            {parseInt(yoe) >= 5 && (
              <div className="senior-fields">
                <h4>Senior Level Information</h4>

                <div>
                  <label htmlFor="projectCount">
                    Number of completed projects
                  </label>
                  <br />
                  <input
                    className="input-box"
                    type="number"
                    id="projectCount"
                    value={projectCount}
                    onChange={(e) => setProjectCount(e.target.value)}
                  />
                  {errors.projectCount && (
                    <p className="error-message">{errors.projectCount}</p>
                  )}
                </div>

                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="managementExp"
                    checked={managementExp}
                    onChange={(e) => setManagementExp(e.target.checked)}
                  />
                  <label htmlFor="managementExp">
                    Do you have management experience?
                  </label>
                </div>

                {managementExp && (
                  <div>
                    <label htmlFor="teamSize">Team size managed</label>
                    <br />
                    <select
                      className="input-box"
                      id="teamSize"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="">Select team size</option>
                      <option value="small">Small (1-3 people)</option>
                      <option value="medium">Medium (4-10 people)</option>
                      <option value="large">Large (10+ people)</option>
                    </select>
                    {errors.teamSize && (
                      <p className="error-message">{errors.teamSize}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Preference Page */}
        {currentPage === 3 && (
          <div className="form-container">
            <h3>Preferences</h3>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="remotework"
                checked={remoteWork}
                onChange={(e) => setRemoteWork(e.target.checked)}
              ></input>
              <label htmlFor="remotework">Open to remote work</label>
            </div>
            <h3>Professional Information</h3>
            <div>
              <label htmlFor="startDate">Available Start Date</label>
              <br />
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]} // Set min to today
                className={errors.startDate ? "input-error" : "input-box"}
              />
              {errors.startDate && (
                <p className="error-message">{errors.startDate}</p>
              )}
            </div>
            <div>
              <label htmlFor="">Salary expectations(USD)</label>
              <br></br>
              <input
                className={errors.salary ? "input-error" : "input-box"}
                required
                type="number"
                placeholder="e.g 75000 "
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              ></input>
               {errors.salary && (
                <p className="error-message">{errors.salary}</p>
              )}
            </div>
          </div>
        )}
        {currentPage === 4 && (
          <div className="form-container">
            <h3>Review Your Information</h3>

            <div className="review-section">
              <h3>Personal Information</h3>
              <p>
                <strong>Name:</strong> {firstName} {lastName}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
            </div>

            <div className="review-section">
              <h3>Professional Details</h3>
              <p>
                <strong>Job Title:</strong> {jobTitle}
              </p>
              <p>
                <strong>Years of Experience:</strong> {yoe}
              </p>
              <p>
                <strong>Skills:</strong> {skills.join(", ")}
              </p>

              {parseInt(yoe) >= 5 && (
                <>
                  <p>
                    <strong>Projects Completed:</strong> {projectCount}
                  </p>
                  <p>
                    <strong>Management Experience:</strong>{" "}
                    {managementExp ? "Yes" : "No"}
                  </p>
                  {managementExp && (
                    <p>
                      <strong>Team Size:</strong> {teamSize}
                    </p>
                  )}
                </>
              )}
            </div>

            <div className="review-section">
              <h3>Preferences</h3>
              <p>
                <strong>Remote Work:</strong> {remoteWork ? "Yes" : "No"}
              </p>
              <p>
                <strong>Available From:</strong> {startDate}
              </p>
              <p>
                <strong>Salary Expectation:</strong> ${salary}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Buttons to Navigate */}
      <div className="footer-button">
        <div className="Previous-button">
          <button className="btn" onClick={handlePrevious}>
            Previous
          </button>
        </div>
        {currentPage === 4 ? (
          <div className="Next-button">
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        ) : (
          <div className="Next-button">
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

/*
Core Functionality

Create a multi-step form with at least 4 distinct steps:

Personal Information
Professional Details
Preferences
Review/Summary


Implement a visual progress indicator that:

Shows all steps in the sequence
Highlights the current active step
Indicates completed steps
Updates dynamically as users progress through the form


Create a state management system that:

Maintains all form data across steps
Preserves user input when navigating both forward and backward
Handles form submission at the final step


Build robust validation with:

Step-specific validation rules
Clear error messages for invalid inputs
Blocking progression to the next step until all required fields are valid
Real-time validation feedback as users type


Implement conditional rendering that:

Shows/hides form fields based on previous selections
Adapts validation rules for conditionally rendered fields
Presents only relevant fields based on user context



Step Details
Step 1: Personal Information

First name (required)
Last name (required)
Email (required, must be valid format)

Step 2: Professional Details

Job title (required)
Years of experience (required, dropdown)
Skills selection (checkbox group, at least one required)
Conditional fields for senior candidates (5+ years experience):

Number of completed projects
Management experience toggle
Team size managed (if management experience is selected)



Step 3: Preferences

Remote work option (toggle)
Available start date (required)
Salary expectations (required)

Step 4: Review

Display a summary of all entered information
Organized by category
Show only relevant conditional fields
Submit button to complete the form

Technical Requirements

Use React functional components and hooks
Implement clean, modular code structure
Add appropriate comments to explain complex logic
Style the component with a professional appearance
Handle all edge cases and error states
No use of form libraries like Formik - build the validation logic yourself

Evaluation Criteria
Your solution will be evaluated on:

Completeness of implemented requirements
Code quality and organization
State management approach
Validation implementation
User experience and visual design
Handling of conditional logic and edge cases

Submission
Provide a working React component that can be integrated into a larger application. Include any necessary README or documentation on how to use the component.
Time Allocation
You should plan to spend approximately 2-3 hours on this assignment.RetryClaude can make mistakes. Please double-check responses.Tip: Long chats cause you to reach your usage limits faster.
*/
