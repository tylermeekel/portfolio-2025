import { useState } from "react";
import { motion } from "motion/react";
import { Content } from "./content";

function App() {
  const TAB = {
    NONE: 0,
    GPU: 1,
    CPU: 2,
  };

  const [selectedTab, setSelectedTab] = useState(TAB.NONE);
  const [tabContent, setTabContent] = useState<(string | null)[]>([null, null]);

  const [gpuSize, setGPUSize] = useState("w-1/3");
  const [cpuSize, setCPUSize] = useState("w-1/3");
  const [middleSize, setMiddleSize] = useState("w-1/3");

  function setGPU() {
    setSelectedTab(TAB.GPU);
    setGPUSize("w-2/3");
    setCPUSize("w-1/6");
    setMiddleSize("w-1/6");
    clearContent();
  }

  function setCPU() {
    setSelectedTab(TAB.CPU);
    setCPUSize("w-2/3");
    setGPUSize("w-1/6");
    setMiddleSize("w-1/6");
    clearContent();
  }

  function setNone() {
    setSelectedTab(TAB.NONE);
    setCPUSize("w-1/3");
    setGPUSize("w-1/3");
    setMiddleSize("w-1/3");
    clearContent();
  }

  function setGrassContent() {
    setTabContent(Content.grassContent);
  }

  function setOdinRendererContent() {
    setTabContent(Content.odinRendererContent);
  }

  function setZigGPUContent() {
    setTabContent(Content.zigEngineGPUContent);
  }

  function setZigCPUContent() {
    setTabContent(Content.zigEngineCPUContent);
  }

  function setGoNoteContent() {
    setTabContent(Content.goNoteContent);
  }

  function setGleamValidationContent() {
    setTabContent(Content.gleamValidationContent);
  }

  function clearContent() {
    setTabContent([null, null]);
  }

  return (
    <>
      <div className="h-screen bg-linear-to-tr from-green-300 to-teal-600 flex">
        <motion.div layout className={gpuSize} transition={{ duration: 0.3 }}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            {selectedTab === TAB.GPU ? (
              <div className="w-full h-full items-center">
                <div className="h-2/5">
                  {tabContent[0] !== null && (
                    <div className="h-full flex items-center justify-center">
                      <video
                        autoPlay
                        controls
                        src={tabContent[0]}
                        className="h-10/12 aspect-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-10 h-1/5 justify-center items-center">
                  <motion.button
                    className="text-3xl text-teal-800 hover:text-teal-600 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0 }}
                    onClick={setOdinRendererContent}
                  >
                    Odin 3D Renderer
                  </motion.button>
                  <motion.button
                    className="text-3xl text-teal-800 hover:text-teal-600 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.2 }}
                    onClick={setGrassContent}
                  >
                    Godot Grass Simulation
                  </motion.button>
                  <motion.button
                    className="text-3xl text-teal-800 hover:text-teal-600 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.4 }}
                    onClick={setZigGPUContent}
                  >
                    Zig Game Engine
                  </motion.button>
                </div>
                <div className=" h-2/5 flex justify-center">
                  {tabContent[1] !== null && (
                    <p className="w-1/2 text-2xl">{tabContent[1]}</p>
                  )}
                </div>
              </div>
            ) : (
              <motion.h1
                className="text-5xl text-teal-800 cursor-pointer"
                onClick={setGPU}
                whileHover={{ scale: 1.5 }}
              >
                GPU
              </motion.h1>
            )}
          </div>
        </motion.div>
        <motion.div
          layout
          className={middleSize}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full items-center justify-center flex flex-col text-nowrap">
            <motion.h1
              className=" cursor-pointer"
              animate={{
                fontSize: selectedTab === TAB.NONE ? "100px" : "30px",
              }}
              transition={{ duration: 0.7 }}
              onClick={setNone}
            >
              Tyler Meekel
            </motion.h1>
            <motion.h2
              className="font-regular"
              animate={{ fontSize: selectedTab === TAB.NONE ? "50px" : "20px" }}
              transition={{ duration: 0.5 }}
            >
              Software Developer
            </motion.h2>
            <motion.h3
              className="font-regular italic"
              animate={{ fontSize: selectedTab === TAB.NONE ? "30px" : "10px" }}
              transition={{ duration: 0.5 }}
            >
              <span>
                <a target="_blank" href="https://github.com/tylermeekel">
                  GitHub
                </a>
              </span>{" "}
              -{" "}
              <span>
                <a target="_blank" href="https://medium.com/@ty.meekel">
                  Blog
                </a>
              </span>{" "}
              -{" "}
              <span>
                <a href="mailto:ty.meekel@gmail.com">Email</a>
              </span>
            </motion.h3>
          </div>
        </motion.div>
        <motion.div layout className={cpuSize} transition={{ duration: 0.3 }}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            {selectedTab === TAB.CPU ? (
              <div className="w-full h-full items-center">
                <div className="h-2/5">
                  {tabContent[0] !== null && (
                    <div className="h-full flex items-center justify-center">
                      <video
                        autoPlay
                        controls
                        src={tabContent[0]}
                        className="h-10/12 aspect-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="flex gap-10 h-1/5 justify-center items-center">
                  <motion.button
                    className="text-3xl text-teal-800 hover:text-teal-600 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.4 }}
                    onClick={setZigCPUContent}
                  >
                    Zig Game Engine
                  </motion.button>
                  <motion.button
                    className="text-3xl text-teal-800 hover:text-teal-600 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.2 }}
                    onClick={setGoNoteContent}
                  >
                    Go Notetaking Application
                  </motion.button>
                  <motion.button
                    className="text-3xl text-teal-800 hover:text-teal-600 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.0 }}
                    onClick={setGleamValidationContent}
                  >
                    Gleam Data Validation Library
                  </motion.button>
                </div>
                <div className=" h-2/5 flex justify-center">
                  {tabContent[1] !== null && (
                    <p className="w-1/2 text-2xl">{tabContent[1]}</p>
                  )}
                </div>
              </div>
            ) : (
              <motion.h1
                className="text-5xl text-green-300 cursor-pointer"
                onClick={setCPU}
                whileHover={{ scale: 1.5 }}
              >
                CPU
              </motion.h1>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
