import DataTables from "./components/DataTables";
import InfiniteScroll from "./components/InfiniteScroll";
import Lotti from "./components/Lotti";
import PdfPage from "./components/PdfPage";
import Stopwatch from "./components/Refs";
import StyleComponent from "./components/StyleComponent";
import TsParticles from "./components/TsParticles";

const routes = [
  {
    name: "Home",
    components: <TsParticles />,
    url: `/home`,
  },
  {
    name: "Table",
    components: <DataTables />,
    url: `/data-tables`,
    // child: [
    //   {
    //     name: "Sub-Table",
    //     components: <DataTables />,
    //     url: `/x1`,
    //   },
    //   {
    //     name: "Sub-Child",
    //     components: <Lotti />,
    //     url: `/x2`,
    //   },
    // ],
  },
  {
    name: "LT",
    components: <Lotti />,
    url: `/lotti`,
  },
  {
    name: "Stopwatch",
    components: <Stopwatch />,
    url: `/stopwatch`,
  },
  {
    name: "PDF",
    components: <PdfPage />,
    url: `/pdf`,
  },
  {
    name: "Photos",
    components: <InfiniteScroll />,
    url: `/photos`,
  },
  {
    name: "Style",
    components: <StyleComponent />,
    url: `/style`,
  },
];
export default routes;
