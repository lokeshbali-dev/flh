// // import React, { useState, useMemo } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import {
// //   FaEye,
// //   FaEdit,
// //   FaToggleOn,
// //   FaToggleOff,
// //   FaCheck,
// //   FaTimes,
// //   FaPlus,
// //   FaSearch,
// //   FaArrowLeft,
// //   FaBox,
// //   FaShoppingBag
// // } from "react-icons/fa";

// // const initialVendors = [
// //   {
// //     id: 6,
// //     firstName: "Sai",
// //     lastName: "M",
// //     vendorName: "sai",
// //     phone: "2293781964",
// //     personalEmail: "ds@hdm.com",
// //     vendorEmail: "ds@hdm.com",
// //     gst: "xhhhnd",
// //     status: "Approved",
// //     approved: true,
// //     location: "Visakhapatnam, Andhra Pradesh",
// //     services: ["Grocery", "Electronics"],
// //     address: "na",
// //     orders: [],
// //     products: [
// //       { id: 1, name: "Rice 5kg", category: "Grocery", price: 450, stock: 120, sold: 45 },
// //       { id: 2, name: "Lentils 1kg", category: "Grocery", price: 120, stock: 80, sold: 25 },
// //       { id: 3, name: "Smartphone", category: "Electronics", price: 15000, stock: 15, sold: 8 }
// //     ]
// //   },
// //   {
// //     id: 5,
// //     firstName: "vendor",
// //     lastName: "verrappan",
// //     vendorName: "vendor11",
// //     phone: "9878975537",
// //     personalEmail: "admin.flh@gmail.com",
// //     vendorEmail: "admin.flh@gmail.com",
// //     gst: "Ap9868754989275",
// //     status: "Approved",
// //     approved: true,
// //     location: "Chennai, Tamil Nadu",
// //     services: ["Electronics", "Furniture", "Home Appliances"],
// //     address: "addr 5",
// //     orders: [
// //       { id: "ORD-1001", date: "2025-10-05", amount: 1200, status: "Delivered" },
// //       { id: "ORD-1002", date: "2025-10-09", amount: 560, status: "In Progress" },
// //     ],
// //     products: [
// //       { id: 1, name: "Sofa Set", category: "Furniture", price: 25000, stock: 8, sold: 3 },
// //       { id: 2, name: "LED TV", category: "Electronics", price: 35000, stock: 12, sold: 7 },
// //       { id: 3, name: "Washing Machine", category: "Home Appliances", price: 18000, stock: 6, sold: 4 }
// //     ]
// //   },
// //   {
// //     id: 4,
// //     firstName: "Madhu",
// //     lastName: "Vendor",
// //     vendorName: "Madhu-Vendor",
// //     phone: "9879879879",
// //     personalEmail: "madhu@yopmail.com",
// //     vendorEmail: "madhu@yopmail.com",
// //     gst: "M123456",
// //     status: "Approved",
// //     approved: true,
// //     location: "Hyderabad, Telangana",
// //     services: ["Grocery", "Home Appliances"],
// //     address: "addr 4",
// //     orders: [{ id: "ORD-1003", date: "2025-10-10", amount: 120, status: "Cancelled" }],
// //     products: [
// //       { id: 1, name: "Wheat Flour", category: "Grocery", price: 80, stock: 200, sold: 85 },
// //       { id: 2, name: "Refrigerator", category: "Home Appliances", price: 22000, stock: 10, sold: 6 }
// //     ]
// //   }
// // ];

// // export default function VendorPage() {
// //   const [vendors, setVendors] = useState(initialVendors);
// //   const [query, setQuery] = useState("");
// //   const [selectedVendor, setSelectedVendor] = useState(null);
// //   const [showOrdersFor, setShowOrdersFor] = useState(null);
// //   const [showEditModal, setShowEditModal] = useState(false);
// //   const [showAddModal, setShowAddModal] = useState(false);
// //   const [showConfirm, setShowConfirm] = useState(false);
// //   const [confirmType, setConfirmType] = useState("");
// //   const [approveFlowFor, setApproveFlowFor] = useState(null);
// //   const [editingVendor, setEditingVendor] = useState(null);
// //   const [searchResult, setSearchResult] = useState(null);
// //   const [notFound, setNotFound] = useState(false);
// //   const [showProductsFor, setShowProductsFor] = useState(null);

// //   // Filtering logic for search bar
// //   const filteredVendors = useMemo(() => {
// //     const q = query.trim().toLowerCase();
// //     if (!q) return vendors;
// //     return vendors.filter((v) => {
// //       const fields = [
// //         `${v.firstName} ${v.lastName}`,
// //         v.vendorName,
// //         v.personalEmail,
// //         v.vendorEmail,
// //         v.phone,
// //         v.location,
// //         v.gst,
// //         (v.services || []).join(" "),
// //       ];
// //       return fields.some((f) => f && f.toLowerCase().includes(q));
// //     });
// //   }, [vendors, query]);

// //   // Search functionality like Customer page
// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (!query.trim()) {
// //       setSearchResult(null);
// //       setNotFound(false);
// //       return;
// //     }
// //     const q = query.trim().toLowerCase();
// //     const found = vendors.find((v) => {
// //       const fields = [
// //         `${v.firstName} ${v.lastName}`,
// //         v.vendorName,
// //         v.personalEmail,
// //         v.vendorEmail,
// //         v.phone,
// //         v.location,
// //         v.gst,
// //       ];
// //       return fields.some((f) => f && f.toLowerCase().includes(q));
// //     });
// //     if (found) {
// //       setSearchResult(found);
// //       setNotFound(false);
// //     } else {
// //       setSearchResult(null);
// //       setNotFound(true);
// //     }
// //   };

// //   const handleClearSearch = () => {
// //     setQuery("");
// //     setSearchResult(null);
// //     setNotFound(false);
// //   };

// //   // Toggle activate/deactivate vendor
// //   function toggleActive(vendorId) {
// //     setVendors((prev) =>
// //       prev.map((v) =>
// //         v.id === vendorId
// //           ? {
// //               ...v,
// //               status: v.status === "Deactivated" ? "Approved" : "Deactivated",
// //             }
// //           : v
// //       )
// //     );
// //   }

// //   // Confirm status change
// //   const handleConfirmStatus = (vendor, type) => {
// //     setSelectedVendor(vendor);
// //     setConfirmType(type);
// //     setShowConfirm(true);
// //   };

// //   const handleStatusChange = () => {
// //     setVendors((prev) =>
// //       prev.map((v) =>
// //         v.id === selectedVendor.id
// //           ? {
// //               ...v,
// //               status: confirmType === "activate" ? "Approved" : "Deactivated",
// //               approved: confirmType === "activate"
// //             }
// //           : v
// //       )
// //     );
// //     setShowConfirm(false);
// //   };

// //   // Approve / Disapprove handlers
// //   function openApproveFlow(vendorId) {
// //     setApproveFlowFor(vendorId);
// //   }
// //   function doApprove(vendorId) {
// //     setVendors((prev) =>
// //       prev.map((v) => (v.id === vendorId ? { ...v, approved: true, status: "Approved" } : v))
// //     );
// //     setApproveFlowFor(null);
// //   }
// //   function doDisapprove(vendorId) {
// //     setVendors((prev) =>
// //       prev.map((v) => (v.id === vendorId ? { ...v, approved: false, status: "Disapproved" } : v))
// //     );
// //     setApproveFlowFor(null);
// //   }

// //   // Edit vendor flow
// //   function openEdit(vendor) {
// //     setEditingVendor({ ...vendor });
// //     setShowEditModal(true);
// //   }
// //   function updateEditingField(field, value) {
// //     setEditingVendor((prev) => ({ ...prev, [field]: value }));
// //   }
// //   function saveEdit() {
// //     setVendors((prev) => prev.map((v) => (v.id === editingVendor.id ? editingVendor : v)));
// //     setShowEditModal(false);
// //     setEditingVendor(null);
// //   }

// //   // Add vendor flow
// //   function openAdd() {
// //     setEditingVendor({
// //       id: Math.max(...vendors.map((v) => v.id)) + 1,
// //       firstName: "",
// //       lastName: "",
// //       vendorName: "",
// //       phone: "",
// //       personalEmail: "",
// //       vendorEmail: "",
// //       gst: "",
// //       status: "Pending",
// //       approved: false,
// //       location: "",
// //       services: [],
// //       address: "",
// //       orders: [],
// //       products: []
// //     });
// //     setShowAddModal(true);
// //   }
// //   function saveAdd() {
// //     setVendors((prev) => [editingVendor, ...prev]);
// //     setShowAddModal(false);
// //     setEditingVendor(null);
// //   }

// //   // Orders view
// //   function viewOrders(vendor) {
// //     setShowOrdersFor(vendor);
// //   }

// //   // Products view
// //   function viewProducts(vendor) {
// //     setShowProductsFor(vendor);
// //   }

// //   function backToList() {
// //     setShowOrdersFor(null);
// //     setShowProductsFor(null);
// //   }

// //   // Category badge colors
// //   const getCategoryColor = (category) => {
// //     const colors = {
// //       "Grocery": "success",
// //       "Electronics": "primary",
// //       "Furniture": "warning",
// //       "Home Appliances": "info"
// //     };
// //     return colors[category] || "secondary";
// //   };

// //   return (
// //     <div className="container mt-4">
// //       {/* Back Button for Orders/Products Page */}
// //       {(showOrdersFor || showProductsFor) && (
// //         <div className="d-flex align-items-center mb-3">
// //           <button className="btn btn-outline-secondary me-2" onClick={backToList}>
// //             ← Back
// //           </button>
// //         </div>
// //       )}

// //       {/* Header - Only show when not in orders/products view */}
// //       {!showOrdersFor && !showProductsFor && (
// //         <>
// //           <div className="d-flex align-items-center justify-content-between mb-4">
// //             {/* Title */}
// //             <h3 className="mb-0 text-danger fw-bold">Vendors</h3>

// //             {/* Search Bar - Matching Customer Page */}
// //             <form
// //               className="d-flex align-items-center"
// //               onSubmit={handleSearch}
// //               style={{
// //                 backgroundColor: "white",
// //                 border: "1px solid #ddd",
// //                 borderRadius: "8px",
// //                 overflow: "hidden",
// //                 height: "42px",
// //                 width: "320px",
// //               }}
// //             >
// //               <input
// //                 type="text"
// //                 className="form-control border-0 shadow-none"
// //                 placeholder="Search vendors..."
// //                 value={query}
// //                 onChange={(e) => setQuery(e.target.value)}
// //                 style={{
// //                   flex: 1,
// //                   border: "none",
// //                   boxShadow: "none",
// //                   padding: "8px 12px",
// //                   fontSize: "15px",
// //                 }}
// //               />
// //               <button
// //                 type="submit"
// //                 style={{
// //                   backgroundColor: "#ffc107",
// //                   border: "none",
// //                   width: "45px",
// //                   height: "42px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   cursor: "pointer",
// //                 }}
// //               >
// //                 <FaSearch color="white" size={16} />
// //               </button>
// //             </form>

// //             {/* Add Vendor Button */}
// //             <button
// //               className="btn text-white ms-2"
// //               style={{ backgroundColor: "#b61d23", borderRadius: "6px" }}
// //               onClick={openAdd}
// //             >
// //               <FaPlus style={{ marginRight: "8px" }} />
// //               Add Vendor
// //             </button>
// //           </div>

// //           {/* 🔹 If vendor not found */}
// //           {notFound && (
// //             <div className="card shadow-sm p-4 text-center border-danger">
// //               <h5 className="text-danger fw-bold">No vendor found</h5>
// //               <p className="text-muted">Try searching again with a valid name, email, or phone number.</p>
// //               <button className="btn btn-secondary" onClick={handleClearSearch}>
// //                 Back to List
// //               </button>
// //             </div>
// //           )}

// //           {/* 🔹 Search Result View */}
// //           {searchResult && !notFound ? (
// //             <div className="card shadow-lg p-4" style={{ backgroundColor: "#fff3f3" }}>
// //               <h4 className="text-danger fw-bold mb-3">Vendor Details</h4>
// //               <div className="card-body">
// //                 {/* Basic Info */}
// //                 <h5 className="fw-bold text-secondary mb-3" style={{ color: "#b61d23" }}>Basic Info</h5>
// //                 <div className="row">
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Vendor ID:</strong> {searchResult.id}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Name:</strong> {searchResult.firstName} {searchResult.lastName}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Vendor Name:</strong> {searchResult.vendorName}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Phone:</strong> {searchResult.phone}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Personal Email:</strong> {searchResult.personalEmail}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Vendor Email:</strong> {searchResult.vendorEmail}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Location:</strong> {searchResult.location}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>GST Number:</strong> {searchResult.gst}
// //                   </div>
// //                 </div>

// //                 <hr style={{ borderColor: "#b61d23" }} />

