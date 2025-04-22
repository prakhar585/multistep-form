import { useState } from "react";
import "./App.css";
import FooterButton from "./components/Footer-buttons/FooterButton";
import Header from "./components/header/Header";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage >= 1 && currentPage <= 4) {
      setCurrentPage((prevValue) => prevValue - 1);
    }
  };

  const hanldeNext = () => {
    if (currentPage >= 1 && currentPage <= 4) {
      setCurrentPage((prevValue) => prevValue + 1);
    }
  };

  return (
    <div className="App">
      {/* header with a progress bar and numbers */}
      <Header currentPage={currentPage} />

      {/* Footer Buttons to Navigate */}
      <div className="footer-button">
        <div className="Previous-button">
          <button className="btn" onClick={handlePrevious}>
            Previous
          </button>
        </div>
        <div className="Next-button">
          <button className="btn" onClick={hanldeNext}>
            Next
          </button>
        </div>
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
