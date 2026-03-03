import Image from "next/image";

interface TechItem {
  name: string;
  iconUrl: string;
}

const TECH_STACK: TechItem[] = [
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Bash", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "TensorFlow", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenCV", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Matplotlib", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Tableau", iconUrl: "https://img.icons8.com/color/96/tableau-software.png" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "ROS", iconUrl: "https://www.vectorlogo.zone/logos/ros/ros-icon.svg" },
  { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Kubernetes", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", iconUrl: "https://img.icons8.com/color/96/amazon-web-services.png" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Apache Spark", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

export function TechStackSection() {
  return (
    <section className="relative overflow-hidden" aria-label="Technology stack">
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-14">
          Stacks That Make It{" "}
          <span
            className="inline-block px-4 py-1 rounded-lg text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--color-purple-from), var(--color-purple-to))",
              boxShadow:
                "0 0 24px var(--color-purple-glow), 0 0 48px var(--color-purple-glow)",
            }}
          >
            Happen
          </span>
        </h2>

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-y-8 gap-x-4 justify-items-center">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg transition-shadow duration-200 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                <Image
                  src={tech.iconUrl}
                  alt={`${tech.name} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  unoptimized
                />
              </div>
              <span className="text-xs text-[#a3a3a3] text-center leading-tight transition-colors duration-200 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