// //                 {/* Activity Info */}
// //                 <h5 className="fw-bold text-secondary mb-3" style={{ color: "#b61d23" }}>Activity Info</h5>
// //                 <div className="row">
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Status:</strong>{" "}
// //                     <span
// //                       className={`badge ${
// //                         searchResult.status === "Approved" ? "bg-success" :
// //                         searchResult.status === "Pending Payment" ? "bg-warning" : "bg-danger"
// //                       }`}
// //                     >
// //                       {searchResult.status}
// //                     </span>
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Product Categories:</strong>
// //                     <div className="mt-1">
// //                       {searchResult.services.map((service, index) => (
// //                         <span key={index} className={`badge bg-${getCategoryColor(service)} me-1 mb-1`}>
// //                           {service}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Total Orders:</strong> {searchResult.orders.length}
// //                   </div>
// //                   <div className="col-md-6 mb-2" style={{ color: "#000" }}>
// //                     <strong style={{ color: "#b61d23" }}>Approval Status:</strong>{" "}
// //                     <span className={`badge ${searchResult.approved ? "bg-success" : "bg-warning"}`}>
// //                       {searchResult.approved ? "Approved" : "Pending"}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Buttons */}
// //                 <div className="mt-4">
// //                   <button
// //                     className="btn btn-warning me-2 text-white"
// //                     style={{ backgroundColor: "#ffc107", border: "none" }}
// //                     onClick={() => openEdit(searchResult)}
// //                   >
// //                     <FaEdit /> Edit
// //                   </button>
// //                   <button
// //                     className="btn btn-primary me-2"
// //                     style={{ backgroundColor: "#b61d23", border: "none" }}
// //                     onClick={() => viewOrders(searchResult)}
// //                   >
// //                     <FaEye /> View Orders
// //                   </button>
// //                   <button
// //                     className="btn btn-info me-2 text-white"
// //                     style={{ backgroundColor: "#17a2b8", border: "none" }}
// //                     onClick={() => viewProducts(searchResult)}
// //                   >
// //                     <FaShoppingBag /> Show Products
// //                   </button>
// //                   {searchResult.status === "Approved" ? (
// //                     <button
// //                       className="btn btn-danger me-2"
// //                       style={{ backgroundColor: "#d32f2f", border: "none" }}
// //                       onClick={() => handleConfirmStatus(searchResult, "deactivate")}
// //                     >
// //                       <FaTimes /> Deactivate
// //                     </button>
// //                   ) : (
// //                     <button
// //                       className="btn btn-success me-2"
// //                       style={{ backgroundColor: "#4caf50", border: "none" }}
// //                       onClick={() => handleConfirmStatus(searchResult, "activate")}
// //                     >
// //                       <FaCheck /> Activate
// //                     </button>
// //                   )}
// //                   <button
// //                     className="btn btn-secondary"
// //                     style={{ backgroundColor: "#6c757d", border: "none" }}
// //                     onClick={handleClearSearch}
// //                   >
// //                     <FaArrowLeft /> Back to List
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : (
// //             !notFound && (
// //               /* 🔹 Default Table View */
// //               <div className="card shadow-sm border-0 rounded-3" style={{ backgroundColor: "#fff3f3" }}>
// //                 <div className="card-body p-0">
// //                   <table className="table table-striped mb-0 align-middle">
// //                     <thead style={{ backgroundColor: "#b61d23", color: "white" }}>
// //                       <tr>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Vendor ID</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Name</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Vendor Name</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Phone Number</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Email</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Location</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Product Categories</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Status</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Actions</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {filteredVendors.map((v) => (
// //                         <tr key={v.id} style={{ backgroundColor: "#fff8f8" }}>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{v.id}</td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{v.firstName} {v.lastName}</td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{v.vendorName}</td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{v.phone}</td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{v.vendorEmail}</td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{v.location}</td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>
// //                             <div>
// //                               {v.services.map((service, index) => (
// //                                 <span key={index} className={`badge bg-${getCategoryColor(service)} me-1 mb-1`}>
// //                                   {service}
// //                                 </span>
// //                               ))}
// //                             </div>
// //                           </td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>
// //                             <span
// //                               className={`badge ${
// //                                 v.status === "Approved" ? "bg-success" :
// //                                 v.status === "Pending Payment" ? "bg-warning" : "bg-danger"
// //                               }`}
// //                             >
// //                               {v.status}
// //                             </span>
// //                           </td>
// //                           <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>
// //                             <div className="d-flex gap-2">
// //                               {/* View Orders */}
// //                               <button
// //                                 className="btn btn-primary btn-sm"
// //                                 style={{ backgroundColor: "#b61d23", border: "none" }}
// //                                 title="View Orders"
// //                                 onClick={() => viewOrders(v)}
// //                               >
// //                                 <FaEye />
// //                               </button>

// //                               {/* View Products */}
// //                               <button
// //                                 className="btn btn-info btn-sm text-white"
// //                                 style={{ backgroundColor: "#17a2b8", border: "none" }}
// //                                 title="View Products"
// //                                 onClick={() => viewProducts(v)}
// //                               >
// //                                 <FaShoppingBag />
// //                               </button>

// //                               {/* Edit */}
// //                               <button
// //                                 className="btn btn-warning btn-sm text-white"
// //                                 style={{ backgroundColor: "#ffc107", border: "none" }}
// //                                 title="Edit Vendor"
// //                                 onClick={() => openEdit(v)}
// //                               >
// //                                 <FaEdit />
// //                               </button>

// //                               {/* Activate / Deactivate */}
// //                               {v.status === "Approved" ? (
// //                                 <button
// //                                   className="btn btn-danger btn-sm"
// //                                   style={{ backgroundColor: "#d32f2f", border: "none" }}
// //                                   onClick={() => handleConfirmStatus(v, "deactivate")}
// //                                 >
// //                                   <FaTimes />
// //                                 </button>
// //                               ) : (
// //                                 <button
// //                                   className="btn btn-success btn-sm"
// //                                   style={{ backgroundColor: "#4caf50", border: "none" }}
// //                                   onClick={() => handleConfirmStatus(v, "activate")}
// //                                 >
// //                                   <FaCheck />
// //                                 </button>
// //                               )}

// //                               {/* Approve / Disapprove flow */}
// //                               <div style={{ position: "relative" }}>
// //                                 <button
// //                                   className="btn btn-secondary btn-sm"
// //                                   style={{ backgroundColor: "#6c757d", border: "none" }}
// //                                   title="Approve / Disapprove"
// //                                   onClick={() => openApproveFlow(v.id)}
// //                                 >
// //                                   <FaCheck />
// //                                 </button>

// //                                 {approveFlowFor === v.id && (
// //                                   <div
// //                                     style={{
// //                                       position: "absolute",
// //                                       right: 0,
// //                                       top: "40px",
// //                                       zIndex: 50,
// //                                       background: "#fff",
// //                                       border: "1px solid #eee",
// //                                       padding: 8,
// //                                       borderRadius: 6,
// //                                       boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
// //                                       width: 200,
// //                                     }}
// //                                   >
// //                                     <div style={{ marginBottom: 8, fontWeight: 700, color: "#000" }}>Choose action</div>
// //                                     <div className="d-flex justify-content-between">
// //                                       <button
// //                                         className="btn btn-success btn-sm"
// //                                         style={{ backgroundColor: "#4caf50", border: "none" }}
// //                                         onClick={() => doApprove(v.id)}
// //                                       >
// //                                         Approve
// //                                       </button>
// //                                       <button
// //                                         className="btn btn-danger btn-sm"
// //                                         style={{ backgroundColor: "#d32f2f", border: "none" }}
// //                                         onClick={() => doDisapprove(v.id)}
// //                                       >
// //                                         Disapprove
// //                                       </button>
// //                                     </div>
// //                                   </div>
// //                                 )}
// //                               </div>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       ))}

// //                       {filteredVendors.length === 0 && (
// //                         <tr>
// //                           <td colSpan={9} className="text-center p-5" style={{ color: "#777" }}>
// //                             No vendors found for "<strong>{query}</strong>"
// //                           </td>
// //                         </tr>
// //                       )}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             )
// //           )}
// //         </>
// //       )}

// //       {/* Orders Page */}
// //       {showOrdersFor && (
// //         <div>
// //           <h3 className="text-danger fw-bold mb-4">Vendor Orders - {showOrdersFor.vendorName}</h3>

// //           {/* Stats card */}
// //           <div className="card mb-4 shadow-sm border-0" style={{ backgroundColor: "#fff3f3" }}>
// //             <div className="card-body">
// //               <div className="row text-center">
// //                 {(() => {
// //                   const total = showOrdersFor.orders.length;
// //                   const delivered = showOrdersFor.orders.filter((o) => o.status === "Delivered").length;
// //                   const inprogress = showOrdersFor.orders.filter((o) => o.status === "In Progress").length;
// //                   const cancelled = showOrdersFor.orders.filter((o) => o.status === "Cancelled" || o.status === "Rejected").length;
                 
// //                   return (
// //                     <>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold" style={{ color: "#b61d23" }}>{total}</div>
// //                         <div className="text-muted">Total Orders</div>
// //                       </div>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold text-success">{delivered}</div>
// //                         <div className="text-muted">Delivered</div>
// //                       </div>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold text-warning">{inprogress}</div>
// //                         <div className="text-muted">In Progress</div>
// //                       </div>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold text-danger">{cancelled}</div>
// //                         <div className="text-muted">Cancelled/Rejected</div>
// //                       </div>
// //                     </>
// //                   );
// //                 })()}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Orders List */}
// //           <div className="card shadow-sm border-0 rounded-3" style={{ backgroundColor: "#fff3f3" }}>
// //             <div className="card-body p-0">
// //               <table className="table table-striped mb-0 align-middle">
// //                 <thead style={{ backgroundColor: "#b61d23", color: "white" }}>
// //                   <tr>
// //                     <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Order ID</th>
// //                     <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Date</th>
// //                     <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Amount</th>
// //                     <th style={{ padding: "12px 15px", fontWeight: "600", border: "none" }}>Status</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {showOrdersFor.orders.length === 0 ? (
// //                     <tr>
// //                       <td colSpan={4} className="text-center p-5">
// //                         <div className="text-muted">
// //                           <h5>No Orders Found</h5>
// //                           <p>This vendor doesn't have any orders yet.</p>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     showOrdersFor.orders.map((o) => (
// //                       <tr key={o.id} style={{ backgroundColor: "#fff8f8" }}>
// //                         <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{o.id}</td>
// //                         <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{o.date}</td>
// //                         <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>₹ {o.amount}</td>
// //                         <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>
// //                           <span className={`badge ${
// //                             o.status === "Delivered" ? "bg-success" :
// //                             o.status === "In Progress" ? "bg-warning" : "bg-danger"
// //                           }`}>
// //                             {o.status}
// //                           </span>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Products Page */}
// //       {showProductsFor && (
// //         <div>
// //           <h3 className="text-danger fw-bold mb-4">Vendor Products - {showProductsFor.vendorName}</h3>

// //           {/* Stats card */}
// //           <div className="card mb-4 shadow-sm border-0" style={{ backgroundColor: "#fff3f3" }}>
// //             <div className="card-body">
// //               <div className="row text-center">
// //                 {(() => {
// //                   const totalProducts = showProductsFor.products?.length || 0;
// //                   const totalStock = showProductsFor.products?.reduce((sum, product) => sum + product.stock, 0) || 0;
// //                   const totalSold = showProductsFor.products?.reduce((sum, product) => sum + product.sold, 0) || 0;
// //                   const totalRevenue = showProductsFor.products?.reduce((sum, product) => sum + (product.price * product.sold), 0) || 0;
                 
// //                   return (
// //                     <>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold" style={{ color: "#b61d23" }}>{totalProducts}</div>
// //                         <div className="text-muted">Total Products</div>
// //                       </div>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold text-primary">{totalStock}</div>
// //                         <div className="text-muted">Total Stock</div>
// //                       </div>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold text-success">{totalSold}</div>
// //                         <div className="text-muted">Total Sold</div>
// //                       </div>
// //                       <div className="col-3">
// //                         <div className="h4 fw-bold text-warning">₹ {totalRevenue}</div>
// //                         <div className="text-muted">Total Revenue</div>
// //                       </div>
// //                     </>
// //                   );
// //                 })()}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Products by Category */}
// //           {showProductsFor.services.map((category) => {
// //             const categoryProducts = showProductsFor.products?.filter(product => product.category === category) || [];
// //             return (
// //               <div key={category} className="card shadow-sm border-0 mb-4" style={{ backgroundColor: "#fff3f3" }}>
// //                 <div className="card-header" style={{ backgroundColor: "#b61d23", color: "white" }}>
// //                   <h5 className="mb-0">{category} Products</h5>
// //                 </div>
// //                 <div className="card-body p-0">
// //                   <table className="table table-striped mb-0 align-middle">
// //                     <thead style={{ backgroundColor: "#f8f9fa" }}>
// //                       <tr>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none", color: "#000" }}>Product Name</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none", color: "#000" }}>Price</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none", color: "#000" }}>Stock</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none", color: "#000" }}>Sold</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none", color: "#000" }}>Revenue</th>
// //                         <th style={{ padding: "12px 15px", fontWeight: "600", border: "none", color: "#000" }}>Status</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {categoryProducts.length === 0 ? (
// //                         <tr>
// //                           <td colSpan={6} className="text-center p-4 text-muted">
// //                             No products found in {category} category
// //                           </td>
// //                         </tr>
// //                       ) : (
// //                         categoryProducts.map((product) => (
// //                           <tr key={product.id} style={{ backgroundColor: "#fff8f8" }}>
// //                             <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{product.name}</td>
// //                             <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>₹ {product.price}</td>
// //                             <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>
// //                               <span className={`badge ${product.stock > 10 ? "bg-success" : product.stock > 0 ? "bg-warning" : "bg-danger"}`}>
// //                                 {product.stock} units
// //                               </span>
// //                             </td>
// //                             <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>{product.sold} units</td>
// //                             <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>₹ {product.price * product.sold}</td>
// //                             <td style={{ padding: "12px 15px", border: "none", color: "#000" }}>
// //                               <span className={`badge ${product.stock > 0 ? "bg-success" : "bg-danger"}`}>
// //                                 {product.stock > 0 ? "In Stock" : "Out of Stock"}
// //                               </span>
// //                             </td>
// //                           </tr>
// //                         ))
// //                       )}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       )}

// //       {/* Edit Modal */}
// //       {showEditModal && editingVendor && (
// //         <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
// //           <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
// //             <div className="modal-content">
// //               <div className="modal-header" style={{ backgroundColor: "#fff3f3" }}>
// //                 <h5 className="modal-title text-danger fw-bold">Edit Vendor</h5>
// //                 <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
// //               </div>
// //               <div className="modal-body" style={{ backgroundColor: "#fff3f3" }}>
// //                 <div className="row g-3">
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>First Name *</label>
// //                     <input className="form-control" value={editingVendor.firstName} onChange={(e) => updateEditingField("firstName", e.target.value)} />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Last Name *</label>
// //                     <input className="form-control" value={editingVendor.lastName} onChange={(e) => updateEditingField("lastName", e.target.value)} />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Phone Number *</label>
// //                     <input className="form-control" value={editingVendor.phone} onChange={(e) => updateEditingField("phone", e.target.value)} />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Personal Email *</label>
// //                     <input className="form-control" value={editingVendor.personalEmail} onChange={(e) => updateEditingField("personalEmail", e.target.value)} />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Vendor Name *</label>
// //                     <input className="form-control" value={editingVendor.vendorName} onChange={(e) => updateEditingField("vendorName", e.target.value)} />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Vendor Email *</label>
// //                     <input className="form-control" value={editingVendor.vendorEmail} onChange={(e) => updateEditingField("vendorEmail", e.target.value)} />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>GST Number *</label>
// //                     <input className="form-control" value={editingVendor.gst} onChange={(e) => updateEditingField("gst", e.target.value)} />
// //                   </div>
// //                   <div className="col-12">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Product Categories *</label>
// //                     <div>
// //                       {["Grocery", "Electronics", "Furniture", "Home Appliances"].map((category) => (
// //                         <div key={category} className="form-check form-check-inline">
// //                           <input
// //                             className="form-check-input"
// //                             type="checkbox"
// //                             checked={editingVendor.services?.includes(category) || false}
// //                             onChange={(e) => {
// //                               const updatedServices = e.target.checked
// //                                 ? [...(editingVendor.services || []), category]
// //                                 : (editingVendor.services || []).filter(s => s !== category);
// //                               updateEditingField("services", updatedServices);
// //                             }}
// //                           />
// //                           <label className="form-check-label" style={{ color: "#000" }}>{category}</label>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="col-12">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Address *</label>
// //                     <textarea className="form-control" rows={3} value={editingVendor.address} onChange={(e) => updateEditingField("address", e.target.value)} />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>State *</label>
// //                     <select className="form-select" value={editingVendor.state || ""} onChange={(e) => updateEditingField("state", e.target.value)}>
// //                       <option>Andhra Pradesh</option>
// //                       <option>Telangana</option>
// //                       <option>Maharashtra</option>
// //                       <option>Karnataka</option>
// //                     </select>
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>City *</label>
// //                     <select className="form-select" value={editingVendor.city || ""} onChange={(e) => updateEditingField("city", e.target.value)}>
// //                       <option>Visakhapatnam</option>
// //                       <option>Hyderabad</option>
// //                       <option>Mumbai</option>
// //                       <option>Bengaluru</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="modal-footer" style={{ backgroundColor: "#fff3f3" }}>
// //                 <button className="btn btn-secondary" style={{ backgroundColor: "#6c757d", border: "none" }} onClick={() => setShowEditModal(false)}>
// //                   Cancel
// //                 </button>
// //                 <button className="btn btn-warning text-white" style={{ backgroundColor: "#ffc107", border: "none" }} onClick={saveEdit}>
// //                   Update Vendor
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Add Modal */}
// //       {showAddModal && editingVendor && (
// //         <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
// //           <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
// //             <div className="modal-content">
// //               <div className="modal-header" style={{ backgroundColor: "#fff3f3" }}>
// //                 <h5 className="modal-title text-danger fw-bold">Add Vendor</h5>
// //                 <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
// //               </div>
// //               <div className="modal-body" style={{ backgroundColor: "#fff3f3" }}>
// //                 <div className="row g-3">
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>First Name *</label>
// //                     <input className="form-control" value={editingVendor.firstName} onChange={(e) => updateEditingField("firstName", e.target.value)} placeholder="Enter first name" />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Last Name *</label>
// //                     <input className="form-control" value={editingVendor.lastName} onChange={(e) => updateEditingField("lastName", e.target.value)} placeholder="Enter last name" />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Phone Number *</label>
// //                     <input className="form-control" value={editingVendor.phone} onChange={(e) => updateEditingField("phone", e.target.value)} placeholder="Enter 10 digit phone number" />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Personal Email *</label>
// //                     <input className="form-control" value={editingVendor.personalEmail} onChange={(e) => updateEditingField("personalEmail", e.target.value)} placeholder="Enter personal email" />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Vendor Name *</label>
// //                     <input className="form-control" value={editingVendor.vendorName} onChange={(e) => updateEditingField("vendorName", e.target.value)} placeholder="Enter vendor name" />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Vendor Email *</label>
// //                     <input className="form-control" value={editingVendor.vendorEmail} onChange={(e) => updateEditingField("vendorEmail", e.target.value)} placeholder="Enter vendor email" />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Password *</label>
// //                     <input className="form-control" value={editingVendor.password || ""} onChange={(e) => updateEditingField("password", e.target.value)} type="password" placeholder="Enter password" />
// //                     <small className="text-muted">Password must be at least 6 characters</small>
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>GST Number *</label>
// //                     <input className="form-control" value={editingVendor.gst} onChange={(e) => updateEditingField("gst", e.target.value)} placeholder="Enter GST number" />
// //                   </div>
// //                   <div className="col-12">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Product Categories *</label>
// //                     <div>
// //                       {["Grocery", "Electronics", "Furniture", "Home Appliances"].map((category) => (
// //                         <div key={category} className="form-check form-check-inline">
// //                           <input
// //                             className="form-check-input"
// //                             type="checkbox"
// //                             checked={editingVendor.services?.includes(category) || false}
// //                             onChange={(e) => {
// //                               const updatedServices = e.target.checked
// //                                 ? [...(editingVendor.services || []), category]
// //                                 : (editingVendor.services || []).filter(s => s !== category);
// //                               updateEditingField("services", updatedServices);
// //                             }}
// //                           />
// //                           <label className="form-check-label" style={{ color: "#000" }}>{category}</label>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="col-12">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>Address *</label>
// //                     <textarea className="form-control" rows={3} value={editingVendor.address} onChange={(e) => updateEditingField("address", e.target.value)} placeholder="Enter full address" />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>State *</label>
// //                     <select className="form-select" value={editingVendor.state || ""} onChange={(e) => updateEditingField("state", e.target.value)}>
// //                       <option value="">Select State</option>
// //                       <option>Andhra Pradesh</option>
// //                       <option>Telangana</option>
// //                       <option>Maharashtra</option>
// //                     </select>
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label" style={{ color: "#b61d23" }}>City *</label>
// //                     <select className="form-select" value={editingVendor.city || ""} onChange={(e) => updateEditingField("city", e.target.value)}>
// //                       <option value="">Select City</option>
// //                       <option>Visakhapatnam</option>
// //                       <option>Hyderabad</option>
// //                       <option>Mumbai</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="modal-footer" style={{ backgroundColor: "#fff3f3" }}>
// //                 <button className="btn btn-secondary" style={{ backgroundColor: "#6c757d", border: "none" }} onClick={() => setShowAddModal(false)}>
// //                   Cancel
// //                 </button>
// //                 <button className="btn btn-warning text-white" style={{ backgroundColor: "#ffc107", border: "none" }} onClick={saveAdd}>
// //                   Add Vendor
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Confirm Status Modal */}
// //       {showConfirm && (
// //         <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
// //           <div className="modal-dialog modal-dialog-centered" role="document">
// //             <div className="modal-content" style={{ backgroundColor: "#fff3f3" }}>
// //               <div className="modal-header" style={{ backgroundColor: "#fff3f3" }}>
// //                 <h5 className="modal-title text-danger fw-bold">
// //                   {confirmType === "activate" ? "Activate Vendor" : "Deactivate Vendor"}
// //                 </h5>
// //                 <button type="button" className="btn-close" onClick={() => setShowConfirm(false)}></button>
// //               </div>
// //               <div className="modal-body" style={{ backgroundColor: "#fff3f3" }}>
// //                 {selectedVendor && (
// //                   <p style={{ color: "#000" }}>
// //                     Are you sure you want to{" "}
// //                     <strong>
// //                       {confirmType === "activate" ? "activate" : "deactivate"}{" "}
// //                       {selectedVendor.vendorName}?
// //                     </strong>
// //                   </p>
// //                 )}
// //               </div>
// //               <div className="modal-footer" style={{ backgroundColor: "#fff3f3" }}>
// //                 <button className="btn btn-secondary" style={{ backgroundColor: "#6c757d", border: "none" }} onClick={() => setShowConfirm(false)}>
// //                   Cancel
// //                 </button>
// //                 <button
// //                   className={confirmType === "activate" ? "btn btn-success" : "btn btn-danger"}
// //                   style={{ border: "none" }}
// //                   onClick={handleStatusChange}
// //                 >
// //                   Yes, {confirmType === "activate" ? "Activate" : "Deactivate"}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// import React, { useState, useMemo } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   FaEdit,
//   FaToggleOn,
//   FaToggleOff,
//   FaCheck,
//   FaTimes,
//   FaPlus,
//   FaSearch,
//   FaArrowLeft,
//   FaBox,
//   FaShoppingBag,
//   FaCrown,
//   FaAward
// } from "react-icons/fa";

