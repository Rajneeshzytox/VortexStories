import { useState, useEffect } from "react";
// Icons for sidebar
import { Home, Menu, Dog, Cat, Bird, Angry, Annoyed, Atom, AudioLines,  } from "lucide-react";

const sidebarOption = [
  {
    id: "Home",
    icon: <Home size="22" />,
    text: "Home",
    url: "",
  },
  {
    id: "Dog",
    icon: <Dog size="22" />,
    text: "Dog",
    url: "",
  },
  {
    id: "Cat",
    icon: <Cat size="22" />,
    text: "Cat",
    url: "",
  },
  {
    id: "Bird",
    icon: <Bird size="22" />,
    text: "Bird",
    url: "",
  },
  {
    id: "Angry",
    icon: <Angry size="22" />,
    text: "Angry",
    url: "",
  },
  {
    id: "Annoyed",
    icon: <Annoyed size="22" />,
    text: "Annoyed",
    url: "",
  },
  {
    id: "Atom",
    icon: <Atom size="22" />,
    text: "Atom",
    url: "",
  },
  {
    id: "AudioLines",
    icon: <AudioLines size="22" />,
    text: "AudioLines",
    url: "",
  },
];

// Main Sidebar
export default function Sidebar() {
  // general style variable to change/ toggle
  const smallSidebarStyle = "w-20 *:justify-center *:text-xs *:gap-2";
  const bigSidebarStyle = "w-52 *:justify-start *:text-sm *:gap-5";
  const showSidebar = "translate-x-0 pointer-events-auto opacity-1";
  const hideSidebar = "-translate-x-full pointer-events-none opacity-0";

  // Store screen size
  const [screenSize, setScreenSize] = useState("");

  //   Current Sidebar show/hide Style, it will change
  const [SidebarStyle, setSidebarStyle] = useState(hideSidebar);

  //  Toggle width on larger screen
  const [sidebarWidth, setSidebarWidth] = useState(bigSidebarStyle);

  // toggle to show icon text
  const [iconTextToggle, setIconTextToggle] = useState("true");

  // Function to handel screen size function
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 1024 && width >= 767) {
      // if screen is greater than the 767 than show sidebar by default and width as 16
      setScreenSize("big");
      setSidebarWidth(smallSidebarStyle);
      setSidebarStyle(showSidebar);
      setIconTextToggle(false)
    } else if (width >= 1024) {
      // if screen is greater than the 1024 than show sidebar by default and width as 52
      setScreenSize("big");
      setSidebarWidth(bigSidebarStyle);
      setSidebarStyle(showSidebar);
      setIconTextToggle(true)
    } else {
      // if screen is small than the 767 than hide sidebar by default and width as 52
      setScreenSize("small");
      setSidebarStyle(hideSidebar);
      setSidebarWidth(bigSidebarStyle);
      setIconTextToggle(true)
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   function to change style of sidebar to show
  function openSide() {
    if (screenSize === "big") {
      // console.log("Hello big");
      const sideWidth =
        sidebarWidth === bigSidebarStyle ? smallSidebarStyle : bigSidebarStyle;
      setSidebarWidth((old) => sideWidth);
      setIconTextToggle(old => !old)
    } else {
      // console.log("Hello small");
      const setSidebar =
        SidebarStyle === hideSidebar ? showSidebar : hideSidebar;
      // setting styele toggle
      setSidebarStyle((old) => setSidebar);
    }
  }

  //############# Link Buttons Component ##############
  function NavLink({ data }) {
    const activeIcon = "";
    return (
      <a
        
        href={data.url}
        className={`btn rounded-md w-full flex  py-2 flex-row h-fit shadow-none ${activeIcon}`}
      >
        {data.icon}
        {iconTextToggle && (
          <div className="iconText font-bold">{data.text}</div>
        )}
      </a>
    );
  }

  return (
    <>
      <aside
        className={`sidebar max-52 bg-base-200 h-screen transition-all px-2 pt-20 fixed md:sticky top-20 left-0 ${SidebarStyle} ${sidebarWidth}`}
      >
        {sidebarOption.map((data) => (
          // i know i have to add key....
          <NavLink data={data} />
        ))}
      </aside>

      {/* toggle btn to open/close or size +/- */}
      <button
        className="z-40 btn btn-ghost btn-circle btn-md fixed left-0 m-4"
        onClick={openSide}
      >
        <Menu size={22} />
      </button>
    </>
  );
}
