import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Content } from "./content";
import ContentDialog from "./ContentDialog";

function MobileApp() {
  const TAB = {
    NONE: 0,
    GPU: 1,
    CPU: 2,
  };

  const [hasChangedTab, setHasChangedTab] = useState(false);

  const [selectedTab, setSelectedTab] = useState(TAB.NONE);
  const [tabContent, setTabContentState] = useState<(string | null)[]>([
    "hi",
    "dfg",
  ]);

  const [gpuSize, setGPUSize] = useState("h-1/3");
  const [cpuSize, setCPUSize] = useState("h-1/3");
  const [middleSize, setMiddleSize] = useState("h-1/3");

  function setGPU() {
    setSelectedTab(TAB.GPU);
    setGPUSize("h-2/3");
    setCPUSize("h-1/6");
    setMiddleSize("h-1/6");
    clearContent();
    setHasChangedTab(true);
  }

  function setCPU() {
    setSelectedTab(TAB.CPU);
    setCPUSize("h-2/3");
    setGPUSize("h-1/6");
    setMiddleSize("h-1/6");
    clearContent();
    setHasChangedTab(true);
  }

  function setNone() {
    setSelectedTab(TAB.NONE);
    setCPUSize("h-1/3");
    setGPUSize("h-1/3");
    setMiddleSize("h-1/3");
    clearContent();
  }

  function setTabContent(content: (string | null)[]) {
    setTabContentState(content);
    toggleDialog();
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
    setTabContentState([null, null]);
  }

  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <div className="h-screen bg-linear-to-tr from-green-300 to-teal-600 flex flex-col">
        <motion.div layout className={gpuSize} transition={{ duration: 0.3 }}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            {selectedTab === TAB.GPU ? (
              <div className="w-full h-full items-center justify-center">
                <div className="flex flex-col gap-5 h-full justify-center items-center">
                  <motion.button
                    className="text-lg text-green-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0 }}
                    onClick={setOdinRendererContent}
                  >
                    Odin 3D Renderer
                  </motion.button>
                  <motion.button
                    className="text-lg text-green-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.2 }}
                    onClick={setGrassContent}
                  >
                    Godot Grass Simulation
                  </motion.button>
                  <motion.button
                    className="text-lg text-green-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.4 }}
                    onClick={setZigGPUContent}
                  >
                    Zig Game Engine
                  </motion.button>
                </div>
              </div>
            ) : (
              <motion.h1
                className="text-5xl text-green-300 cursor-pointer"
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
          <div className="text-teal-950 w-full h-full items-center justify-center flex flex-col text-nowrap">
            <motion.h1
              className=" cursor-pointer"
              animate={{
                fontSize: selectedTab === TAB.NONE ? "50px" : "30px",
              }}
              transition={{ duration: 0.7 }}
              onClick={setNone}
            >
              Tyler Meekel
            </motion.h1>
            <motion.h2
              className="font-regular"
              animate={{ fontSize: selectedTab === TAB.NONE ? "20px" : "15px" }}
              transition={{ duration: 0.5 }}
            >
              Software Developer
            </motion.h2>
            <motion.h3
              className="font-regular"
              animate={{ fontSize: selectedTab === TAB.NONE ? "15px" : "10px" }}
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
            {!hasChangedTab && (
              <h4 className="text-md italic">(tap CPU or GPU to explore)</h4>
            )}
          </div>
        </motion.div>
        <motion.div layout className={cpuSize} transition={{ duration: 0.3 }}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            {selectedTab === TAB.CPU ? (
              <div className="w-full h-full items-center">
                <div className="pt-5 flex flex-col gap-5 h-full justify-center items-center">
                  <motion.button
                    className="text-lg text-teal-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.4 }}
                    onClick={setZigCPUContent}
                  >
                    Zig Game Engine
                  </motion.button>
                  <motion.button
                    className="text-lg text-teal-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.2 }}
                    onClick={setGoNoteContent}
                  >
                    Go Notetaking Application
                  </motion.button>
                  <motion.button
                    className="text-lg text-teal-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.0 }}
                    transition={{ delay: 0.0 }}
                    onClick={setGleamValidationContent}
                  >
                    Gleam Data Validation Library
                  </motion.button>
                </div>
              </div>
            ) : (
              <motion.h1
                className="text-5xl text-teal-800 cursor-pointer"
                onClick={setCPU}
                whileHover={{ scale: 1.5 }}
              >
                CPU
              </motion.h1>
            )}
          </div>
        </motion.div>
      </div>
      <ContentDialog
        videoURL={tabContent[0]}
        textContent={tabContent[1]}
        toggleDialog={toggleDialog}
        ref={dialogRef}
      />
    </>
  );
}

export default MobileApp;
