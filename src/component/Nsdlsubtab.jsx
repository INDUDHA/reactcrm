import React from 'react';

const NSDLSubTabs = ({ activeNsdlSubTab, setActiveNsdlSubTab }) => {
  const tabs = [
    { id: "moneyAdded", label: "Money Added" },
    { id: "instakits", label: "NSDL Instakits" },
    { id: "allocation", label: "Allocation Table" },
    { id: "assignPB", label: "Assign PB Instakits" },
    { id: "account", label: "Account Statement" },
    { id: "invoice", label: "Generate Invoice" },
    { id: "summary", label: "Allocation Summary" },
  ];

  return (
    <div className="flex flex-wrap gap-1 px-1 py-0.5 border-b bg-white">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveNsdlSubTab(id)}
          className={`inline-block px-1 py-0.25 text-[7px] rounded min-w-max ${
            activeNsdlSubTab === id
              ? "bg-black text-white font-semibold"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          title={label}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default NSDLSubTabs;
