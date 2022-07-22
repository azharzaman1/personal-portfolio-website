import { AccessTime } from "@material-ui/icons";
import React from "react";
import Heading from "../Generic/Theme/Heading";
import Text from "../Generic/Theme/Text";

const BlogPost = ({ data }) => {
  return (
    <div className="blog-post bg-backgroundContrast border-t-4 border-secondary rounded pb-4">
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <div className="blog-post-banner relative cursor-pointer">
          <img src={data.banner} alt={data.title} />
        </div>
      </a>

      <div className="mt-2 blog-post-body px-4">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <Heading type="secondary" className="font-medium">
            {data.title}
          </Heading>
        </a>
        <div className="blog-post-info flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span>
              <AccessTime className="!text-textDim !w-5" />
            </span>
            <span className="text-textDim text-xs sm:text-sm ml-1.5">
              {data.publishedAt}
            </span>
          </div>
          <div className="blog-post-tags flex items-center">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm mx-0.5 sm:mx-1 md:mx-1.5 text-textDim"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <Text>{data.excerpt}</Text>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