// const initialVendors = [
//   {
//     id: 6,
//     firstName: "Sai",
//     lastName: "M",
//     vendorName: "sai",
//     phone: "2293781964",
//     personalEmail: "ds@hdm.com",
//     vendorEmail: "ds@hdm.com",
//     gst: "xhhhnd",
//     status: "Approved",
//     approved: true,
//     location: "Visakhapatnam, Andhra Pradesh",
//     services: ["Grocery", "Electronics"],
//     address: "na",
//     orders: [],
//     products: [
//       { id: 1, name: "Rice 5kg", category: "Grocery", price: 450, stock: 120, sold: 45 },
//       { id: 2, name: "Lentils 1kg", category: "Grocery", price: 120, stock: 80, sold: 25 },
//       { id: 3, name: "Smartphone", category: "Electronics", price: 15000, stock: 15, sold: 8 }
//     ],
//     subscriberType: "gold" // Added subscriber type
//   },
//   {
//     id: 5,
//     firstName: "vendor",
//     lastName: "verrappan",
//     vendorName: "vendor11",
//     phone: "9878975537",
//     personalEmail: "admin.flh@gmail.com",
//     vendorEmail: "admin.flh@gmail.com",
//     gst: "Ap9868754989275",
//     status: "Approved",
//     approved: true,
//     location: "Chennai, Tamil Nadu",
//     services: ["Electronics", "Furniture", "Home Appliances"],
//     address: "addr 5",
//     orders: [
//       { id: "ORD-1001", date: "2025-10-05", amount: 1200, status: "Delivered" },
//       { id: "ORD-1002", date: "2025-10-09", amount: 560, status: "In Progress" },
//     ],
//     products: [
//       { id: 1, name: "Sofa Set", category: "Furniture", price: 25000, stock: 8, sold: 3 },
//       { id: 2, name: "LED TV", category: "Electronics", price: 35000, stock: 12, sold: 7 },
//       { id: 3, name: "Washing Machine", category: "Home Appliances", price: 18000, stock: 6, sold: 4 }
//     ],
//     subscriberType: "silver" // Added subscriber type
//   },
//   {
//     id: 4,
//     firstName: "Madhu",
//     lastName: "Vendor",
//     vendorName: "Madhu-Vendor",
//     phone: "9879879879",
//     personalEmail: "madhu@yopmail.com",
//     vendorEmail: "madhu@yopmail.com",
//     gst: "M123456",
//     status: "Approved",
//     approved: true,
//     location: "Hyderabad, Telangana",
//     services: ["Grocery", "Home Appliances"],
//     address: "addr 4",
//     orders: [{ id: "ORD-1003", date: "2025-10-10", amount: 120, status: "Cancelled" }],
//     products: [
//       { id: 1, name: "Wheat Flour", category: "Grocery", price: 80, stock: 200, sold: 85 },
//       { id: 2, name: "Refrigerator", category: "Home Appliances", price: 22000, stock: 10, sold: 6 }
//     ],
//     subscriberType: "gold" // Added subscriber type
//   }
// ];

