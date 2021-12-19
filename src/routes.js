import DataTables from "./components/DataTables";
import Lotti from "./components/Lotti";
import PdfPage from "./components/PdfPage";
import Stopwatch from "./components/Refs";
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
];
export default routes;
