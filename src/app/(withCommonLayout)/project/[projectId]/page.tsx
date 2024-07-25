"use client";

import SkeletonDetail from "@/Components/FrontPage/Skeleton";
import { Button, Chip } from "@nextui-org/react";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  details: string;
  clientCode: string;
  serverCode?: string;
  live: string;
  technologies: string[];
  allImage: { id: number; img: string }[];
}

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const projectId = parseInt(params.projectId, 10);
  const [data, setData] = useState<Project[]>([]);
  const [details, setDetails] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await fetch("/project.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Project[] = await res.json();
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (data && projectId) {
      const detailData = data.find((item) => item.id === projectId);
      setDetails(detailData || null);
    }
  }, [data, projectId]);

  if (loading || !details) {
    return <SkeletonDetail />;
  }

  return (
    <div>
      <div className="md:px-24 px-8 space-y-5 py-12 bg-white dark:bg-slate-800">
        <div className="grid md:grid-cols-3 w-full gap-5 pt-8">
          {details.allImage.map((item, index) => (
            <div key={item.id} className="relative h-64">
              <Image
                className="object-cover w-full h-full"
                src={item.img}
                alt={`Image ${index + 1} of ${details.name}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </div>
        <h1 className="fontPop text-2xl text-[#009975] font-medium">
          {details.name}
        </h1>
        <div className="flex flex-wrap gap-2">
          <a
            href={details.clientCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className=" bg-[#009975] text-white">
              Client Code
            </Button>
          </a>
          {details.serverCode && (
            <a
              href={details.serverCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className=" bg-[#009975] text-white">
                Server Code
              </Button>
            </a>
          )}
          <a href={details.live} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className=" bg-[#009975] text-white">
              Live Link
            </Button>
          </a>
        </div>
        <p className="fontPop text-lg">{details.details}</p>
        <div className="flex flex-wrap gap-3 sm:gap-2 md:gap-3">
          <h1 className="fontPop text-xl font-semibold">Technology: </h1>
          {details.technologies.map((tech, index) => (
            <Chip key={index} color="primary" className="rounded-full">
              {tech}
            </Chip>
          ))}
        </div>
        <div>
          <Link href="/">
            <Button
              startContent={<Home size={15} />}
              className="w-[130px] bg-[#009975] text-white"
              size="sm"
            >
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