// export default function VendorPage() {
//   const [vendors, setVendors] = useState(initialVendors);
//   const [query, setQuery] = useState("");
//   const [selectedVendor, setSelectedVendor] = useState(null);
//   const [showOrdersFor, setShowOrdersFor] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [confirmType, setConfirmType] = useState("");
//   const [approveFlowFor, setApproveFlowFor] = useState(null);
//   const [editingVendor, setEditingVendor] = useState(null);
//   const [searchResult, setSearchResult] = useState(null);
//   const [notFound, setNotFound] = useState(false);
//   const [showProductsFor, setShowProductsFor] = useState(null);
//   const [showDetailsFor, setShowDetailsFor] = useState(null);

//   // Filtering logic for search bar
//   const filteredVendors = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return vendors;
//     return vendors.filter((v) => {
//       const fields = [
//         `${v.firstName} ${v.lastName}`,
//         v.vendorName,
//         v.personalEmail,
//         v.vendorEmail,
//         v.phone,
//         v.location,
//         v.gst,
//         (v.services || []).join(" "),
//       ];
//       return fields.some((f) => f && f.toLowerCase().includes(q));
//     });
//   }, [vendors, query]);

//   // Search functionality like Customer page
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) {
//       setSearchResult(null);
//       setNotFound(false);
//       return;
//     }
//     const q = query.trim().toLowerCase();
//     const found = vendors.find((v) => {
//       const fields = [
//         `${v.firstName} ${v.lastName}`,
//         v.vendorName,
//         v.personalEmail,
//         v.vendorEmail,
//         v.phone,
//         v.location,
//         v.gst,
//       ];
//       return fields.some((f) => f && f.toLowerCase().includes(q));
//     });
//     if (found) {
//       setSearchResult(found);
//       setNotFound(false);
//     } else {
//       setSearchResult(null);
//       setNotFound(true);
//     }
//   };

//   const handleClearSearch = () => {
//     setQuery("");
//     setSearchResult(null);
//     setNotFound(false);
//   };

//   // Toggle vendor details view
//   const toggleDetails = (vendor) => {
//     if (showDetailsFor === vendor.id) {
//       setShowDetailsFor(null);
//     } else {
//       setShowDetailsFor(vendor.id);
//     }
//   };

//   // Toggle activate/deactivate vendor
//   function toggleActive(vendorId) {
//     setVendors((prev) =>
//       prev.map((v) =>
//         v.id === vendorId
//           ? {
//               ...v,
//               status: v.status === "Deactivated" ? "Approved" : "Deactivated",
//             }
//           : v
//       )
//     );
//   }

//   // Confirm status change
//   const handleConfirmStatus = (vendor, type) => {
//     setSelectedVendor(vendor);
//     setConfirmType(type);
//     setShowConfirm(true);
//   };

//   const handleStatusChange = () => {
//     setVendors((prev) =>
//       prev.map((v) =>
//         v.id === selectedVendor.id
//           ? {
//               ...v,
//               status: confirmType === "activate" ? "Approved" : "Deactivated",
//               approved: confirmType === "activate"
//             }
//           : v
//       )
//     );
//     setShowConfirm(false);
//   };

//   // Approve / Disapprove handlers
//   function openApproveFlow(vendorId) {
//     setApproveFlowFor(vendorId);
//   }
//   function doApprove(vendorId) {
//     setVendors((prev) =>
//       prev.map((v) => (v.id === vendorId ? { ...v, approved: true, status: "Approved" } : v))
//     );
//     setApproveFlowFor(null);
//   }
//   function doDisapprove(vendorId) {
//     setVendors((prev) =>
//       prev.map((v) => (v.id === vendorId ? { ...v, approved: false, status: "Disapproved" } : v))
//     );
//     setApproveFlowFor(null);
//   }

//   // Edit vendor flow
//   function openEdit(vendor) {
//     setEditingVendor({ ...vendor });
//     setShowEditModal(true);
//   }
//   function updateEditingField(field, value) {
//     setEditingVendor((prev) => ({ ...prev, [field]: value }));
//   }
//   function saveEdit() {
//     setVendors((prev) => prev.map((v) => (v.id === editingVendor.id ? editingVendor : v)));
//     setShowEditModal(false);
//     setEditingVendor(null);
//   }

//   // Add vendor flow
//   function openAdd() {
//     setEditingVendor({
//       id: Math.max(...vendors.map((v) => v.id)) + 1,
//       firstName: "",
//       lastName: "",
//       vendorName: "",
//       phone: "",
//       personalEmail: "",
//       vendorEmail: "",
//       gst: "",
//       status: "Pending",
//       approved: false,
//       location: "",
//       services: [],
//       address: "",
//       orders: [],
//       products: [],
//       subscriberType: "silver"
//     });
//     setShowAddModal(true);
//   }
//   function saveAdd() {
//     setVendors((prev) => [editingVendor, ...prev]);
//     setShowAddModal(false);
//     setEditingVendor(null);
//   }

//   // Orders view
//   function viewOrders(vendor) {
//     setShowOrdersFor(vendor);
//   }

//   // Products view
//   function viewProducts(vendor) {
//     setShowProductsFor(vendor);
//   }

//   function backToList() {
//     setShowOrdersFor(null);
//     setShowProductsFor(null);
//   }

//   // Category badge colors
//   const getCategoryColor = (category) => {
//     const colors = {
//       "Grocery": "success",
//       "Electronics": "primary",
//       "Furniture": "warning",
//       "Home Appliances": "info"
//     };
//     return colors[category] || "secondary";
//   };

//   // Get subscriber icon and color
//   const getSubscriberInfo = (subscriberType) => {
//     switch (subscriberType) {
//       case "gold":
//         return { icon: FaCrown, color: "warning", text: "Gold Subscriber" };
//       case "silver":
//         return { icon: FaAward, color: "secondary", text: "Silver Subscriber" };
//       default:
//         return { icon: FaAward, color: "secondary", text: "Silver Subscriber" };
//     }
//   };

//   return (
//     <div className="container mt-4">
//       {/* Back Button for Orders/Products Page */}
//       {(showOrdersFor || showProductsFor) && (
//         <div className="d-flex align-items-center mb-3">
//           <button className="btn btn-outline-secondary me-2" onClick={backToList}>
//             ← Back
//           </button>
//         </div>
//       )}

//       {/* Header - Only show when not in orders/products view */}
//       {!showOrdersFor && !showProductsFor && (
//         <>
//           <div className="d-flex align-items-center justify-content-between mb-4">
//             {/* Title */}
//             <h3 className="mb-0 text-danger fw-bold">Vendors</h3>

//             {/* Search Bar - Matching Customer Page */}
//             <form
//               className="d-flex align-items-center"
//               onSubmit={handleSearch}
//               style={{
//                 backgroundColor: "white",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//                 overflow: "hidden",
//                 height: "42px",
//                 width: "320px",
//               }}
//             >
//               <input
//                 type="text"
//                 className="form-control border-0 shadow-none"
//                 placeholder="Search vendors..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 style={{
//                   flex: 1,
//                   border: "none",
//                   boxShadow: "none",
//                   padding: "8px 12px",
//                   fontSize: "15px",
//                 }}
//               />
//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: "#ffc107",
//                   border: "none",
//                   width: "45px",
//                   height: "42px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                 }}
//               >
//                 <FaSearch color="white" size={16} />
//               </button>
//             </form>

//             {/* Add Vendor Button */}
//             <button
//               className="btn text-white ms-2"
//               style={{ backgroundColor: "#b61d23", borderRadius: "6px" }}
//               onClick={openAdd}
//             >
//               <FaPlus style={{ marginRight: "8px" }} />
//               Add Vendor
//             </button>
//           </div>

//           {/* 🔹 If vendor not found */}
//           {notFound && (
//             <div className="card shadow-sm p-4 text-center border-danger">
//               <h5 className="text-danger fw-bold">No vendor found</h5>
//               <p className="text-muted">Try searching again with a valid name, email, or phone number.</p>
//               <button className="btn btn-secondary" onClick={handleClearSearch}>
//                 Back to List
//               </button>
//             </div>
//           )}

//           {/* 🔹 Search Result View */}
//           {searchResult && !notFound ? (
//             <div className="card shadow-lg p-4">
//               <h4 className="text-danger fw-bold mb-3">Vendor Details</h4>
//               <div className="card-body">
//                 {/* Basic Info */}
//                 <h5 className="fw-bold text-secondary mb-3">Basic Info</h5>
//                 <div className="row">
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Vendor ID:</strong> {searchResult.id}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Name:</strong> {searchResult.firstName} {searchResult.lastName}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Vendor Name:</strong> {searchResult.vendorName}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Phone:</strong> {searchResult.phone}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Personal Email:</strong> {searchResult.personalEmail}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Vendor Email:</strong> {searchResult.vendorEmail}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Location:</strong> {searchResult.location}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>GST Number:</strong> {searchResult.gst}
//                   </div>
//                   <div className="col-md-12 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Subscriber Type:</strong>{" "}
//                     {(() => {
//                       const subInfo = getSubscriberInfo(searchResult.subscriberType);
//                       const IconComponent = subInfo.icon;
//                       return (
//                         <span className={`badge bg-${subInfo.color}`}>
//                           <IconComponent style={{ marginRight: "4px" }} />
//                           {subInfo.text}
//                         </span>
//                       );
//                     })()}
//                   </div>
//                 </div>

//                 <hr />

//                 {/* Activity Info */}
//                 <h5 className="fw-bold text-secondary mb-3">Activity Info</h5>
//                 <div className="row">
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Status:</strong>{" "}
//                     <span
//                       className={`badge ${
//                         searchResult.status === "Approved" ? "bg-success" :
//                         searchResult.status === "Pending Payment" ? "bg-warning" : "bg-danger"
//                       }`}
//                     >
//                       {searchResult.status}
//                     </span>
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Product Categories:</strong>
//                     <div className="mt-1">
//                       {searchResult.services.map((service, index) => (
//                         <span key={index} className={`badge bg-${getCategoryColor(service)} me-1 mb-1`}>
//                           {service}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Total Orders:</strong> {searchResult.orders.length}
//                   </div>
//                   <div className="col-md-6 mb-2" style={{ lineHeight: "1.8" }}>
//                     <strong>Approval Status:</strong>{" "}
//                     <span className={`badge ${searchResult.approved ? "bg-success" : "bg-warning"}`}>
//                       {searchResult.approved ? "Approved" : "Pending"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-4">
//                   <button
//                     className="btn btn-warning me-2 text-white"
//                     onClick={() => openEdit(searchResult)}
//                   >
//                     <FaEdit /> Edit
//                   </button>
//                   <button
//                     className="btn btn-primary me-2"
//                     onClick={() => viewOrders(searchResult)}
//                   >
//                     <FaBox /> View Orders
//                   </button>
//                   <button
//                     className="btn btn-info me-2 text-white"
//                     onClick={() => viewProducts(searchResult)}
//                   >
//                     <FaShoppingBag /> Show Products
//                   </button>
//                   {searchResult.status === "Approved" ? (
//                     <button
//                       className="btn btn-danger me-2"
//                       onClick={() => handleConfirmStatus(searchResult, "deactivate")}
//                     >
//                       <FaTimes /> Deactivate
//                     </button>
//                   ) : (
//                     <button
//                       className="btn btn-success me-2"
//                       onClick={() => handleConfirmStatus(searchResult, "activate")}
//                     >
//                       <FaCheck /> Activate
//                     </button>
//                   )}
//                   <button
//                     className="btn btn-secondary"
//                     onClick={handleClearSearch}
//                   >
//                     <FaArrowLeft /> Back to List
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             !notFound && (
//               /* 🔹 Default Table View */
//               <div className="card shadow-sm border-0 rounded-3">
//                 <div className="card-body p-0">
//                   <table className="table table-striped mb-0 align-middle custom-table">
//                     <thead className="custom-thead">
//                       <tr>
//                         <th>Vendor ID</th>
//                         <th>Name</th>
//                         <th>Vendor Name</th>
//                         <th>Phone Number</th>
//                         <th>Email</th>
//                         <th>Location</th>
//                         <th>Product Categories</th>
//                         <th>Subscriber</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredVendors.map((v) => (
//                         <React.Fragment key={v.id}>
//                           <tr>
//                             <td style={{ lineHeight: "1.8" }}>{v.id}</td>
//                             <td style={{ lineHeight: "1.8" }}>{v.firstName} {v.lastName}</td>
//                             <td style={{ lineHeight: "1.8" }}>{v.vendorName}</td>
//                             <td style={{ lineHeight: "1.8" }}>{v.phone}</td>
//                             <td style={{ lineHeight: "1.8" }}>{v.vendorEmail}</td>
//                             <td style={{ lineHeight: "1.8" }}>{v.location}</td>
//                             <td style={{ lineHeight: "1.8" }}>
//                               <div>
//                                 {v.services.map((service, index) => (
//                                   <span key={index} className={`badge bg-${getCategoryColor(service)} me-1 mb-1`}>
//                                     {service}
//                                   </span>
//                                 ))}
//                               </div>
//                             </td>
//                             <td style={{ lineHeight: "1.8" }}>
//                               {(() => {
//                                 const subInfo = getSubscriberInfo(v.subscriberType);
//                                 const IconComponent = subInfo.icon;
//                                 return (
//                                   <span className={`badge bg-${subInfo.color}`}>
//                                     <IconComponent style={{ marginRight: "4px" }} />
//                                     {subInfo.text}
//                                   </span>
//                                 );
//                               })()}
//                             </td>
//                             <td style={{ lineHeight: "1.8" }}>
//                               <span
//                                 className={`badge ${
//                                   v.status === "Approved" ? "bg-success" :
//                                   v.status === "Pending Payment" ? "bg-warning" : "bg-danger"
//                                 }`}
//                               >
//                                 {v.status}
//                               </span>
//                             </td>
//                             <td style={{ lineHeight: "1.8" }}>
//                               <div className="d-flex gap-2">
//                                 {/* View Orders */}
//                                 <button
//                                   className="btn btn-primary btn-sm"
//                                   title="View Orders"
//                                   onClick={() => viewOrders(v)}
//                                 >
//                                   <FaBox />
//                                 </button>

//                                 {/* Edit */}
//                                 <button
//                                   className="btn btn-warning btn-sm text-white"
//                                   title="Edit Vendor"
//                                   onClick={() => openEdit(v)}
//                                 >
//                                   <FaEdit />
//                                 </button>

//                                 {/* Activate / Deactivate */}
//                                 {v.status === "Approved" ? (
//                                   <button
//                                     className="btn btn-danger btn-sm"
//                                     onClick={() => handleConfirmStatus(v, "deactivate")}
//                                   >
//                                     <FaTimes />
//                                   </button>
//                                 ) : (
//                                   <button
//                                     className="btn btn-success btn-sm"
//                                     onClick={() => handleConfirmStatus(v, "activate")}
//                                   >
//                                     <FaCheck />
//                                   </button>
//                                 )}

//                                 {/* Approve / Disapprove flow */}
//                                 <div style={{ position: "relative" }}>
//                                   <button
//                                     className="btn btn-secondary btn-sm"
//                                     title="Approve / Disapprove"
//                                     onClick={() => openApproveFlow(v.id)}
//                                   >
//                                     <FaCheck />
//                                   </button>

//                                   {approveFlowFor === v.id && (
//                                     <div
//                                       style={{
//                                         position: "absolute",
//                                         right: 0,
//                                         top: "40px",
//                                         zIndex: 50,
//                                         background: "#fff",
//                                         border: "1px solid #eee",
//                                         padding: 8,
//                                         borderRadius: 6,
//                                         boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
//                                         width: 200,
//                                       }}
//                                     >
//                                       <div style={{ marginBottom: 8, fontWeight: 700 }}>Choose action</div>
//                                       <div className="d-flex justify-content-between">
//                                         <button className="btn btn-success btn-sm" onClick={() => doApprove(v.id)}>
//                                           Approve
//                                         </button>
//                                         <button className="btn btn-danger btn-sm" onClick={() => doDisapprove(v.id)}>
//                                           Disapprove
//                                         </button>
//                                       </div>
//                                     </div>
//                                   )}
//                                 </div>
//                               </div>
//                             </td>
//                           </tr>
//                           {/* Details Row */}
//                           {showDetailsFor === v.id && (
//                             <tr>
//                               <td colSpan="10" style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
//                                 <div className="row">
//                                   <div className="col-md-6">
//                                     <h6 className="fw-bold text-danger">Vendor Details</h6>
//                                     <p style={{ lineHeight: "1.8" }}><strong>Personal Email:</strong> {v.personalEmail}</p>
//                                     <p style={{ lineHeight: "1.8" }}><strong>GST Number:</strong> {v.gst}</p>
//                                     <p style={{ lineHeight: "1.8" }}><strong>Address:</strong> {v.address}</p>
//                                     <p style={{ lineHeight: "1.8" }}>
//                                       <strong>Subscriber Type:</strong>{" "}
//                                       {(() => {
//                                         const subInfo = getSubscriberInfo(v.subscriberType);
//                                         const IconComponent = subInfo.icon;
//                                         return (
//                                           <span className={`badge bg-${subInfo.color}`}>
//                                             <IconComponent style={{ marginRight: "4px" }} />
//                                             {subInfo.text}
//                                           </span>
//                                         );
//                                       })()}
//                                     </p>
//                                   </div>
//                                   <div className="col-md-6">
//                                     <h6 className="fw-bold text-danger">Business Info</h6>
//                                     <p style={{ lineHeight: "1.8" }}><strong>Total Products:</strong> {v.products?.length || 0}</p>
//                                     <p style={{ lineHeight: "1.8" }}><strong>Total Orders:</strong> {v.orders.length}</p>
//                                     <p style={{ lineHeight: "1.8" }}><strong>Categories:</strong> {v.services.join(", ")}</p>
//                                   </div>
//                                 </div>
//                                 <div className="mt-3">
//                                   <button
//                                     className="btn btn-info btn-sm me-2 text-white"
//                                     onClick={() => viewProducts(v)}
//                                   >
//                                     <FaShoppingBag /> View Products
//                                   </button>
//                                   <button
//                                     className="btn btn-primary btn-sm me-2"
//                                     onClick={() => viewOrders(v)}
//                                   >
//                                     <FaBox /> View Orders
//                                   </button>
//                                   <button
//                                     className="btn btn-warning btn-sm text-white"
//                                     onClick={() => openEdit(v)}
//                                   >
//                                     <FaEdit /> Edit Vendor
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           )}
//                         </React.Fragment>
//                       ))}

