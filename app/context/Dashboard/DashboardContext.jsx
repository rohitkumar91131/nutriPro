"use client";

import { createContext, useContext } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const DashboardContext = createContext();

const DashBoardProvider = ({ children }) => {
  // ✅ PDF Export
  const generatePDF = (data) => {
    if (!data || data.length === 0) {
      alert("No data available to generate PDF.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("🍱 Food Summary Report", 14, 20);

    const headers = [
      ["Food Name", "Quantity", "Calories", "Price", "Notes", "AI Rate"],
    ];

    const formattedData = data.map((item) => [
      item.foodName,
      item.quantity,
      item.calories,
      item.price,
      item.notes,
      item.aiRate,
    ]);

    autoTable(doc, {
      head: headers,
      body: formattedData,
      startY: 30,
      styles: { halign: "center", valign: "middle", fontSize: 11 },
      headStyles: {
        fillColor: [255, 165, 0],
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: [255, 245, 230] },
    });

    doc.save("Food_Summary.pdf");
  };

  // ✅ Excel Export (using xlsx + file-saver)
  const generateExcel = (data) => {
    if (!data || data.length === 0) {
      alert("No data available to generate Excel.");
      return;
    }

    // Convert to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Food_Summary");

    // Generate binary excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save file
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "Food_Summary.xlsx");
  };

  // ✅ Native CSV Export (no dependencies)
  const generateCsv = (data) => {
    if (!data || data.length === 0) {
      alert("No data available to generate CSV.");
      return;
    }

    const headers = [
      "Food Name",
      "Quantity",
      "Calories",
      "Price",
      "Notes",
      "AI Rate",
    ];

    const csvRows = [
      headers.join(","),
      ...data.map((item) =>
        [
          item.foodName,
          item.quantity,
          item.calories,
          item.price,
          item.notes,
          item.aiRate,
        ]
          .map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`)
          .join(",")
      ),
    ];

    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Food_Summary.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardContext.Provider
      value={{ generatePDF, generateExcel, generateCsv }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error(
      "useDashboardContext must be used within a DashBoardProvider"
    );
  return context;
};

export { DashboardContext, DashBoardProvider, useDashboardContext };
