import DataTables from "./components/DataTables";
import Lotti from "./components/Lotti";
import PdfPage from "./components/PdfPage";
import Stopwatch from "./components/Refs";

const routes = [
  {
    name: "Table",
    components: <DataTables />,
    url: `/data-tables`,
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