//                       {filteredVendors.length === 0 && (
//                         <tr>
//                           <td colSpan={10} className="text-center p-5" style={{ color: "#777" }}>
//                             No vendors found for "<strong>{query}</strong>"
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )
//           )}
//         </>
//       )}

//       {/* Orders Page */}
//       {showOrdersFor && (
//         <div>
//           <h3 className="text-danger fw-bold mb-4">Vendor Orders - {showOrdersFor.vendorName}</h3>

//           {/* Stats card */}
//           <div className="card mb-4 shadow-sm border-0">
//             <div className="card-body">
//               <div className="row text-center">
//                 {(() => {
//                   const total = showOrdersFor.orders.length;
//                   const delivered = showOrdersFor.orders.filter((o) => o.status === "Delivered").length;
//                   const inprogress = showOrdersFor.orders.filter((o) => o.status === "In Progress").length;
//                   const cancelled = showOrdersFor.orders.filter((o) => o.status === "Cancelled" || o.status === "Rejected").length;
                 
//                   return (
//                     <>
//                       <div className="col-3">
//                         <div className="h4 fw-bold">{total}</div>
//                         <div className="text-muted">Total Orders</div>
//                       </div>
//                       <div className="col-3">
//                         <div className="h4 fw-bold text-success">{delivered}</div>
//                         <div className="text-muted">Delivered</div>
//                       </div>
//                       <div className="col-3">
//                         <div className="h4 fw-bold text-warning">{inprogress}</div>
//                         <div className="text-muted">In Progress</div>
//                       </div>
//                       <div className="col-3">
//                         <div className="h4 fw-bold text-danger">{cancelled}</div>
//                         <div className="text-muted">Cancelled/Rejected</div>
//                       </div>
//                     </>
//                   );
//                 })()}
//               </div>
//             </div>
//           </div>

//           {/* Orders List */}
//           <div className="card shadow-sm border-0 rounded-3">
//             <div className="card-body p-0">
//               <table className="table table-striped mb-0 align-middle custom-table">
//                 <thead className="custom-thead">
//                   <tr>
//                     <th style={{ lineHeight: "1.8" }}>Order ID</th>
//                     <th style={{ lineHeight: "1.8" }}>Date</th>
//                     <th style={{ lineHeight: "1.8" }}>Amount</th>
//                     <th style={{ lineHeight: "1.8" }}>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {showOrdersFor.orders.length === 0 ? (
//                     <tr>
//                       <td colSpan={4} className="text-center p-5">
//                         <div className="text-muted">
//                           <h5>No Orders Found</h5>
//                           <p>This vendor doesn't have any orders yet.</p>
//                         </div>
//                       </td>
//                     </tr>
//                   ) : (
//                     showOrdersFor.orders.map((o) => (
//                       <tr key={o.id}>
//                         <td style={{ lineHeight: "1.8" }}>{o.id}</td>
//                         <td style={{ lineHeight: "1.8" }}>{o.date}</td>
//                         <td style={{ lineHeight: "1.8" }}>₹ {o.amount}</td>
//                         <td style={{ lineHeight: "1.8" }}>
//                           <span className={`badge ${
//                             o.status === "Delivered" ? "bg-success" :
//                             o.status === "In Progress" ? "bg-warning" : "bg-danger"
//                           }`}>
//                             {o.status}
//                           </span>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Products Page */}
//       {showProductsFor && (
//         <div>
//           <h3 className="text-danger fw-bold mb-4">Vendor Products - {showProductsFor.vendorName}</h3>

//           {/* Stats card */}
//           <div className="card mb-4 shadow-sm border-0">
//             <div className="card-body">
//               <div className="row text-center">
//                 {(() => {
//                   const totalProducts = showProductsFor.products?.length || 0;
//                   const totalStock = showProductsFor.products?.reduce((sum, product) => sum + product.stock, 0) || 0;
//                   const totalSold = showProductsFor.products?.reduce((sum, product) => sum + product.sold, 0) || 0;
//                   const totalRevenue = showProductsFor.products?.reduce((sum, product) => sum + (product.price * product.sold), 0) || 0;
                 
//                   return (
//                     <>
//                       <div className="col-3">
//                         <div className="h4 fw-bold">{totalProducts}</div>
//                         <div className="text-muted">Total Products</div>
//                       </div>
//                       <div className="col-3">
//                         <div className="h4 fw-bold text-primary">{totalStock}</div>
//                         <div className="text-muted">Total Stock</div>
//                       </div>
//                       <div className="col-3">
//                         <div className="h4 fw-bold text-success">{totalSold}</div>
//                         <div className="text-muted">Total Sold</div>
//                       </div>
//                       <div className="col-3">
//                         <div className="h4 fw-bold text-warning">₹ {totalRevenue}</div>
//                         <div className="text-muted">Total Revenue</div>
//                       </div>
//                     </>
//                   );
//                 })()}
//               </div>
//             </div>
//           </div>

