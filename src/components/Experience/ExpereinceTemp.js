import React from "react";

const ExpereinceTemp = ({
  specific_experience_container_class,
  specific_experience_top_space_class,
  specific_experience_bottom_space_class,
  specific_experience_point_1_class,
  specific_experience_point_2_class,
  post,
  industory,
  industory_link,
  time_duration,
  point_1,
  point_2,
  no_Need_Point_2,
}) => {
  return (
    <div>
      <div
        className={`Output-experience-box-content-container ${specific_experience_container_class}`}
      >
        <div
          className={`Experience-output-top-space-wrapper ${specific_experience_top_space_class}`}
          id="Top-space"
        >
          <h2 className="Post">
            {post}
            <a href={industory_link} className="Industory">
              {industory}
            </a>
          </h2>
          <h3 className="Time-duration"> {time_duration} </h3>
        </div>
        <div
          className={`Experience-output-lower-space-wrapper ${specific_experience_bottom_space_class}`}
          id="Lower-space"
        >
          <h3
            className={`Lower-space-point ${specific_experience_point_1_class}`}
          >
            <span className="Arrow"> ➤ </span>
            {point_1}
          </h3>
          <h3
            className={`Lower-space-point ${specific_experience_point_2_class} ${
              no_Need_Point_2 && "no__need__point2"
            } `}
          >
            <span className="Arrow"> ➤ </span>
            {point_2}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ExpereinceTemp;
