import React from "react";
import Heading from "../Generic/Theme/Heading";
import LayoutContainer from "../Layout/LayoutContainer";
import SectionLayout from "../Layout/SectionLayout";
import { posts } from "../_files/__blogPosts";
import BlogPost from "./BlogPost";
// import { ReactComponent as ExternalLinkIcon } from "../_files/assets/extlink.svg";
import { Launch } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

const Blog = () => {
  return (
    <SectionLayout className={`iCanCreateSection`}>
      <LayoutContainer maxWidth="lg">
        <Heading type="section" className="flex">
          <span>Latest from my</span>
          <a
            href="https://medium.com/@idrazhar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-1"
          >
            Blog
            <span className="ml-1">
              <Tooltip title="Visit my blog">
                <Launch />
              </Tooltip>
            </span>
          </a>
        </Heading>
        <div id="blog-section-scroll-anchor" />
        <main className="mt-4 blog-posts grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <BlogPost key={i} data={post} />
          ))}
        </main>
      </LayoutContainer>
    </SectionLayout>
  );
};

export default Blog;