//           {/* Products by Category */}
//           {showProductsFor.services.map((category) => {
//             const categoryProducts = showProductsFor.products?.filter(product => product.category === category) || [];
//             return (
//               <div key={category} className="card shadow-sm border-0 mb-4">
//                 <div className="card-header" style={{ backgroundColor: "#b61d23", color: "white" }}>
//                   <h5 className="mb-0">{category} Products</h5>
//                 </div>
//                 <div className="card-body p-0">
//                   <table className="table table-striped mb-0 align-middle">
//                     <thead style={{ backgroundColor: "#f8f9fa" }}>
//                       <tr>
//                         <th style={{ lineHeight: "1.8" }}>Product Name</th>
//                         <th style={{ lineHeight: "1.8" }}>Price</th>
//                         <th style={{ lineHeight: "1.8" }}>Stock</th>
//                         <th style={{ lineHeight: "1.8" }}>Sold</th>
//                         <th style={{ lineHeight: "1.8" }}>Revenue</th>
//                         <th style={{ lineHeight: "1.8" }}>Status</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {categoryProducts.length === 0 ? (
//                         <tr>
//                           <td colSpan={6} className="text-center p-4 text-muted">
//                             No products found in {category} category
//                           </td>
//                         </tr>
//                       ) : (
//                         categoryProducts.map((product) => (
//                           <tr key={product.id}>
//                             <td style={{ lineHeight: "1.8" }}>{product.name}</td>
//                             <td style={{ lineHeight: "1.8" }}>₹ {product.price}</td>
//                             <td style={{ lineHeight: "1.8" }}>
//                               <span className={`badge ${product.stock > 10 ? "bg-success" : product.stock > 0 ? "bg-warning" : "bg-danger"}`}>
//                                 {product.stock} units
//                               </span>
//                             </td>
//                             <td style={{ lineHeight: "1.8" }}>{product.sold} units</td>
//                             <td style={{ lineHeight: "1.8" }}>₹ {product.price * product.sold}</td>
//                             <td style={{ lineHeight: "1.8" }}>
//                               <span className={`badge ${product.stock > 0 ? "bg-success" : "bg-danger"}`}>
//                                 {product.stock > 0 ? "In Stock" : "Out of Stock"}
//                               </span>
//                             </td>
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* Edit Modal */}
//       {showEditModal && editingVendor && (
//         <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title text-danger fw-bold">Edit Vendor</h5>
//                 <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <label className="form-label">First Name *</label>
//                     <input className="form-control" value={editingVendor.firstName} onChange={(e) => updateEditingField("firstName", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Last Name *</label>
//                     <input className="form-control" value={editingVendor.lastName} onChange={(e) => updateEditingField("lastName", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Phone Number *</label>
//                     <input className="form-control" value={editingVendor.phone} onChange={(e) => updateEditingField("phone", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Personal Email *</label>
//                     <input className="form-control" value={editingVendor.personalEmail} onChange={(e) => updateEditingField("personalEmail", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Vendor Name *</label>
//                     <input className="form-control" value={editingVendor.vendorName} onChange={(e) => updateEditingField("vendorName", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Vendor Email *</label>
//                     <input className="form-control" value={editingVendor.vendorEmail} onChange={(e) => updateEditingField("vendorEmail", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">GST Number *</label>
//                     <input className="form-control" value={editingVendor.gst} onChange={(e) => updateEditingField("gst", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Subscriber Type *</label>
//                     <select
//                       className="form-select"
//                       value={editingVendor.subscriberType || "silver"}
//                       onChange={(e) => updateEditingField("subscriberType", e.target.value)}
//                     >
//                       <option value="gold">Gold Subscriber</option>
//                       <option value="silver">Silver Subscriber</option>
//                     </select>
//                   </div>
//                   <div className="col-12">
//                     <label className="form-label">Product Categories *</label>
//                     <div>
//                       {["Grocery", "Electronics", "Furniture", "Home Appliances"].map((category) => (
//                         <div key={category} className="form-check form-check-inline">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             checked={editingVendor.services?.includes(category) || false}
//                             onChange={(e) => {
//                               const updatedServices = e.target.checked
//                                 ? [...(editingVendor.services || []), category]
//                                 : (editingVendor.services || []).filter(s => s !== category);
//                               updateEditingField("services", updatedServices);
//                             }}
//                           />
//                           <label className="form-check-label">{category}</label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <label className="form-label">Address *</label>
//                     <textarea className="form-control" rows={3} value={editingVendor.address} onChange={(e) => updateEditingField("address", e.target.value)} />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">State *</label>
//                     <select className="form-select" value={editingVendor.state || ""} onChange={(e) => updateEditingField("state", e.target.value)}>
//                       <option>Andhra Pradesh</option>
//                       <option>Telangana</option>
//                       <option>Maharashtra</option>
//                       <option>Karnataka</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">City *</label>
//                     <select className="form-select" value={editingVendor.city || ""} onChange={(e) => updateEditingField("city", e.target.value)}>
//                       <option>Visakhapatnam</option>
//                       <option>Hyderabad</option>
//                       <option>Mumbai</option>
//                       <option>Bengaluru</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
//                   Cancel
//                 </button>
//                 <button className="btn btn-warning text-white" onClick={saveEdit}>
//                   Update Vendor
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add Modal */}
//       {showAddModal && editingVendor && (
//         <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title text-danger fw-bold">Add Vendor</h5>
//                 <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <label className="form-label">First Name *</label>
//                     <input className="form-control" value={editingVendor.firstName} onChange={(e) => updateEditingField("firstName", e.target.value)} placeholder="Enter first name" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Last Name *</label>
//                     <input className="form-control" value={editingVendor.lastName} onChange={(e) => updateEditingField("lastName", e.target.value)} placeholder="Enter last name" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Phone Number *</label>
//                     <input className="form-control" value={editingVendor.phone} onChange={(e) => updateEditingField("phone", e.target.value)} placeholder="Enter 10 digit phone number" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Personal Email *</label>
//                     <input className="form-control" value={editingVendor.personalEmail} onChange={(e) => updateEditingField("personalEmail", e.target.value)} placeholder="Enter personal email" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Vendor Name *</label>
//                     <input className="form-control" value={editingVendor.vendorName} onChange={(e) => updateEditingField("vendorName", e.target.value)} placeholder="Enter vendor name" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Vendor Email *</label>
//                     <input className="form-control" value={editingVendor.vendorEmail} onChange={(e) => updateEditingField("vendorEmail", e.target.value)} placeholder="Enter vendor email" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Password *</label>
//                     <input className="form-control" value={editingVendor.password || ""} onChange={(e) => updateEditingField("password", e.target.value)} type="password" placeholder="Enter password" />
//                     <small className="text-muted">Password must be at least 6 characters</small>
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">GST Number *</label>
//                     <input className="form-control" value={editingVendor.gst} onChange={(e) => updateEditingField("gst", e.target.value)} placeholder="Enter GST number" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">Subscriber Type *</label>
//                     <select
//                       className="form-select"
//                       value={editingVendor.subscriberType || "silver"}
//                       onChange={(e) => updateEditingField("subscriberType", e.target.value)}
//                     >
//                       <option value="gold">Gold Subscriber</option>
//                       <option value="silver">Silver Subscriber</option>
//                     </select>
//                   </div>
//                   <div className="col-12">
//                     <label className="form-label">Product Categories *</label>
//                     <div>
//                       {["Grocery", "Electronics", "Furniture", "Home Appliances"].map((category) => (
//                         <div key={category} className="form-check form-check-inline">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             checked={editingVendor.services?.includes(category) || false}
//                             onChange={(e) => {
//                               const updatedServices = e.target.checked
//                                 ? [...(editingVendor.services || []), category]
//                                 : (editingVendor.services || []).filter(s => s !== category);
//                               updateEditingField("services", updatedServices);
//                             }}
//                           />
//                           <label className="form-check-label">{category}</label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <label className="form-label">Address *</label>
//                     <textarea className="form-control" rows={3} value={editingVendor.address} onChange={(e) => updateEditingField("address", e.target.value)} placeholder="Enter full address" />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">State *</label>
//                     <select className="form-select" value={editingVendor.state || ""} onChange={(e) => updateEditingField("state", e.target.value)}>
//                       <option value="">Select State</option>
//                       <option>Andhra Pradesh</option>
//                       <option>Telangana</option>
//                       <option>Maharashtra</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label">City *</label>
//                     <select className="form-select" value={editingVendor.city || ""} onChange={(e) => updateEditingField("city", e.target.value)}>
//                       <option value="">Select City</option>
//                       <option>Visakhapatnam</option>
//                       <option>Hyderabad</option>
//                       <option>Mumbai</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
//                   Cancel
//                 </button>
//                 <button className="btn btn-warning text-white" onClick={saveAdd}>
//                   Add Vendor
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Confirm Status Modal */}
//       {showConfirm && (
//         <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title text-danger fw-bold">
//                   {confirmType === "activate" ? "Activate Vendor" : "Deactivate Vendor"}
//                 </h5>
//                 <button type="button" className="btn-close" onClick={() => setShowConfirm(false)}></button>
//               </div>
//               <div className="modal-body">
//                 {selectedVendor && (
//                   <p>
//                     Are you sure you want to{" "}
//                     <strong>
//                       {confirmType === "activate" ? "activate" : "deactivate"}{" "}
//                       {selectedVendor.vendorName}?
//                     </strong>
//                   </p>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-secondary" onClick={() => setShowConfirm(false)}>
//                   Cancel
//                 </button>
//                 <button
//                   className={confirmType === "activate" ? "btn btn-success" : "btn btn-danger"}
//                   onClick={handleStatusChange}
//                 >
//                   Yes, {confirmType === "activate" ? "Activate" : "Deactivate"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }









import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEdit,
  FaToggleOn,
  FaToggleOff,
  FaCheck,
  FaTimes,
  FaPlus,
  FaSearch,
  FaArrowLeft,
  FaBox,
  FaShoppingBag,
  FaCrown,
  FaAward
} from "react-icons/fa";

const initialVendors = [
  {
    id: 6,
    firstName: "Sai",
    lastName: "M",
    vendorName: "sai",
    phone: "2293781964",
    personalEmail: "ds@hdm.com",
    vendorEmail: "ds@hdm.com",
    gst: "xhhhnd",
    status: "Approved",
    approved: true,
    location: "Visakhapatnam, Andhra Pradesh",
    services: ["Grocery", "Electronics"],
    address: "na",
    orders: [],
    products: [
      { id: 1, name: "Rice 5kg", category: "Grocery", price: 450, stock: 120, sold: 45 },
      { id: 2, name: "Lentils 1kg", category: "Grocery", price: 120, stock: 80, sold: 25 },
      { id: 3, name: "Smartphone", category: "Electronics", price: 15000, stock: 15, sold: 8 }
    ],
    subscriberType: "gold"
  },
  {
    id: 5,
    firstName: "vendor",
    lastName: "verrappan",
    vendorName: "vendor11",
    phone: "9878975537",
    personalEmail: "admin.flh@gmail.com",
    vendorEmail: "admin.flh@gmail.com",
    gst: "Ap9868754989275",
    status: "Approved",
    approved: true,
    location: "Chennai, Tamil Nadu",
    services: ["Electronics", "Furniture", "Home Appliances"],
    address: "addr 5",
    orders: [
      { id: "ORD-1001", date: "2025-10-05", amount: 1200, status: "Delivered" },
      { id: "ORD-1002", date: "2025-10-09", amount: 560, status: "In Progress" },
    ],
    products: [
      { id: 1, name: "Sofa Set", category: "Furniture", price: 25000, stock: 8, sold: 3 },
      { id: 2, name: "LED TV", category: "Electronics", price: 35000, stock: 12, sold: 7 },
      { id: 3, name: "Washing Machine", category: "Home Appliances", price: 18000, stock: 6, sold: 4 }
    ],
    subscriberType: "silver"
  },
  {
    id: 4,
    firstName: "Madhu",
    lastName: "Vendor",
    vendorName: "Madhu-Vendor",
    phone: "9879879879",
    personalEmail: "madhu@yopmail.com",
    vendorEmail: "madhu@yopmail.com",
    gst: "M123456",
    status: "Approved",
    approved: true,
    location: "Hyderabad, Telangana",
    services: ["Grocery", "Home Appliances"],
    address: "addr 4",
    orders: [{ id: "ORD-1003", date: "2025-10-10", amount: 120, status: "Cancelled" }],
    products: [
      { id: 1, name: "Wheat Flour", category: "Grocery", price: 80, stock: 200, sold: 85 },
      { id: 2, name: "Refrigerator", category: "Home Appliances", price: 22000, stock: 10, sold: 6 }
    ],
    subscriberType: "gold"
  }
];

