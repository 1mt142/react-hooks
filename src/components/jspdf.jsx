import React from 'react'
import { Button } from 'reactstrap';
// import AgentLogo from "../../assets/images/upay-logo-style.svg";
import jsPDF from 'jspdf';
function JSPDF() {

    const generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        doc.text(40, 40, 'This is the first title.')
        doc.setPage(1)
        doc.text(20, 60, 'This is the second title.')
        doc.text(20, 100, 'This is the thiRd title.')
        doc.setFontSize(40);
        doc.text("Octonyan loves jsPDF", 35, 25);
        // doc.addImage({ AgentLogo }, "SVG", 15, 40, 180, 180);

        doc.save('demo.pdf')
    }
    return (
        <div>
            <Button className="btn btn-info" onClick={generatePDF} type="primary">Download PDF</Button>
        </div>
    )
}

export default JSPDF
