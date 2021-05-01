import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";

function App() {
  const [authorOpen, setAuthorOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);
  return (
    <>
      <div className="quiz-center">
        <MdPerson
          className="section-open"
          onClick={() => setAuthorOpen(!authorOpen)}
        />
        <IoMdHelp
          className="section-open help"
          onClick={() => setSectionOpen(!sectionOpen)}
        />
        <div className="quiz-title">
          <h3>Quiz title goes here</h3>
        </div>
        <section className="quiz">
          <div className="quiz-container">
            {/* quiz header */}
            <div className="quiz-header">
              <button className="quiz-btn"> Previous</button>
              <div className="question-numbers">
                <h4>
                  QUESTION <span>2</span> OF <span>25</span>
                </h4>
              </div>
              <button className="quiz-btn">Next</button>
            </div>
            {/* quiz-question-container */}
            <div className="quiz-question-container">
              <div className="quiz-question">
                <h4>
                  <span>Q 12. </span> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusm tempor incididunt ut labore et
                  dolore magna aliqua?
                </h4>
                <div className="question-image-container">
                  <h2>REFERENCE IMAGE</h2>
                </div>
              </div>
              <div className="quiz-options">
                <label class="container">
                  option A
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                  <div className="options-image-container">
                    <h2>REFERENCE IMAGE</h2>
                  </div>
                </label>
                <label class="container">
                  option B
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                  <div className="options-image-container">
                    <h2>REFERENCE IMAGE</h2>
                  </div>
                </label>
                <label class="container">
                  option C
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                  <div className="options-image-container">
                    <h2>REFERENCE IMAGE</h2>
                  </div>
                </label>
                <label class="container">
                  option D
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                  <div className="options-image-container">
                    <h2>REFERENCE IMAGE</h2>
                  </div>
                </label>
              </div>
            </div>
            <div className="mobile-button-container">
              <button className="mobile-btn quiz-btn">Previous</button>
              <button className="mobile-btn quiz-btn">Next</button>
            </div>
          </div>
          <div className="question-section-container">
            <div className="time_profile-container">
              <div className="timer-container">
                <h4>TIME LEFT</h4>
                <div className="timer">
                  <div className="present-time">
                    <div className="progress-bar"></div>
                    <h2>00 : 15 : 24</h2>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  authorOpen
                    ? "profile-container profile-container-1"
                    : "profile-container"
                }`}
              >
                <div className="img">
                  <MdPerson className="author" />
                </div>
                <h5>lorem ipsum</h5>
                <h5>loremipsum@xyz.com</h5>
              </div>
            </div>
            <div
              className={`${
                sectionOpen
                  ? "question-section question-section-1"
                  : "question-section"
              }`}
            >
              <h4>QUESTION SECTION</h4>
              <div className="sections">
                <h4>Section A</h4>
                <div className="btn-container">
                  <button className="btn answered">1</button>
                  <button className="btn ">2</button>
                  <button className="btn not-answered">3</button>
                  <button className="btn not-answered">4</button>
                  <button className="btn marked">5</button>
                  <button className="btn not-answered">6</button>
                  <button className="btn answered">7</button>
                  <button className="btn answered">8</button>
                  <button className="btn not-answered">9</button>
                  <button className="btn answered">10</button>
                  <button className="btn answered">11</button>
                  <button className="btn">12</button>
                  <button className="btn not-answered">13</button>
                  <button className="btn answered">14</button>
                </div>
              </div>
              <div className="sections">
                <h4>Section B</h4>
                <div className="btn-container">
                  <button className="btn answered">15</button>
                  <button className="btn answered">16</button>
                  <button className="btn marked">17</button>
                  <button className="btn">19</button>
                  <button className="btn">19</button>
                  <button className="btn">20</button>
                  <button className="btn">21</button>
                  <button className="btn">22</button>
                  <button className="btn">23</button>
                  <button className="btn">24</button>
                  <button className="btn">25</button>
                </div>
              </div>
              {/* <div className="marked-btn-container">
                <button className="marked tab">Marked for Review</button>
              </div> */}
            </div>
            <div
              className={`${
                sectionOpen
                  ? "question-tab-container question-tab-container-1"
                  : "question-tab-container"
              }`}
            >
              <div className="tab answered">Answered</div>
              <div className=" tab not-answered">Not Answered</div>
              <div className="tab marked">Marked for Review</div>
              <div className="tab not-visited">Not Visited</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
