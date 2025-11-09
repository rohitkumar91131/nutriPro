// "use client";

// import React from "react";
// import { jsPDF } from "jspdf";
// import autoTable from "jspdf-autotable"; 
// import { Button } from "@/components/ui/button";
// import { useDashboardContext } from "../../context/Dashboard/DashboardContext";

// export default function TableToPdf() {

//     const { tableArrayData } = useDashboardContext();
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text("🍱 Food Summary Report", 14, 20);

//     const headers = [["Food Name", "Quantity", "Calories", "Price", "Notes", "AI Rate"]];
//     const data = tableArrayData.map(item => [
//       item.foodName,
//       item.quantity,
//       item.calories,
//       item.price,
//       item.notes,
//       item.aiRate
//     ]);

//     autoTable(doc, {
//       head: headers,
//       body: data,
//       startY: 30,
//       styles: { halign: "center", valign: "middle", fontSize: 11 },
//       headStyles: { fillColor: [255, 165, 0], textColor: 255, fontStyle: "bold" },
//       alternateRowStyles: { fillColor: [255, 245, 230] },
//       margin: { top: 30 },
//     });

//     doc.save("Food_Summary.pdf");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
//       <h1 className="text-2xl font-semibold text-orange-700">
//         Export Food Data to PDF
//       </h1>
//       <Button
//         onClick={generatePDF}
//         className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
//       >
//         Download PDF
//       </Button>
//     </div>
//   );
// }
