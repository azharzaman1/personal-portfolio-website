import React from "react";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { ViewCarouselOutlined, GitHub } from "@material-ui/icons";
import { Launch } from "@material-ui/icons";
import Spacer from "../Generic/Spacer";
import Heading from "../Generic/Theme/Heading";
import Text from "../Generic/Theme/Text";
import "./RecentWork.css";

const ProjectCard = ({
  project,
  enableGallery,
  disabledHeader,
  className,
  ...rest
}) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} {...rest}>
        <Card
          className={`recentWork__Card flex flex-col justify-start min-h-[350px] pt-4 px-4 ${className}`}
        >
          {!disabledHeader && (
            <Grid
              container
              className="pt-2 pb-0 px-4 max-h-[52px] flex items-center justify-between"
              justifyContent="space-between"
            >
              <Grid item>
                <img
                  src={project.logo}
                  alt={project.logoAlt}
                  className={project.logoClasses}
                />
              </Grid>
              <Grid
                item
                xs
                container
                justifyContent="flex-end"
                style={{ transform: "translateY(-8px)" }}
              >
                <Grid item>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <IconButton>
                        <GitHub
                          className="text-[#e2e2e29d] text-opacity-90"
                          fontSize="small"
                        />
                      </IconButton>
                    </a>
                  )}

                  {enableGallery && (
                    <IconButton>
                      <ViewCarouselOutlined
                        className="text-[#e2e2e29d] text-opacity-90"
                        fontSize="medium"
                      />
                    </IconButton>
                  )}

                  {project.src && (
                    <a href={project.src} target="_blank" rel="noreferrer">
                      <IconButton>
                        <Launch className="!text-[#e2e2e29d]" />
                      </IconButton>
                    </a>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}

          <CardContent className="px-3 mt-2 border-t border-t-[#1456ad]">
            <Heading type="secondary">{project.title}</Heading>
            <Text className="mt-4">{project.desc}</Text>
          </CardContent>
          {project.techsLogos ? (
            <Grid
              container
              justifyContent="flex-start"
              alignItems="center"
              className="px-4 pb-3 mt-auto font-code border-t border-t-[#1456ad] space-x-2.5"
            >
              {project.techsLogos.map((tech, i) => (
                <Grid item key={Math.random() * i}>
                  <div className="h-5 flex items-center justify-center mt-3 cursor-pointer">
                    <Tooltip title={tech?.title} placement="top" arrow>
                      <img src={tech.Logo} alt="." className="w-5" />
                    </Tooltip>
                  </div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Spacer height="8px" />
          )}
        </Card>
      </Grid>
    </>
  );
};

export default ProjectCard;