export default function VendorPage() {
  const [vendors, setVendors] = useState(initialVendors);
  const [query, setQuery] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [showOrdersFor, setShowOrdersFor] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmType, setConfirmType] = useState("");
  const [approveFlowFor, setApproveFlowFor] = useState(null);
  const [editingVendor, setEditingVendor] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [showProductsFor, setShowProductsFor] = useState(null);
  const [showDetailsFor, setShowDetailsFor] = useState(null);

  // Filtering logic for search bar
  const filteredVendors = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return vendors;
    return vendors.filter((v) => {
      const fields = [
        `${v.firstName} ${v.lastName}`,
        v.vendorName,
        v.personalEmail,
        v.vendorEmail,
        v.phone,
        v.location,
        v.gst,
        (v.services || []).join(" "),
      ];
      return fields.some((f) => f && f.toLowerCase().includes(q));
    });
  }, [vendors, query]);

  // Search functionality like Customer page
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setSearchResult(null);
      setNotFound(false);
      return;
    }
    const q = query.trim().toLowerCase();
    const found = vendors.find((v) => {
      const fields = [
        `${v.firstName} ${v.lastName}`,
        v.vendorName,
        v.personalEmail,
        v.vendorEmail,
        v.phone,
        v.location,
        v.gst,
      ];
      return fields.some((f) => f && f.toLowerCase().includes(q));
    });
    if (found) {
      setSearchResult(found);
      setNotFound(false);
      setSelectedVendor(found);
    } else {
      setSearchResult(null);
      setNotFound(true);
      setSelectedVendor(null);
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    setSearchResult(null);
    setNotFound(false);
    setSelectedVendor(null);
  };

  // Toggle vendor details view
  const toggleDetails = (vendor) => {
    if (showDetailsFor === vendor.id) {
      setShowDetailsFor(null);
    } else {
      setShowDetailsFor(vendor.id);
      setSelectedVendor(vendor);
    }
  };

  // Toggle activate/deactivate vendor
  function toggleActive(vendorId) {
    setVendors((prev) =>
      prev.map((v) =>
        v.id === vendorId
          ? {
              ...v,
              status: v.status === "Deactivated" ? "Approved" : "Deactivated",
            }
          : v
      )
    );
  }

  // Confirm status change
  const handleConfirmStatus = (vendor, type) => {
    setSelectedVendor(vendor);
    setConfirmType(type);
    setShowConfirm(true);
  };

  const handleStatusChange = () => {
    setVendors((prev) =>
      prev.map((v) =>
        v.id === selectedVendor.id
          ? {
              ...v,
              status: confirmType === "activate" ? "Approved" : "Deactivated",
              approved: confirmType === "activate"
            }
          : v
      )
    );
    setShowConfirm(false);
  };

  // Approve / Disapprove handlers
  function openApproveFlow(vendorId) {
    setApproveFlowFor(vendorId);
  }
  function doApprove(vendorId) {
    setVendors((prev) =>
      prev.map((v) => (v.id === vendorId ? { ...v, approved: true, status: "Approved" } : v))
    );
    setApproveFlowFor(null);
  }
  function doDisapprove(vendorId) {
    setVendors((prev) =>
      prev.map((v) => (v.id === vendorId ? { ...v, approved: false, status: "Disapproved" } : v))
    );
    setApproveFlowFor(null);
  }

  // Edit vendor flow
  function openEdit(vendor) {
    setEditingVendor({ ...vendor });
    setShowEditModal(true);
  }
  function updateEditingField(field, value) {
    setEditingVendor((prev) => ({ ...prev, [field]: value }));
  }
  function saveEdit() {
    setVendors((prev) => prev.map((v) => (v.id === editingVendor.id ? editingVendor : v)));
    setShowEditModal(false);
    setEditingVendor(null);
  }

  // Add vendor flow
  function openAdd() {
    setEditingVendor({
      id: Math.max(...vendors.map((v) => v.id)) + 1,
      firstName: "",
      lastName: "",
      vendorName: "",
      phone: "",
      personalEmail: "",
      vendorEmail: "",
      gst: "",
      status: "Pending",
      approved: false,
      location: "",
      services: [],
      address: "",
      orders: [],
      products: [],
      subscriberType: "silver"
    });
    setShowAddModal(true);
  }
  function saveAdd() {
    setVendors((prev) => [editingVendor, ...prev]);
    setShowAddModal(false);
    setEditingVendor(null);
  }

  // Orders view
  function viewOrders(vendor) {
    setShowOrdersFor(vendor);
  }

  // Products view
  function viewProducts(vendor) {
    setShowProductsFor(vendor);
  }

  function backToList() {
    setShowOrdersFor(null);
    setShowProductsFor(null);
    setSearchResult(null);
    setSelectedVendor(null);
  }

  // Category badge colors
  const getCategoryColor = (category) => {
    const colors = {
      "Grocery": "success",
      "Electronics": "primary",
      "Furniture": "warning",
      "Home Appliances": "info"
    };
    return colors[category] || "secondary";
  };

  // Get subscriber icon and color
  const getSubscriberInfo = (subscriberType) => {
    switch (subscriberType) {
      case "gold":
        return { icon: FaCrown, color: "warning", text: "Gold Subscriber" };
      case "silver":
        return { icon: FaAward, color: "secondary", text: "Silver Subscriber" };
      default:
        return { icon: FaAward, color: "secondary", text: "Silver Subscriber" };
    }
  };

  return (
    <div className="container mt-4">
      {/* Back Button for Orders/Products Page */}
      {(showOrdersFor || showProductsFor) && (
        <div className="d-flex align-items-center mb-3">
          <button className="btn btn-outline-secondary me-2" onClick={backToList}>
            ← Back
          </button>
        </div>
      )}

      {/* Header - Only show when not in orders/products view */}
      {!showOrdersFor && !showProductsFor && (
        <>
          <div className="d-flex align-items-center justify-content-between mb-4">
            {/* Title */}
            <h3 className="mb-0 text-danger fw-bold">Vendors</h3>

            {/* Search Bar - Matching Customer Page */}
            <form
              className="d-flex align-items-center"
              onSubmit={handleSearch}
              style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                height: "42px",
                width: "320px",
              }}
            >
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search vendors..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  boxShadow: "none",
                  padding: "8px 12px",
                  fontSize: "15px",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#ffc107",
                  border: "none",
                  width: "45px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FaSearch color="white" size={16} />
              </button>
            </form>

            {/* Add Vendor Button */}
            <button
              className="btn text-white ms-2"
              style={{ backgroundColor: "#b61d23", borderRadius: "6px" }}
              onClick={openAdd}
            >
              <FaPlus style={{ marginRight: "8px" }} />
              Add Vendor
            </button>
          </div>

          {/* 🔹 If vendor not found */}
          {notFound && (
            <div className="card shadow-sm p-4 text-center border-danger">
              <h5 className="text-danger fw-bold">No vendor found</h5>
              <p className="text-muted">Try searching again with a valid name, email, or phone number.</p>
              <button className="btn btn-secondary" onClick={handleClearSearch}>
                Back to List
              </button>
            </div>
          )}
{/* 🔹 Search Result View - Fixed Layout */}
{searchResult && !notFound ? (
  <div
    className="card mb-4"
    style={{
      minHeight: "400px",
      border: "1px solid #dee2e6",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff"
    }}
  >
    <div
      className="card-header"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #dee2e6",
        padding: "20px 20px 0 20px"
      }}
    >
      <h4 style={{
        color: "#b61d23",
        fontWeight: "bold",
        marginBottom: "15px",
        fontSize: "1.5rem"
      }}>
        Vendor Details
      </h4>
    </div>
    <div
      className="card-body"
      style={{
        padding: "20px"
      }}
    >
      {/* Basic Info */}
      <div style={{ marginBottom: "25px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
          <div style={{ flex: "1", minWidth: "300px", padding: "0 10px" }}>
            <h5 style={{
              color: "#6c757d",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "1.1rem"
            }}>
              Basic Info
            </h5>
            <div style={{ lineHeight: "1.8" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Vendor ID:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.id}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Name:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.firstName} {searchResult.lastName}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Vendor Name:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.vendorName}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Phone:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.phone}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Personal Email:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.personalEmail}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Vendor Email:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.vendorEmail}</span>
              </div>
            </div>
          </div>
          <div style={{ flex: "1", minWidth: "300px", padding: "0 10px" }}>
            <h5 style={{
              color: "#6c757d",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "1.1rem"
            }}>
              Location & Business
            </h5>
            <div style={{ lineHeight: "1.8" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Location:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.location}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>GST Number:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.gst}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Address:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.address}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Subscriber Type:</strong>
                <span style={{ marginLeft: "5px" }}>
                  {(() => {
                    const subInfo = getSubscriberInfo(searchResult.subscriberType);
                    const IconComponent = subInfo.icon;
                    return (
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        backgroundColor: subInfo.color === "warning" ? "#ffc107" :
                                       subInfo.color === "secondary" ? "#6c757d" : "#28a745",
                        color: subInfo.color === "warning" ? "#212529" : "#ffffff"
                      }}>
                        <IconComponent style={{ marginRight: "4px", fontSize: "12px" }} />
                        {subInfo.text}
                      </span>
                    );
                  })()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr style={{
        margin: "20px 0",
        border: "none",
        borderTop: "1px solid #dee2e6"
      }} />

      {/* Activity Info */}
      <div style={{ marginBottom: "25px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
          <div style={{ flex: "1", minWidth: "300px", padding: "0 10px" }}>
            <h5 style={{
              color: "#6c757d",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "1.1rem"
            }}>
              Activity Info
            </h5>
            <div style={{ lineHeight: "1.8" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Status:</strong>
                <span style={{ marginLeft: "5px" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#ffffff",
                    backgroundColor: searchResult.status === "Approved" ? "#28a745" :
                                   searchResult.status === "Pending Payment" ? "#ffc107" : "#dc3545"
                  }}>
                    {searchResult.status}
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Approval Status:</strong>
                <span style={{ marginLeft: "5px" }}>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#ffffff",
                    backgroundColor: searchResult.approved ? "#28a745" : "#ffc107"
                  }}>
                    {searchResult.approved ? "Approved" : "Pending"}
                  </span>
                </span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Total Orders:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.orders.length}</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#495057", minWidth: "120px", display: "inline-block" }}>Total Products:</strong>
                <span style={{ color: "#212529", marginLeft: "5px" }}>{searchResult.products?.length || 0}</span>
              </div>
            </div>
          </div>
          <div style={{ flex: "1", minWidth: "300px", padding: "0 10px" }}>
            <h5 style={{
              color: "#6c757d",
              fontWeight: "bold",
              marginBottom: "15px",
              fontSize: "1.1rem"
            }}>
              Product Categories
            </h5>
            <div style={{ lineHeight: "1.8" }}>
              <div>
                {searchResult.services.map((service, index) => (
                  <span
                    key={index}
                    style={{
                      display: "inline-block",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#ffffff",
                      backgroundColor:
                        service === "Grocery" ? "#28a745" :
                        service === "Electronics" ? "#007bff" :
                        service === "Furniture" ? "#ffc107" :
                        service === "Home Appliances" ? "#17a2b8" : "#6c757d",
                      margin: "2px 4px 2px 0"
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px"
      }}>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#ffc107",
            color: "#212529",
            fontWeight: "500",
            cursor: "pointer",
            fontSize: "14px"
          }}
          onClick={() => openEdit(searchResult)}
        >
          <FaEdit style={{ marginRight: "6px" }} /> Edit
        </button>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#ffffff",
            fontWeight: "500",
            cursor: "pointer",
            fontSize: "14px"
          }}
          onClick={() => viewOrders(searchResult)}
        >
          <FaBox style={{ marginRight: "6px" }} /> View Orders
        </button>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#17a2b8",
            color: "#ffffff",
            fontWeight: "500",
            cursor: "pointer",
            fontSize: "14px"
          }}
          onClick={() => viewProducts(searchResult)}
        >
          <FaShoppingBag style={{ marginRight: "6px" }} /> Show Products
        </button>
        {searchResult.status === "Approved" ? (
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#dc3545",
              color: "#ffffff",
              fontWeight: "500",
              cursor: "pointer",
              fontSize: "14px"
            }}
            onClick={() => handleConfirmStatus(searchResult, "deactivate")}
          >
            <FaTimes style={{ marginRight: "6px" }} /> Deactivate
          </button>
        ) : (
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#28a745",
              color: "#ffffff",
              fontWeight: "500",
              cursor: "pointer",
              fontSize: "14px"
            }}
            onClick={() => handleConfirmStatus(searchResult, "activate")}
          >
            <FaCheck style={{ marginRight: "6px" }} /> Activate
          </button>
        )}
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#6c757d",
            color: "#ffffff",
            fontWeight: "500",
            cursor: "pointer",
            fontSize: "14px"
          }}
          onClick={handleClearSearch}
        >
          <FaArrowLeft style={{ marginRight: "6px" }} /> Back to List
        </button>
      </div>
    </div>
  </div>
) : (
  !notFound && (
              /* 🔹 Default Table View */
              <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body p-0">
                  <table className="table table-striped mb-0 align-middle custom-table">
                    <thead className="custom-thead">
                      <tr>
                        <th>Vendor ID</th>
                        <th>Name</th>
                        <th>Vendor Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Product Categories</th>
                        <th>Subscriber</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredVendors.map((v) => (
                        <React.Fragment key={v.id}>
                          <tr>
                            <td style={{ lineHeight: "1.8" }}>{v.id}</td>
                            <td
                              style={{ lineHeight: "1.8", cursor: "pointer", color: "#007bff" }}
                              onClick={() => toggleDetails(v)}
                              title="Click to view details"
                            >
                              {v.firstName} {v.lastName}
                            </td>
                            <td style={{ lineHeight: "1.8" }}>{v.vendorName}</td>
                            <td style={{ lineHeight: "1.8" }}>{v.phone}</td>
                            <td style={{ lineHeight: "1.8" }}>{v.vendorEmail}</td>
                            <td style={{ lineHeight: "1.8" }}>{v.location}</td>
                            <td style={{ lineHeight: "1.8" }}>
                              <div>
                                {v.services.map((service, index) => (
                                  <span key={index} className={`badge bg-${getCategoryColor(service)} me-1 mb-1`}>
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td style={{ lineHeight: "1.8" }}>
                              {(() => {
                                const subInfo = getSubscriberInfo(v.subscriberType);
                                const IconComponent = subInfo.icon;
                                return (
                                  <span className={`badge bg-${subInfo.color}`}>
                                    <IconComponent style={{ marginRight: "4px" }} />
                                    {subInfo.text}
                                  </span>
                                );
                              })()}
                            </td>
                            <td style={{ lineHeight: "1.8" }}>
                              <span
                                className={`badge ${
                                  v.status === "Approved" ? "bg-success" :
                                  v.status === "Pending Payment" ? "bg-warning" : "bg-danger"
                                }`}
                              >
                                {v.status}
                              </span>
                            </td>
                            <td style={{ lineHeight: "1.8" }}>
                              <div className="d-flex gap-2">
                                {/* View Orders */}
                                <button
                                  className="btn btn-primary btn-sm"
                                  title="View Orders"
                                  onClick={() => viewOrders(v)}
                                >
                                  <FaBox />
                                </button>

                                {/* Edit */}
                                <button
                                  className="btn btn-warning btn-sm text-white"
                                  title="Edit Vendor"
                                  onClick={() => openEdit(v)}
                                >
                                  <FaEdit />
                                </button>

                                {/* Activate / Deactivate */}
                                {v.status === "Approved" ? (
                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleConfirmStatus(v, "deactivate")}
                                  >
                                    <FaTimes />
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => handleConfirmStatus(v, "activate")}
                                  >
                                    <FaCheck />
                                  </button>
                                )}

                                {/* Approve / Disapprove flow */}
                                <div style={{ position: "relative" }}>
                                  <button
                                    className="btn btn-secondary btn-sm"
                                    title="Approve / Disapprove"
                                    onClick={() => openApproveFlow(v.id)}
                                  >
                                    <FaCheck />
                                  </button>

                                  {approveFlowFor === v.id && (
                                    <div
                                      style={{
                                        position: "absolute",
                                        right: 0,
                                        top: "40px",
                                        zIndex: 50,
                                        background: "#fff",
                                        border: "1px solid #eee",
                                        padding: 8,
                                        borderRadius: 6,
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                                        width: 200,
                                      }}
                                    >
                                      <div style={{ marginBottom: 8, fontWeight: 700 }}>Choose action</div>
                                      <div className="d-flex justify-content-between">
                                        <button className="btn btn-success btn-sm" onClick={() => doApprove(v.id)}>
                                          Approve
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => doDisapprove(v.id)}>
                                          Disapprove
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                          {/* Details Row */}
                          {showDetailsFor === v.id && (
                            <tr>
                              <td colSpan="10" style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
                                <div className="row">
                                  <div className="col-md-6">
                                    <h6 className="fw-bold text-danger">Vendor Details</h6>
                                    <p style={{ lineHeight: "1.8" }}><strong>Personal Email:</strong> {v.personalEmail}</p>
                                    <p style={{ lineHeight: "1.8" }}><strong>GST Number:</strong> {v.gst}</p>
                                    <p style={{ lineHeight: "1.8" }}><strong>Address:</strong> {v.address}</p>
                                    <p style={{ lineHeight: "1.8" }}>
                                      <strong>Subscriber Type:</strong>{" "}
                                      {(() => {
                                        const subInfo = getSubscriberInfo(v.subscriberType);
                                        const IconComponent = subInfo.icon;
                                        return (
                                          <span className={`badge bg-${subInfo.color}`}>
                                            <IconComponent style={{ marginRight: "4px" }} />
                                            {subInfo.text}
                                          </span>
                                        );
                                      })()}
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <h6 className="fw-bold text-danger">Business Info</h6>
                                    <p style={{ lineHeight: "1.8" }}><strong>Total Products:</strong> {v.products?.length || 0}</p>
                                    <p style={{ lineHeight: "1.8" }}><strong>Total Orders:</strong> {v.orders.length}</p>
                                    <p style={{ lineHeight: "1.8" }}><strong>Categories:</strong> {v.services.join(", ")}</p>
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <button
                                    className="btn btn-info btn-sm me-2 text-white"
                                    onClick={() => viewProducts(v)}
                                  >
                                    <FaShoppingBag /> View Products
                                  </button>
                                  <button
                                    className="btn btn-primary btn-sm me-2"
                                    onClick={() => viewOrders(v)}
                                  >
                                    <FaBox /> View Orders
                                  </button>
                                  <button
                                    className="btn btn-warning btn-sm text-white"
                                    onClick={() => openEdit(v)}
                                  >
                                    <FaEdit /> Edit Vendor
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}

                      {filteredVendors.length === 0 && (
                        <tr>
                          <td colSpan={10} className="text-center p-5" style={{ color: "#777" }}>
                            No vendors found for "<strong>{query}</strong>"
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
        </>
      )}

      {/* Orders Page */}
      {showOrdersFor && (
        <div>
          <h3 className="text-danger fw-bold mb-4">Vendor Orders - {showOrdersFor.vendorName}</h3>

          {/* Stats card */}
          <div className="card mb-4 shadow-sm border-0">
            <div className="card-body">
              <div className="row text-center">
                {(() => {
                  const total = showOrdersFor.orders.length;
                  const delivered = showOrdersFor.orders.filter((o) => o.status === "Delivered").length;
                  const inprogress = showOrdersFor.orders.filter((o) => o.status === "In Progress").length;
                  const cancelled = showOrdersFor.orders.filter((o) => o.status === "Cancelled" || o.status === "Rejected").length;
                 
                  return (
                    <>
                      <div className="col-3">
                        <div className="h4 fw-bold">{total}</div>
                        <div className="text-muted">Total Orders</div>
                      </div>
                      <div className="col-3">
                        <div className="h4 fw-bold text-success">{delivered}</div>
                        <div className="text-muted">Delivered</div>
                      </div>
                      <div className="col-3">
                        <div className="h4 fw-bold text-warning">{inprogress}</div>
                        <div className="text-muted">In Progress</div>
                      </div>
                      <div className="col-3">
                        <div className="h4 fw-bold text-danger">{cancelled}</div>
                        <div className="text-muted">Cancelled/Rejected</div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-0">
              <table className="table table-striped mb-0 align-middle custom-table">
                <thead className="custom-thead">
                  <tr>
                    <th style={{ lineHeight: "1.8" }}>Order ID</th>
                    <th style={{ lineHeight: "1.8" }}>Date</th>
                    <th style={{ lineHeight: "1.8" }}>Amount</th>
                    <th style={{ lineHeight: "1.8" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {showOrdersFor.orders.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center p-5">
                        <div className="text-muted">
                          <h5>No Orders Found</h5>
                          <p>This vendor doesn't have any orders yet.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    showOrdersFor.orders.map((o) => (
                      <tr key={o.id}>
                        <td style={{ lineHeight: "1.8" }}>{o.id}</td>
                        <td style={{ lineHeight: "1.8" }}>{o.date}</td>
                        <td style={{ lineHeight: "1.8" }}>₹ {o.amount}</td>
                        <td style={{ lineHeight: "1.8" }}>
                          <span className={`badge ${
                            o.status === "Delivered" ? "bg-success" :
                            o.status === "In Progress" ? "bg-warning" : "bg-danger"
                          }`}>
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Products Page */}
      {showProductsFor && (
        <div>
          <h3 className="text-danger fw-bold mb-4">Vendor Products - {showProductsFor.vendorName}</h3>

          {/* Stats card */}
          <div className="card mb-4 shadow-sm border-0">
            <div className="card-body">
              <div className="row text-center">
                {(() => {
                  const totalProducts = showProductsFor.products?.length || 0;
                  const totalStock = showProductsFor.products?.reduce((sum, product) => sum + product.stock, 0) || 0;
                  const totalSold = showProductsFor.products?.reduce((sum, product) => sum + product.sold, 0) || 0;
                  const totalRevenue = showProductsFor.products?.reduce((sum, product) => sum + (product.price * product.sold), 0) || 0;
                 
                  return (
                    <>
                      <div className="col-3">
                        <div className="h4 fw-bold">{totalProducts}</div>
                        <div className="text-muted">Total Products</div>
                      </div>
                      <div className="col-3">
                        <div className="h4 fw-bold text-primary">{totalStock}</div>
                        <div className="text-muted">Total Stock</div>
                      </div>
                      <div className="col-3">
                        <div className="h4 fw-bold text-success">{totalSold}</div>
                        <div className="text-muted">Total Sold</div>
                      </div>
                      <div className="col-3">
                        <div className="h4 fw-bold text-warning">₹ {totalRevenue}</div>
                        <div className="text-muted">Total Revenue</div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Products by Category */}
          {showProductsFor.services.map((category) => {
            const categoryProducts = showProductsFor.products?.filter(product => product.category === category) || [];
            return (
              <div key={category} className="card shadow-sm border-0 mb-4">
                <div className="card-header" style={{ backgroundColor: "#b61d23", color: "white" }}>
                  <h5 className="mb-0">{category} Products</h5>
                </div>
                <div className="card-body p-0">
                  <table className="table table-striped mb-0 align-middle">
                    <thead style={{ backgroundColor: "#f8f9fa" }}>
                      <tr>
                        <th style={{ lineHeight: "1.8" }}>Product Name</th>
                        <th style={{ lineHeight: "1.8" }}>Price</th>
                        <th style={{ lineHeight: "1.8" }}>Stock</th>
                        <th style={{ lineHeight: "1.8" }}>Sold</th>
                        <th style={{ lineHeight: "1.8" }}>Revenue</th>
                        <th style={{ lineHeight: "1.8" }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryProducts.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center p-4 text-muted">
                            No products found in {category} category
                          </td>
                        </tr>
                      ) : (
                        categoryProducts.map((product) => (
                          <tr key={product.id}>
                            <td style={{ lineHeight: "1.8" }}>{product.name}</td>
                            <td style={{ lineHeight: "1.8" }}>₹ {product.price}</td>
                            <td style={{ lineHeight: "1.8" }}>
                              <span className={`badge ${product.stock > 10 ? "bg-success" : product.stock > 0 ? "bg-warning" : "bg-danger"}`}>
                                {product.stock} units
                              </span>
                            </td>
                            <td style={{ lineHeight: "1.8" }}>{product.sold} units</td>
                            <td style={{ lineHeight: "1.8" }}>₹ {product.price * product.sold}</td>
                            <td style={{ lineHeight: "1.8" }}>
                              <span className={`badge ${product.stock > 0 ? "bg-success" : "bg-danger"}`}>
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editingVendor && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger fw-bold">Edit Vendor</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name *</label>
                    <input className="form-control" value={editingVendor.firstName} onChange={(e) => updateEditingField("firstName", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name *</label>
                    <input className="form-control" value={editingVendor.lastName} onChange={(e) => updateEditingField("lastName", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-control" value={editingVendor.phone} onChange={(e) => updateEditingField("phone", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Personal Email *</label>
                    <input className="form-control" value={editingVendor.personalEmail} onChange={(e) => updateEditingField("personalEmail", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Vendor Name *</label>
                    <input className="form-control" value={editingVendor.vendorName} onChange={(e) => updateEditingField("vendorName", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Vendor Email *</label>
                    <input className="form-control" value={editingVendor.vendorEmail} onChange={(e) => updateEditingField("vendorEmail", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">GST Number *</label>
                    <input className="form-control" value={editingVendor.gst} onChange={(e) => updateEditingField("gst", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Subscriber Type *</label>
                    <select
                      className="form-select"
                      value={editingVendor.subscriberType || "silver"}
                      onChange={(e) => updateEditingField("subscriberType", e.target.value)}
                    >
                      <option value="gold">Gold Subscriber</option>
                      <option value="silver">Silver Subscriber</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Product Categories *</label>
                    <div>
                      {["Grocery", "Electronics", "Furniture", "Home Appliances"].map((category) => (
                        <div key={category} className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={editingVendor.services?.includes(category) || false}
                            onChange={(e) => {
                              const updatedServices = e.target.checked
                                ? [...(editingVendor.services || []), category]
                                : (editingVendor.services || []).filter(s => s !== category);
                              updateEditingField("services", updatedServices);
                            }}
                          />
                          <label className="form-check-label">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address *</label>
                    <textarea className="form-control" rows={3} value={editingVendor.address} onChange={(e) => updateEditingField("address", e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State *</label>
                    <select className="form-select" value={editingVendor.state || ""} onChange={(e) => updateEditingField("state", e.target.value)}>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City *</label>
                    <select className="form-select" value={editingVendor.city || ""} onChange={(e) => updateEditingField("city", e.target.value)}>
                      <option>Visakhapatnam</option>
                      <option>Hyderabad</option>
                      <option>Mumbai</option>
                      <option>Bengaluru</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-warning text-white" onClick={saveEdit}>
                  Update Vendor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && editingVendor && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger fw-bold">Add Vendor</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name *</label>
                    <input className="form-control" value={editingVendor.firstName} onChange={(e) => updateEditingField("firstName", e.target.value)} placeholder="Enter first name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name *</label>
                    <input className="form-control" value={editingVendor.lastName} onChange={(e) => updateEditingField("lastName", e.target.value)} placeholder="Enter last name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-control" value={editingVendor.phone} onChange={(e) => updateEditingField("phone", e.target.value)} placeholder="Enter 10 digit phone number" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Personal Email *</label>
                    <input className="form-control" value={editingVendor.personalEmail} onChange={(e) => updateEditingField("personalEmail", e.target.value)} placeholder="Enter personal email" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Vendor Name *</label>
                    <input className="form-control" value={editingVendor.vendorName} onChange={(e) => updateEditingField("vendorName", e.target.value)} placeholder="Enter vendor name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Vendor Email *</label>
                    <input className="form-control" value={editingVendor.vendorEmail} onChange={(e) => updateEditingField("vendorEmail", e.target.value)} placeholder="Enter vendor email" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Password *</label>
                    <input className="form-control" value={editingVendor.password || ""} onChange={(e) => updateEditingField("password", e.target.value)} type="password" placeholder="Enter password" />
                    <small className="text-muted">Password must be at least 6 characters</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">GST Number *</label>
                    <input className="form-control" value={editingVendor.gst} onChange={(e) => updateEditingField("gst", e.target.value)} placeholder="Enter GST number" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Subscriber Type *</label>
                    <select
                      className="form-select"
                      value={editingVendor.subscriberType || "silver"}
                      onChange={(e) => updateEditingField("subscriberType", e.target.value)}
                    >
                      <option value="gold">Gold Subscriber</option>
                      <option value="silver">Silver Subscriber</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Product Categories *</label>
                    <div>
                      {["Grocery", "Electronics", "Furniture", "Home Appliances"].map((category) => (
                        <div key={category} className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={editingVendor.services?.includes(category) || false}
                            onChange={(e) => {
                              const updatedServices = e.target.checked
                                ? [...(editingVendor.services || []), category]
                                : (editingVendor.services || []).filter(s => s !== category);
                              updateEditingField("services", updatedServices);
                            }}
                          />
                          <label className="form-check-label">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address *</label>
                    <textarea className="form-control" rows={3} value={editingVendor.address} onChange={(e) => updateEditingField("address", e.target.value)} placeholder="Enter full address" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State *</label>
                    <select className="form-select" value={editingVendor.state || ""} onChange={(e) => updateEditingField("state", e.target.value)}>
                      <option value="">Select State</option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Maharashtra</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City *</label>
                    <select className="form-select" value={editingVendor.city || ""} onChange={(e) => updateEditingField("city", e.target.value)}>
                      <option value="">Select City</option>
                      <option>Visakhapatnam</option>
                      <option>Hyderabad</option>
                      <option>Mumbai</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-warning text-white" onClick={saveAdd}>
                  Add Vendor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Status Modal */}
      {showConfirm && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger fw-bold">
                  {confirmType === "activate" ? "Activate Vendor" : "Deactivate Vendor"}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowConfirm(false)}></button>
              </div>
              <div className="modal-body">
                {selectedVendor && (
                  <p>
                    Are you sure you want to{" "}
                    <strong>
                      {confirmType === "activate" ? "activate" : "deactivate"}{" "}
                      {selectedVendor.vendorName}?
                    </strong>
                  </p>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowConfirm(false)}>
                  Cancel
                </button>
                <button
                  className={confirmType === "activate" ? "btn btn-success" : "btn btn-danger"}
                  onClick={handleStatusChange}
                >
                  Yes, {confirmType === "activate" ? "Activate" : "Deactivate"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
