import React from "react";

function ModuleMainInfo(props) {
  return (
    <div className="col-md-6 module-detail-container">
      <h1 className="module-detail-title">{props.modName}</h1>
      <h4>Synopsis</h4>
      <p className="module-detail-desc text-body">{props.modDesc}</p>

      <h4>Topics</h4>
      <ul className="topic-list">
        {props.modTopics.map((topic) => {
          return (
            <li key={topic.id} className="topic-item text-body">
              {topic.topicName}
            </li>
          );
        })}
      </ul>

      <h4>Learning Outcomes</h4>
      <ul className="lo-list">
        {props.modOutcomes.map((outcome) => {
          return (
            <li key={outcome.id} className="lo-item text-body">
              {outcome.outcomeName}
            </li>
          );
        })}
      </ul>

      <h4>Textbook</h4>
      <p className="text-body">{props.modTextbook}</p>

      <button className="btn secondary-btn btn-vr-icon">
        <i className="fas fa-download icon"></i>
        Download PDF
      </button>
    </div>
  );
}

export default ModuleMainInfo;
